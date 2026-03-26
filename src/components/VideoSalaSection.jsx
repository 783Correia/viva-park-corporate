import React, { useRef, useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

export default function VideoSalaSection() {
  const [sectionRef, isVisible] = useScrollReveal(0.15);
  const videoRef = useRef(null);
  const [showControls, setShowControls] = useState(false);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: '#111' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
        {/* Text */}
        <div
          className="text-center mb-10 md:mb-14 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
          }}
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#40916C', fontFamily: "'Inter', sans-serif" }}
          >
            Conheça o edifício
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: '-0.02em' }}
          >
            Sua próxima sala estará aqui.{' '}
            <span style={{ color: '#52B788' }}>2313.</span>
          </h2>
        </div>

        {/* Video */}
        <div
          className="relative rounded-2xl overflow-hidden transition-all duration-700 delay-200"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.98)',
            aspectRatio: '16 / 9',
            maxWidth: '960px',
            margin: '0 auto',
          }}
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover rounded-2xl"
            src="/videos/fachada-lateral.mp4"
            autoPlay
            muted
            loop
            playsInline
            controls={showControls}
            poster="/images/diurna-01.jpg"
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none rounded-b-2xl"
            style={{
              background: 'linear-gradient(transparent, rgba(17,17,17,0.6))',
              opacity: showControls ? 0 : 1,
              transition: 'opacity 0.3s',
            }}
          />
        </div>
      </div>
    </section>
  );
}
