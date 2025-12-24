import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

import Video from '../assets/Images/Main.mp4';

const VideoShowcaseSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isVisible, setIsVisible] = useState(false); // New state to track intersection
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  // 1. Intersection Observer: Tracks if the section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
          // When the video leaves view, force the controls to show briefly to reflect the pause
          if (!entry.isIntersecting) {
            setShowControls(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // 2. Playback Effect: Executes play/pause DOM command based on isPlaying and isVisible state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible && isPlaying) {
      // Attempt to play only if visible and state is 'playing'
      video.play().catch((error) => {
        // This usually happens if the browser blocks auto-play
        console.log("Play prevented:", error);
        // Force state to pause if playback fails
        setIsPlaying(false); 
      });
    } else {
      // Pause if not visible or state is 'paused'
      video.pause();
    }

    // Dependency array ensures this runs whenever visibility or the play state changes
  }, [isVisible, isPlaying]);


  // Update progress
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 100;
      setProgress(progress);
    };

    video.addEventListener('timeupdate', updateProgress);
    return () => video.removeEventListener('timeupdate', updateProgress);
  }, []);

  // Auto-hide controls
  const resetControlsTimeout = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  // Corrected Toggle Play: Only updates the state, letting the Playback Effect handle the DOM action
  const togglePlay = () => {
    // Flip the state. The useEffect hook will then handle the play/pause command.
    setIsPlaying(prevIsPlaying => !prevIsPlaying);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen();
      }
    }
  };

  const handleProgressClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    if (videoRef.current) {
      videoRef.current.currentTime = percentage * videoRef.current.duration;
    }
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

      <div className="relative py-12">
        {/* Increased max-width for section content */}
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Our Excellence in Action
            </h2>
          </div>

          {/* Video Container (Made bigger) */}
          <div className="max-w-full mx-auto">
            <div 
              className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-800 group"
              onMouseMove={resetControlsTimeout}
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => {
                if (isPlaying) {
                  controlsTimeoutRef.current = setTimeout(() => setShowControls(false), 1000);
                }
              }}
            >
              {/* Video Element */}
              <video
                ref={videoRef}
                className="w-full aspect-video object-cover bg-black"
                muted={isMuted}
                loop
                playsInline
                onClick={togglePlay} // Now only flips the state
              >
                <source 
                  src={Video} 
                  type="video/mp4" 
                />
                Your browser does not support the video tag.
              </video>

              {/* Play Overlay (shows when paused) */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300">
                  <button
                    onClick={togglePlay} // Now only flips the state
                    className="w-24 h-24 bg-white hover:bg-gray-900 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-2xl group"
                  >
                    <Play className="w-12 h-12 text-gray-900 group-hover:text-white transition-colors duration-300 ml-1" />
                  </button>
                </div>
              )}

              {/* Video Controls */}
              <div 
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 transition-all duration-300 ${
                  showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                }`}
              >
                {/* Progress Bar */}
                <div 
                  className="w-full h-1.5 bg-white/20 rounded-full cursor-pointer mb-4 group/progress"
                  onClick={handleProgressClick}
                >
                  <div 
                    className="h-full bg-white rounded-full transition-all duration-100 relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity shadow-lg"></div>
                  </div>
                </div>

                {/* Control Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {/* Play/Pause Button */}
                    <button
                      onClick={togglePlay} // Now only flips the state
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 text-white" />
                      ) : (
                        <Play className="w-5 h-5 text-white ml-0.5" />
                      )}
                    </button>

                    {/* Mute/Unmute Button */}
                    <button
                      onClick={toggleMute}
                      className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5 text-white" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-white" />
                      )}
                    </button>
                  </div>

                  {/* Fullscreen Button */}
                  <button
                    onClick={toggleFullscreen}
                    className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
                  >
                    <Maximize className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoShowcaseSection;