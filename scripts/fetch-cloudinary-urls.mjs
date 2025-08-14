// scripts/fetch-cloudinary-urls.mjs
// Note: Save this with .mjs extension to use ES modules

import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

// Configure Cloudinary - REPLACE THESE WITH YOUR ACTUAL VALUES
cloudinary.config({
  cloud_name: 'dnmv0qdve',     // Replace with your cloud name
  api_key: '542834629669573',           // Replace with your API key
  api_secret: 'uozbDmyvR4e1cMTwCXnN173KyEg'      // Replace with your API secret
});

async function fetchGalleryUrls() {
  console.log('🔍 Fetching images from Cloudinary...\n');
  
  const galleries = {};
  const years = ['2015', '2016', '2017', '2018', '2019', '2021', '2022', '2023', '2024'];
  
  for (const year of years) {
    try {
      // Fetch all images in the gallery/year folder
      const result = await cloudinary.api.resources({
        type: 'upload',
        prefix: `gallery/${year}/`,
        max_results: 500, // Adjust if you have more than 500 images per year
        resource_type: 'image'
      });
      
      // Sort images by their public_id to maintain order
      const sortedResources = result.resources.sort((a, b) => {
        // Extract the image number from public_id if possible
        const getNumber = (publicId) => {
          const match = publicId.match(/img(\d+)/);
          return match ? parseInt(match[1]) : 0;
        };
        return getNumber(a.public_id) - getNumber(b.public_id);
      });
      
      // Get the secure URLs with optimization
      galleries[year] = sortedResources.map(resource => {
        // Use the secure_url but add optimization parameters
        const url = resource.secure_url;
        // Replace /upload/ with /upload/f_auto,q_auto/ for optimization
        return url.replace('/upload/', '/upload/f_auto,q_auto/');
      });
      
      console.log(`✅ ${year}: Found ${galleries[year].length} images`);
      
    } catch (error) {
      console.error(`❌ Error fetching ${year}:`, error.message);
      galleries[year] = [];
    }
  }
  
  // Generate the TypeScript file
  const fileContent = `// Auto-generated from Cloudinary
// Generated on: ${new Date().toISOString()}

${years.map(year => `const gallery${year} = ${JSON.stringify(galleries[year] || [], null, 2)};`).join('\n\n')}

export const galleries = {
  ${years.map(year => `${year}: gallery${year}`).join(',\n  ')}
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
  
  // Backup existing file
  if (fs.existsSync('./data/galleryImages.ts')) {
    fs.writeFileSync('./data/galleryImages.backup.ts', fs.readFileSync('./data/galleryImages.ts'));
    console.log('\n📁 Created backup: galleryImages.backup.ts');
  }
  
  // Write new file
  fs.writeFileSync('./data/galleryImages.ts', fileContent);
  
  // Summary
  const totalImages = Object.values(galleries).flat().length;
  console.log('\n📊 Summary:');
  console.log(`   Total images fetched: ${totalImages}`);
  console.log(`   File saved to: data/galleryImages.ts`);
  console.log('\n✅ Done! Test your media page to ensure images load correctly.');
}

fetchGalleryUrls().catch(console.error);