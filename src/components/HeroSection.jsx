import React, { useEffect, useState } from 'react';

const pills = ['41,56m²', 'Vista Parque', '23º andar', 'Eccel + Vokkan'];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const stagger = (step) => ({
    transitionDelay: `${300 + step * 180}ms`,
  });

  return (
    <section className="hero">
      {/* background with ken-burns */}
      <div className="hero__bg" aria-hidden="true">
        <img
          src="/images/hero-aerea.jpg"
          alt=""
          draggable={false}
          className="hero__bg-img"
        />
      </div>

      {/* gradient overlay */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* content */}
      <div className="hero__content">
        <span
          className={`hero__badge ${visible ? 'is-visible' : ''}`}
          style={stagger(0)}
        >
          O maior bairro-parque do Brasil
        </span>

        <h1
          className={`hero__title ${visible ? 'is-visible' : ''}`}
          style={stagger(1)}
        >
          Sua sala no coração<br />
          <span className="hero__title-accent">do Viva Park</span>
        </h1>

        <div
          className={`hero__subtitle-bar ${visible ? 'is-visible' : ''}`}
          style={stagger(2)}
        >
          <span className="hero__subtitle-accent" />
          <p className="hero__subtitle-text">
            Sala 2313 &middot; Viva Park Corporate &middot; Porto Belo, SC
          </p>
        </div>

        <p
          className={`hero__desc ${visible ? 'is-visible' : ''}`}
          style={stagger(3)}
        >
          Última unidade aérea disponível no único edifício corporativo
          de um ecossistema com 80 mil visitantes por mês, escola, arena esportiva,
          gastronomia, centro médico e universidade.
        </p>

        <ul
          className={`hero__pills ${visible ? 'is-visible' : ''}`}
          style={stagger(4)}
        >
          {pills.map((label) => (
            <li key={label} className="hero__pill">
              {label}
            </li>
          ))}
        </ul>

      </div>

      {/* scroll indicator */}
      <div className="hero__scroll" aria-hidden="true">
        <svg
          className="hero__chevron"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      <style>{`
        .hero {
          position: relative;
          width: 100%;
          height: 100svh;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          color: #fff;
        }

        .hero__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero__bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: kenBurns 28s ease-in-out infinite alternate;
        }

        @keyframes kenBurns {
          0%   { transform: scale(1)   translate(0, 0); }
          100% { transform: scale(1.08) translate(-1%, -0.5%); }
        }

        .hero__overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.40) 0%,
            rgba(0, 0, 0, 0.55) 40%,
            rgba(0, 0, 0, 0.80) 100%
          );
        }

        .hero__content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 20px;
          padding: 0 24px;
          max-width: 820px;
        }

        .hero__badge,
        .hero__title,
        .hero__subtitle-bar,
        .hero__desc,
        .hero__pills,
        .hero__cta {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hero__badge.is-visible,
        .hero__title.is-visible,
        .hero__subtitle-bar.is-visible,
        .hero__desc.is-visible,
        .hero__pills.is-visible,
        .hero__cta.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero__badge {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          background: rgba(45, 106, 79, 0.25);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(64, 145, 108, 0.4);
          border-radius: 999px;
          padding: 10px 24px;
          color: #A5D6A7;
        }

        .hero__title {
          font-family: 'Inter', sans-serif;
          font-weight: 800;
          font-size: clamp(2.5rem, 7vw, 4.5rem);
          line-height: 1.08;
          letter-spacing: -0.03em;
          margin: 8px 0 0;
        }

        .hero__title-accent {
          color: #52B788;
        }

        .hero__subtitle-bar {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .hero__subtitle-accent {
          width: 36px;
          height: 2px;
          border-radius: 2px;
          background: #40916C;
          flex-shrink: 0;
        }

        .hero__subtitle-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem;
          font-weight: 400;
          letter-spacing: 0.02em;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }

        .hero__desc {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.6);
          max-width: 620px;
          margin: 0;
        }

        .hero__pills {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          list-style: none;
          padding: 0;
          margin: 8px 0 0;
        }

        .hero__pill {
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          padding: 8px 18px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.85);
        }


        .hero__scroll {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          color: rgba(255, 255, 255, 0.40);
        }

        .hero__chevron {
          animation: bounce 2.5s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(6px); }
        }

        @media (max-width: 640px) {
          .hero__content { gap: 16px; }
          .hero__cta { width: 100%; padding: 16px 0; }
          .hero__desc { font-size: 0.9rem; }
        }
      `}</style>
    </section>
  );
}
