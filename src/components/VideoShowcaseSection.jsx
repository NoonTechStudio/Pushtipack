import React, { useState, useRef, useEffect } from "react";
import { Play } from "lucide-react";
import thumbnail from '../assets/Images/thumbnail.png';

const VideoShowcaseSection = ({
  youtubeVideoId = "pTrkSTJn77U", // Replace with your actual YouTube video ID
  thumbnailImage = thumbnail, // Replace with your actual thumbnail image URL
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef(null);
  const iframeRef = useRef(null);

  // Auto-play on hover (desktop only)
  useEffect(() => {
    let hoverTimeout;

    if (isHovering && !isPlaying && window.innerWidth > 768) {
      // Start playing after 500ms of hovering
      hoverTimeout = setTimeout(() => {
        handlePlay();
      }, 500);
    }

    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [isHovering, isPlaying]);

  // Handle play - hide thumbnail and show iframe
  const handlePlay = () => {
    setShowThumbnail(false);
    setIsPlaying(true);

    // Send postMessage to YouTube iframe to play the video
    if (iframeRef.current) {
      iframeRef.current.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "playVideo", args: "" }),
        "*"
      );
    }
  };

  // YouTube embed URL with parameters
  const getYouTubeEmbedUrl = () => {
    return `https://www.youtube.com/embed/${youtubeVideoId}?enablejsapi=1&autoplay=${isPlaying ? 1 : 0}&mute=0&rel=0&modestbranding=1`;
  };

  return (
    <div ref={sectionRef} className="bg-gray-900 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Minimal Accent Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative py-8 md:py-12">
        {/* Section Content */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 tracking-tight">
              Our Excellence in Action
            </h2>
          </div>

          {/* Video Container */}
          <div className="w-full mx-auto">
            <div
              className="relative rounded-xl md:rounded-3xl overflow-hidden shadow-2xl border border-gray-800 md:border-2 group"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Thumbnail Overlay */}
              {showThumbnail && (
                <div
                  className="relative w-full aspect-video cursor-pointer group/thumbnail"
                  onClick={handlePlay}
                >
                  {/* Thumbnail Image */}
                  <img
                    src={thumbnailImage}
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/thumbnail:scale-105"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300 group-hover/thumbnail:bg-black/30"></div>

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={handlePlay}
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white hover:bg-gray-900 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 group-hover/thumbnail:scale-110 shadow-2xl group/button"
                      aria-label="Play video"
                    >
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-900 group-hover/button:text-white transition-colors duration-300 ml-1" />
                    </button>
                  </div>

                  {/* Hover Indicator Text (Desktop Only) */}
                  {isHovering && window.innerWidth > 768 && (
                    <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full">
                      <p className="text-gray-900 font-medium text-sm">
                        Hover to play
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* YouTube Iframe */}
              <iframe
                ref={iframeRef}
                className={`w-full aspect-video ${showThumbnail ? "hidden" : "block"}`}
                src={getYouTubeEmbedUrl()}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Optional: Video Description */}
            <div className="mt-6 md:mt-8 text-center">
              <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                Experience our commitment to excellence through this showcase
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoShowcaseSection;