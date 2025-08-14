// scripts/generate-urls-simple.mjs
// This script generates your galleryImages.ts file with all Cloudinary URLs

import fs from 'fs';

// Your Cloudinary info
const CLOUD_NAME = 'nausa';  // Your actual cloud name

// Based on your original galleryImages.ts file
// These are the EXACT image counts and extensions from your original file
const imagesByYear = {
  2015: { count: 18, extension: 'jpeg' },
  2016: { count: 25, mixed: true },        // Has mixed .jpg and .jpeg
  2017: { count: 22, extension: 'jpeg' },
  2018: { count: 22, mixed: true },        // Has mixed .jpg and .jpeg
  2019: { count: 20, extension: 'jpg' },
  2021: { count: 15, extension: 'jpg' },
  2022: { count: 33, extension: 'jpeg' },
  2023: { count: 20, extension: 'jpg' },
  2024: { count: 492, extension: 'jpg' }
};

// For 2016 and 2018 which have mixed extensions (from your original file)
const mixedExtensions = {
  2016: ['jpg','jpg','jpg','jpg','jpg','jpg','jpg','jpeg','jpeg','jpeg','jpeg','jpeg','jpeg','jpeg','jpeg','jpeg','jpeg','jpeg','jpeg','jpeg','jpeg','jpeg','jpeg','jpeg','jpeg'],
  2018: ['jpeg','jpg','jpg','jpg','jpg','jpeg','jpg','jpg','jpeg','jpg','jpeg','jpg','jpeg','jpg','jpg','jpg','jpg','jpg','jpeg','jpg','jpeg','jpg']
};

function generateGalleryUrls() {
  const galleries = {};
  
  // Generate URLs based on the actual pattern from your original file
  Object.entries(imagesByYear).forEach(([year, info]) => {
    galleries[year] = [];
    
    for (let i = 1; i <= info.count; i++) {
      let extension;
      
      // Handle mixed extensions
      if (info.mixed && mixedExtensions[year]) {
        extension = mixedExtensions[year][i - 1] || 'jpg';
      } else {
        extension = info.extension || 'jpg';
      }
      
      // Generate URL matching Cloudinary's format (with extension)
      const url = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto/gallery/${year}/img${i}.${extension}`;
      galleries[year].push(url);
    }
  });
  
  // Generate the TypeScript file
  const fileContent = `// Cloudinary Gallery URLs
// Generated on: ${new Date().toISOString()}
// Cloud name: ${CLOUD_NAME}

${Object.entries(galleries).map(([year, urls]) => 
  `const gallery${year} = [
${urls.map(url => `  "${url}"`).join(',\n')}
];`
).join('\n\n')}

export const galleries = {
  2015: gallery2015,
  2016: gallery2016,
  2017: gallery2017,
  2018: gallery2018,
  2019: gallery2019,
  2021: gallery2021,
  2022: gallery2022,
  2023: gallery2023,
  2024: gallery2024
};

// Helper functions for different image sizes
export const getImageUrl = (url: string, width?: number) => {
  if (!width) return url;
  return url.replace('/upload/', \`/upload/w_\${width},c_limit/\`);
};

export const getThumbnailUrl = (url: string) => getImageUrl(url, 300);
export const getMediumUrl = (url: string) => getImageUrl(url, 800);
export const getFullSizeUrl = (url: string) => getImageUrl(url, 1920);
`;
  
  // Create backup of existing file if it exists
  if (fs.existsSync('./src/data/galleryImages.ts')) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    fs.writeFileSync(`./src/data/galleryImages.backup-${timestamp}.ts`, fs.readFileSync('./src/data/galleryImages.ts'));
    console.log(`✅ Created backup of existing galleryImages.ts`);
  }
  
  // Save the new file
  fs.writeFileSync('./src/data/galleryImages.ts', fileContent);
  
  const totalImages = Object.values(galleries).flat().length;
  console.log(`\n✅ Generated galleryImages.ts with ${totalImages} image URLs`);
  console.log('\n📁 File saved to: src/data/galleryImages.ts');
  console.log('\n📊 Images per year:');
  Object.entries(imagesByYear).forEach(([year, info]) => {
    console.log(`   ${year}: ${info.count} images`);
  });
  console.log('\n⚠️  Important: This assumes your images in Cloudinary are named img1, img2, img3, etc.');
  console.log('If any images have different names, you\'ll need to adjust the URLs manually.');
}

// Run the generation
generateGalleryUrls();