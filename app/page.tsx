'use client';
import { useRef, useState, useEffect } from "react";

// Define types for track
interface Track {
  title: string;
  artist: string;
  src: string;
  thumbnail: string;
}

export default function Page() {
  // 🔥 ONLY EDIT HERE — PUT YOUR SONG URLs
  const tracks: Track[] = [
    {
      title: "Backroads and Butterflies",
      artist: "J'Soul",
      src: "/Songs/song1.mpeg",
      thumbnail: "/images/picture6.png",
    },
    {
      title: "Butterflies and Second Chances",
      artist: "J'Soul",
      src: "/Songs/song2.mp3",
      thumbnail: "/images/picture7.png",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] overflow-x-hidden">
      {/* Debug info - remove after fixing */}
      <div className="fixed bottom-4 right-4 z-50 bg-black text-white p-2 text-xs rounded opacity-50 hover:opacity-100">
        <div>Images should be in: /public/images/</div>
        <div>Files: picture6.png, picture7.png, Picture1.jpg, etc.</div>
      </div>

      {/* Header - Fixed positioning to ensure it's always visible */}
      <header className="fixed top-0 left-0 right-0 z-[100] w-full border-b border-[#B8860B]/20 bg-[#0A0A0A]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0A0A0A]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Logo image */}
              <ImageWithFallback
                src="/images/Picture1.jpg"
                alt="Rebel Echo Records Logo"
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover ring-2 ring-[#B8860B]/50 shadow-lg shadow-[#B8860B]/20"
              />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight">
                  Rebel Echo Records
                </span>
                <span className="hidden xs:inline text-[10px] sm:text-xs text-[#B8860B] uppercase tracking-wider">
                  Home of Gospel-Core & Poetic Metal
                </span>
              </div>
            </div>
            <nav className="hidden md:flex gap-6 lg:gap-8">
              <a href="#features" className="text-sm font-medium text-gray-300 transition-colors hover:text-[#B8860B]">
                Albums
              </a>
              <a href="#benefits" className="text-sm font-medium text-gray-300 transition-colors hover:text-[#B8860B]">
                Tracks
              </a>
              <a href="#footer" className="text-sm font-medium text-gray-300 transition-colors hover:text-[#B8860B]">
                Contact
              </a>
            </nav>
            {/* Mobile menu button */}
            <button className="md:hidden text-white p-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Spacer div to push content below fixed header */}
      <div className="h-16 sm:h-20"></div>

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden pt-6 pb-10 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-20" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B8860B] to-[#800080]"></div>
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-balance text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-2">
              Rebel Echo Records
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-[#B8860B] mb-4 px-4">
              Home of Gospel-Core and Poetic Metal
            </p>
            
            {/* Logo Section - Responsive sizing */}
            <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 mb-2">
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-16">
                <div className="flex flex-col items-center">
                  <ImageWithFallback
                    src="/images/Picture3-removebg-preview.png"
                    alt="J'Soul Logo"
                    className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain filter drop-shadow-[0_0_15px_rgba(184,134,11,0.3)]"
                  />
                </div>
              </div>
            </div>
            
            {/* Subtext */}
            <div className="mt-4 space-y-2 px-4">
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#B8860B]">
                Home of J'Soul
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-300">
                Featuring new and upcoming artists: Judy Briggs
              </p>
            </div>
            
            {/* Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button 
                onClick={() => {
                  document.getElementById('benefits')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className="w-full sm:w-auto rounded-lg bg-[#B8860B] px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-black transition-all hover:bg-[#DAA520]"
              >
                Listen To Track
              </button>
              <button 
                onClick={() => {
                  document.getElementById('features')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
                className="w-full sm:w-auto rounded-lg border-2 border-[#800080] px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-white transition-all hover:border-[#B8860B] hover:bg-white/10"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-12 sm:py-16 lg:py-20 bg-[#0A0A0A] scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Label Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center mb-12 lg:mb-16">
            {/* Left side - Text Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6">
                REBEL ECHO RECORDS
              </h2>
              <p className="text-base sm:text-lg text-gray-400 max-w-2xl mb-6 sm:mb-8">
                Home of Gospel-Core and Poetic Metal
              </p>
              
              {/* Overview Card */}
              <div className="bg-gradient-to-r from-[#800080]/10 to-transparent p-4 sm:p-6 lg:p-8 rounded-2xl border border-[#B8860B]/20">
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                  <span className="font-semibold text-[#B8860B]">Rebel Echo Records (RER)</span> is an independent label rooted in conviction, resilience, and artistic truth.
                </p>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                  Home of <span className="font-semibold text-[#800080]">J'Soul</span>, featuring new and upcoming artists, including <span className="font-semibold text-[#B8860B]">Judy Briggs</span>.
                </p>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  RER exists at the intersection of faith, fire, vulnerability, and strength. We build music that confronts, restores, and refuses to compromise.
                </p>
              </div>
            </div>

            {/* Right side - Artist Image Section */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end mb-6 lg:mb-0">
              <div className="relative w-full max-w-md lg:max-w-2xl">
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B] to-[#800080] rounded-3xl transform -rotate-1 scale-105 blur-sm opacity-20"></div>
                
                {/* Main image container */}
                <div className="relative bg-gradient-to-br from-[#B8860B] to-[#800080] p-1 rounded-2xl shadow-2xl">
                  <div className="bg-[#111111] rounded-2xl overflow-hidden">
                    <div className="aspect-[3/4] relative">
                      <ImageWithFallback
                        src="/images/Picture2.png"
                        alt="J'Soul - Artist at Rebel Echo Records"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Press Release Section */}
          <div className="mb-8 lg:mb-12">
            <div className="bg-[#111111] border border-[#B8860B]/20 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10">
              <div className="text-center mb-6 sm:mb-8">
                <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#800080]/20 text-[#B8860B] font-semibold rounded-full text-xs sm:text-sm mb-3 sm:mb-4">
                  FOR IMMEDIATE RELEASE
                </span>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 px-2">
                  J'Soul Announces "Poetic Metal" – A Genre-Defying Testament of Faith, Resilience, and Family
                </h3>
              </div>
              
              <div className="space-y-4 sm:space-y-6 text-gray-300 max-w-4xl mx-auto">
                <p className="text-base sm:text-lg leading-relaxed">
                  <span className="font-semibold text-[#B8860B]">Rebel Echo Records</span> proudly announces the upcoming release of <span className="font-semibold text-[#800080]">Poetic Metal</span>, arriving <span className="font-semibold text-[#B8860B]">March 10, 2026</span>.
                </p>
                
                <p className="text-sm sm:text-base leading-relaxed">
                  Blending Christian metal, poetic lyricism, rap influence, and emotionally grounded storytelling, Poetic Metal explores endurance in relationships, spiritual guidance through adversity, mental health recovery, and unwavering family bonds.
                </p>
                
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 my-6 sm:my-8">
                  <div className="bg-[#0A0A0A] p-4 sm:p-5 rounded-xl border border-[#800080]/30">
                    <span className="block text-base sm:text-lg font-semibold text-[#B8860B] mb-2">"Enigma"</span>
                    <p className="text-xs sm:text-sm text-gray-400">honors quiet brilliance</p>
                  </div>
                  <div className="bg-[#0A0A0A] p-4 sm:p-5 rounded-xl border border-[#800080]/30">
                    <span className="block text-base sm:text-lg font-semibold text-[#B8860B] mb-2">"The Devil Dealt Me Aces"</span>
                    <p className="text-xs sm:text-sm text-gray-400">celebrates earned victory</p>
                  </div>
                  <div className="bg-[#0A0A0A] p-4 sm:p-5 rounded-xl border border-[#800080]/30">
                    <span className="block text-base sm:text-lg font-semibold text-[#B8860B] mb-2">"The Cost of Staying"</span>
                    <p className="text-xs sm:text-sm text-gray-400">examines devotion under strain</p>
                  </div>
                  <div className="bg-[#0A0A0A] p-4 sm:p-5 rounded-xl border border-[#800080]/30">
                    <span className="block text-base sm:text-lg font-semibold text-[#B8860B] mb-2">"Premeditated"</span>
                    <p className="text-xs sm:text-sm text-gray-400">dedicated to mental health professionals</p>
                  </div>
                </div>
                
                <p className="text-sm sm:text-base leading-relaxed">
                  Releasing on March 10, a date of personal significance, Poetic Metal is a declaration of strength, accountability, and purpose.
                </p>
              </div>
              
              {/* Divider */}
              <div className="my-6 sm:my-8 border-t border-[#B8860B]/20"></div>
              
              {/* AI & Innovation Section */}
              <div className="space-y-4 sm:space-y-6">
                {/* Suno Acknowledgment */}
                <div className="bg-gradient-to-r from-[#800080]/10 to-transparent p-4 sm:p-6 rounded-xl">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="text-xl sm:text-2xl text-[#B8860B]">🎵</span> Suno Acknowledgment
                  </h4>
                  <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-400 italic">
                    <p>
                      This album was brought to life with the assistance of AI tools, including Suno.
                    </p>
                    <p>
                      As a songwriter, I found in this technology a way to translate written conviction into fully realized soundscapes.
                    </p>
                    <p className="font-medium text-[#B8860B] not-italic">
                      Innovation does not replace artistry. It amplifies it.
                    </p>
                  </div>
                </div>

                {/* AI Statement */}
                <div className="bg-[#111111] border-l-4 border-[#B8860B] p-4 sm:p-6 rounded-r-xl">
                  <p className="text-lg sm:text-xl font-semibold text-white mb-2">AI</p>
                  <p className="text-xs sm:text-sm text-gray-300 mb-3">
                    Because that's the truth. A piano doesn't make someone a composer. A studio doesn't make someone a producer. A tool does not erase authorship.
                  </p>
                </div>

                {/* On Innovation and Authorship */}
                <div className="bg-gradient-to-r from-[#B8860B]/10 to-transparent p-4 sm:p-6 rounded-xl">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-3">
                    On Innovation and Authorship
                  </h4>
                  <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-400">
                    <p>
                      Poetic Metal was created using modern creative tools, including Suno. The words, themes, and direction are mine.
                    </p>
                    <p className="font-semibold text-[#B8860B] text-base sm:text-lg not-italic pt-2">
                      The music stands on its own.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Judy Briggs Featured Tracks */}
      <section id="benefits" className="w-full py-8 sm:py-10 lg:py-12 bg-[#0A0A0A] scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 px-4">
              Introducing Judy Briggs
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              A fresh voice joining the Rebel Echo Records family — experience her debut tracks
            </p>
          </div>

          {/* Judy Briggs Tracks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto px-4 sm:px-0">
            {tracks.map((track, index) => (
              <AudioCard key={index} track={track} index={index} />
            ))}
          </div>

          {/* Additional info */}
          <div className="mt-8 sm:mt-10 lg:mt-12 text-center px-4">
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-[#111111] rounded-xl border border-[#B8860B]/30">
              <span className="text-[#B8860B] text-xl">🎵</span>
              <p className="text-xs sm:text-sm text-gray-300 text-center sm:text-left">
                <span className="font-semibold text-[#B8860B]">Coming Soon:</span> Full album "Poetic Metal" available March 10, 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="w-full scroll-mt-20" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
          {/* Email Contacts Section */}
          <div className="border-t border-[#B8860B]/20 pt-6 sm:pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <p className="text-xs sm:text-sm text-gray-400">@rebelechrecords.com</p>
              <p className="text-xs sm:text-sm text-gray-400">General / Artist Contact: <span className="text-[#B8860B]">jsoul@…</span></p>
              <p className="text-xs sm:text-sm text-gray-400">Artist Contact – Judy Briggs: <span className="text-[#800080]">judy@…</span></p>
              <p className="text-xs sm:text-sm text-gray-400">Business & Strategy: <span className="text-[#B8860B]">vox@…</span></p>
              <p className="text-xs sm:text-sm text-gray-400">Sales & Engagement: <span className="text-[#800080]">sales@…</span></p>
              <p className="text-xs sm:text-sm text-gray-400">Digital & Social Media: <span className="text-[#B8860B]">emily@…</span></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* =========================================================
   🖼️ IMAGE COMPONENT WITH MULTIPLE FALLBACK PATHS
========================================================= */

function ImageWithFallback({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [imgSrc, setImgSrc] = useState(src);
  const [failedPaths, setFailedPaths] = useState<string[]>([]);

  // List of possible paths to try (in order)
  const getPossiblePaths = (originalPath: string): string[] => {
    const paths = [originalPath];
    
    // If it's in /images/ folder, try different case variations
    if (originalPath.includes('/images/')) {
      const filename = originalPath.split('/').pop() || '';
      const folder = '/images/';
      
      // Try all lowercase
      paths.push(folder + filename.toLowerCase());
      
      // Try all uppercase (first letter capital)
      const capitalized = filename.charAt(0).toUpperCase() + filename.slice(1).toLowerCase();
      paths.push(folder + capitalized);
      
      // Try original case but with different extensions
      if (filename.endsWith('.png')) {
        paths.push(folder + filename.replace('.png', '.jpg'));
        paths.push(folder + filename.replace('.png', '.jpeg'));
      } else if (filename.endsWith('.jpg') || filename.endsWith('.jpeg')) {
        paths.push(folder + filename.replace(/\.jpe?g$/, '.png'));
      }
    }
    
    return paths;
  };

  const possiblePaths = getPossiblePaths(src);

  const handleError = () => {
    const currentIndex = possiblePaths.indexOf(imgSrc);
    const nextPath = possiblePaths[currentIndex + 1];
    
    if (nextPath) {
      console.log(`Image failed: ${imgSrc}, trying: ${nextPath}`);
      setImgSrc(nextPath);
      setFailedPaths([...failedPaths, imgSrc]);
    } else {
      console.log(`All image paths failed for: ${src}`);
      // Set to data URL with gradient as ultimate fallback
      const color = src.includes('picture6') ? '800080' : 'B8860B';
      setImgSrc(`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23${color}'/%3E%3Ctext x='50' y='65' font-size='40' text-anchor='middle' fill='%23FFFFFF' font-family='Arial'%3E🎵%3C/text%3E%3C/svg%3E`);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
}

/* =========================================================
   🎵 PROFESSIONAL AUDIO CARD COMPONENT
========================================================= */

function AudioCard({ track, index }: { track: Track; index: number }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showVolumeControl, setShowVolumeControl] = useState(false);

  const formatTime = (time: number): string => {
    if (!time || isNaN(time)) return "0:00";
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  // load metadata
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrent(audio.currentTime);
    const loaded = () => setDuration(audio.duration);
    const ended = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", loaded);
    audio.addEventListener("ended", ended);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", loaded);
      audio.removeEventListener("ended", ended);
    };
  }, []);

  // Stop other tracks when this one plays
  useEffect(() => {
    const handleStopOtherTracks = (e: CustomEvent) => {
      if (e.detail.currentTrackIndex !== index && isPlaying) {
        const audio = audioRef.current;
        if (audio) {
          audio.pause();
          setIsPlaying(false);
        }
      }
    };

    window.addEventListener('stopOtherTracks' as any, handleStopOtherTracks);
    
    return () => {
      window.removeEventListener('stopOtherTracks' as any, handleStopOtherTracks);
    };
  }, [index, isPlaying]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      // Stop all other tracks first
      const event = new CustomEvent('stopOtherTracks', { 
        detail: { currentTrackIndex: index } 
      });
      window.dispatchEvent(event);
      
      audio.play().catch(e => console.log('Playback failed:', e));
      setIsPlaying(true);
    }
  };

  const stopAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const newVolume = parseFloat(e.target.value);
    audio.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const progress = progressRef.current;
    const audio = audioRef.current;
    if (!progress || !audio || !duration) return;
    
    const rect = progress.getBoundingClientRect();
    const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = percent * duration;
  };

  const progressPercent = duration ? (current / duration) * 100 : 0;

  return (
    <div className="group relative">
      {/* Background gradient effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#B8860B] to-[#800080] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
      
      {/* Main card */}
      <div className="relative bg-[#111111] rounded-2xl border border-[#B8860B]/20 overflow-hidden hover:border-[#B8860B]/40 transition-all duration-300">
        <audio ref={audioRef} src={track.src} preload="metadata" />

        {/* Card Header with Track Number */}
        <div className="flex items-center justify-between px-4 sm:px-6 pt-4 sm:pt-6 pb-1 sm:pb-2">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-xs sm:text-sm font-mono text-[#B8860B]">0{index + 1}</span>
            <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-[#B8860B] to-transparent"></div>
          </div>
          <span className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-wider">Single</span>
        </div>

        <div className="p-4 sm:p-6 pt-1 sm:pt-2">
          <div className="flex flex-col xs:flex-row items-start gap-4 sm:gap-5">
            {/* Album Art with Play Button Overlay */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 group/image mx-auto xs:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B8860B] to-[#800080] rounded-xl blur-sm opacity-50"></div>
              <div className="relative w-full h-full rounded-xl overflow-hidden ring-2 ring-[#800080]/30">
                <ImageWithFallback
                  src={track.thumbnail}
                  alt={track.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/image:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#B8860B] flex items-center justify-center">
                    <span className="text-black text-xs">▶</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Track Info */}
            <div className="flex-1 min-w-0 w-full xs:w-auto">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1 truncate text-center xs:text-left">
                {track.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3 text-center xs:text-left">
                {track.artist}
              </p>

              {/* Progress Bar */}
              <div
                ref={progressRef}
                onClick={handleSeek}
                className="relative h-2 sm:h-1.5 bg-[#800080]/20 rounded-full overflow-hidden cursor-pointer group/progress mb-2 sm:mb-3"
              >
                <div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#B8860B] to-[#800080] rounded-full transition-all duration-100"
                  style={{ width: `${progressPercent}%` }}
                />
                <div 
                  className="absolute top-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-[#B8860B] rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity shadow-lg"
                  style={{ left: `calc(${progressPercent}% - 4px)` }}
                />
              </div>

              {/* Time Display */}
              <div className="flex justify-between text-[10px] sm:text-xs text-gray-500 mb-2 sm:mb-3">
                <span>{formatTime(current)}</span>
                <span>{formatTime(duration)}</span>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center xs:justify-start">
                <button
                  onClick={togglePlay}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-r from-[#B8860B] to-[#800080] text-white flex items-center justify-center hover:shadow-lg hover:shadow-[#B8860B]/20 transition-all transform hover:scale-105 text-sm sm:text-base"
                >
                  {isPlaying ? "⏸" : "▶"}
                </button>

                <button
                  onClick={stopAudio}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#222222] text-gray-400 hover:text-white hover:bg-[#333333] transition-colors flex items-center justify-center text-sm sm:text-base"
                >
                  ⏹
                </button>

                <div className="relative">
                  <button
                    onClick={toggleMute}
                    onMouseEnter={() => setShowVolumeControl(true)}
                    onMouseLeave={() => setShowVolumeControl(false)}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#222222] text-gray-400 hover:text-white hover:bg-[#333333] transition-colors flex items-center justify-center text-sm sm:text-base"
                  >
                    {isMuted ? "🔇" : volume > 0.7 ? "🔊" : volume > 0.3 ? "🔉" : "🔈"}
                  </button>
                  
                  {/* Volume Slider Popup */}
                  {showVolumeControl && (
                    <div 
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-1.5 sm:p-2 bg-[#222222] rounded-lg border border-[#B8860B]/30 shadow-xl z-50"
                      onMouseEnter={() => setShowVolumeControl(true)}
                      onMouseLeave={() => setShowVolumeControl(false)}
                    >
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-16 sm:w-20 h-1 bg-[#800080]/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-2 [&::-webkit-slider-thumb]:h-2 sm:[&::-webkit-slider-thumb]:w-3 sm:[&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#B8860B]"
                      />
                    </div>
                  )}
                </div>

                {/* Waveform indicator when playing */}
                {isPlaying && (
                  <div className="ml-auto hidden xs:flex items-center gap-0.5">
                    <div className="w-0.5 h-2 sm:h-3 bg-[#B8860B] animate-pulse"></div>
                    <div className="w-0.5 h-3 sm:h-4 bg-[#800080] animate-pulse delay-75"></div>
                    <div className="w-0.5 h-1.5 sm:h-2 bg-[#B8860B] animate-pulse delay-150"></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-[#B8860B]/0 via-[#800080]/50 to-[#B8860B]/0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
      </div>
    </div>
  );
}
