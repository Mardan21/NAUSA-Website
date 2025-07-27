"use client";

import Image from "next/image";
import { Play, X } from "lucide-react";
import { useState } from "react";

const highlights = [
  {
    id: 1,
    title: "Uyghur United vs Canada United",
    category: "2023 Championship Final",
    thumbnail: "/images/thumbnails/uac_final_2023.jpg",
    duration: "1:22:29",
    youtubeId: "SBF1yTZZNHU?si=hhJ-wUI8qZxmiHgL",
  },
  {
    id: 2,
    title: "Uyghur United vs Canada Bogda FC",
    category: "2018 Championship Final",
    thumbnail: "/images/thumbnails/uac_final_2018.jpg",
    duration: "1:44:31",
    youtubeId: "TtfjOuz58tY?si=VtEng0eQl3YeNY1-",
  },
  {
    id: 3,
    title: "2019 UAC Highlights (San Francisco)",
    category: "Tournament Highlights",
    thumbnail: "/images/thumbnails/uac_highlights_2019.jpg",
    duration: "15:20",
    youtubeId: "2D2R-Dc3qlo?si=FkeoW5-eMVaovZrX",
  },
];

export default function HighlightsSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const openVideo = (youtubeId: string) => {
    setSelectedVideo(youtubeId);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-14 bg-nausa-lightblue/50 relative overflow-hidden">
      {/* Background pattern */}
      {/* <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(246,245,174,0.7) 35px, rgba(165,159,120,.1) 70px)`,
          }}
        ></div>
      </div> */}

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-black text-white text-center mb-12">
          FEATURED <span className="text-nausa-vanilla">MEDIA</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => openVideo(highlight.youtubeId)}
            >
              <div className="relative h-64">
                <Image
                  src={highlight.thumbnail}
                  alt={highlight.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-nausa-vanilla rounded-full p-4">
                  <Play className="w-8 h-8 text-nausa-lightblue" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-3/10 bg-white/20 backdrop-blur-xs">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-bold uppercase text-nausa-vanilla mb-1">
                    {highlight.category}
                  </p>
                  <h3 className="text-xl font-bold">{highlight.title}</h3>
                  {/* <p className="text-sm opacity-75 mt-1">
                    {highlight.duration}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* YouTube Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-nausa-vanilla transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
