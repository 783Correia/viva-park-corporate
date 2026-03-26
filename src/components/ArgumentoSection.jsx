import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

const ARGUMENTS = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="16" width="12" height="20" rx="1" stroke="#2D6A4F" strokeWidth="2"/>
        <rect x="22" y="10" width="12" height="26" rx="1" stroke="#2D6A4F" strokeWidth="2"/>
        <line x1="10" y1="22" x2="14" y2="22" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round"/>
        <line x1="10" y1="28" x2="14" y2="28" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round"/>
        <line x1="26" y1="16" x2="30" y2="16" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round"/>
        <line x1="26" y1="22" x2="30" y2="22" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round"/>
        <line x1="26" y1="28" x2="30" y2="28" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round"/>
        <line x1="4" y1="36" x2="36" y2="36" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Único corporativo do bairro',
    description:
      'Centenas de famílias de alto padrão, 80 mil visitantes por mês e nenhum outro escritório corporativo. Demanda represada real por serviços profissionais.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4L4 14V36H16V24H24V36H36V14L20 4Z" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 18H18V22H14V18Z" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 18H26V22H22V18Z" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 14L20 6L32 14" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Ao lado do Colégio Bom Jesus',
    description:
      'Uma das maiores escolas do sul do Brasil no térreo do edifício. Fluxo diário garantido de famílias, profissionais e prestadores de serviço.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="14" stroke="#2D6A4F" strokeWidth="2"/>
        <path d="M20 12V20L26 26" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 4L20 2L26 4" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Última unidade aérea',
    description:
      'Sala 2313, no 23º andar — a última disponível com vista privilegiada para o parque e o mar. Quando acabar, acabou.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4L8 12V16H32V12L20 4Z" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="12" y="16" width="16" height="16" stroke="#2D6A4F" strokeWidth="2"/>
        <path d="M16 22H24" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 27H24" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round"/>
        <path d="M4 32H36" stroke="#2D6A4F" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="8" r="2" fill="#2D6A4F"/>
      </svg>
    ),
    title: 'Heliponto + infraestrutura premium',
    description:
      'Lounges, sala de reunião, espaço de descompressão e sala de podcast. Heliponto no topo do edifício. Infraestrutura de primeiro mundo.',
  },
];

function ArgumentCard({ icon, title, description, index }) {
  return (
    <div
      className="arg-card"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="arg-card__accent" />
      <div className="arg-card__icon">{icon}</div>
      <h3 className="arg-card__title">{title}</h3>
      <p className="arg-card__desc">{description}</p>
    </div>
  );
}

export default function ArgumentoSection() {
  const [sectionRef, isVisible] = useScrollReveal(0.15);

  return (
    <section
      ref={sectionRef}
      className={`argumento ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="argumento__inner">
        {/* header */}
        <div className="argumento__header">
          <div className="argumento__label">
            <span className="argumento__label-line" />
            <span className="argumento__label-text">Oportunidade</span>
          </div>
          <h2 className="argumento__headline">
            Por que esta é a oportunidade mais inteligente da região
          </h2>
        </div>

        {/* cards */}
        <div className="argumento__grid">
          {ARGUMENTS.map((arg, i) => (
            <ArgumentCard key={arg.title} {...arg} index={i} />
          ))}
        </div>
      </div>

      {/* ——— scoped styles ——— */}
      <style>{`
        .argumento {
          background: #FAFAF8;
          padding: 100px 24px;
        }

        .argumento__inner {
          max-width: 1120px;
          margin: 0 auto;
        }

        /* ---- header ---- */
        .argumento__header {
          text-align: center;
          margin-bottom: 64px;
        }

        .argumento__label {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .argumento.is-visible .argumento__label {
          opacity: 1;
          transform: translateY(0);
        }

        .argumento__label-line {
          width: 32px;
          height: 3px;
          border-radius: 2px;
          background: #2D6A4F;
        }

        .argumento__label-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #2D6A4F;
        }

        .argumento__headline {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: clamp(1.75rem, 4vw, 2.75rem);
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: #1A1A1A;
          max-width: 700px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s;
        }

        .argumento.is-visible .argumento__headline {
          opacity: 1;
          transform: translateY(0);
        }

        /* ---- grid ---- */
        .argumento__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        @media (max-width: 1024px) {
          .argumento__grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 640px) {
          .argumento__grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .argumento {
            padding: 64px 20px;
          }
        }

        /* ---- card ---- */
        .arg-card {
          position: relative;
          background: #fff;
          border-radius: 14px;
          padding: 36px 28px 32px;
          overflow: hidden;
          box-shadow: 0 2px 16px rgba(0, 0, 0, 0.04);
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease,
                      transform 0.7s ease,
                      box-shadow 0.35s ease;
          cursor: default;
        }

        .argumento.is-visible .arg-card {
          opacity: 1;
          transform: translateY(0);
        }

        /* card-lift hover */
        .arg-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 36px rgba(0, 0, 0, 0.08);
        }

        /* green accent border-top */
        .arg-card__accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: #2D6A4F;
          border-radius: 14px 14px 0 0;
        }

        .arg-card__icon {
          margin-bottom: 20px;
        }

        .arg-card__title {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          color: #1A1A1A;
          margin: 0 0 10px;
          line-height: 1.3;
        }

        .arg-card__desc {
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          font-size: 0.95rem;
          line-height: 1.65;
          color: #555;
          margin: 0;
        }
      `}</style>
    </section>
  );
}
