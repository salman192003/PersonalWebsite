import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import mainImg from '../assets/main.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection({ isLoaded }) {
  const sectionRef = useRef(null);
  const stackRef = useRef(null);

  useEffect(() => {
    if (!isLoaded || !stackRef.current) return;

    const cards = stackRef.current.querySelectorAll('.stack-card');
    
    // Set initial stack position
    cards.forEach((card, i) => {
      gsap.set(card, {
        y: i * -12,
        rotation: (i - 1) * 4,
        scale: 1 - i * 0.04,
        zIndex: cards.length - i,
        opacity: 1,
      });
    });

    // Create scroll-triggered explosion
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=100%',
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Explode cards outward
      cards.forEach((card, i) => {
        const positions = [
          { x: 0, y: -20, scale: 1.05, rotation: 0 },        // Portrait stays center-ish
          { x: -300, y: 80, scale: 0.85, rotation: -6 },    // Boot card goes left
          { x: 300, y: -50, scale: 0.8, rotation: 8 },       // Third card goes right
          { x: -150, y: 200, scale: 0.75, rotation: -3 },    // Fourth
          { x: 200, y: 180, scale: 0.7, rotation: 5 },       // Fifth
        ];

        const pos = positions[i] || { x: 0, y: 0, scale: 1, rotation: 0 };

        tl.to(card, {
          x: pos.x,
          y: pos.y,
          scale: pos.scale,
          rotation: pos.rotation,
          opacity: i === 0 ? 1 : 0.6,
          duration: 1,
          ease: 'expo.out',
        }, 0);
      });

      // Fade out the entire stack container
      tl.to(stackRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
      }, 0.6);

    }, sectionRef);

    return () => ctx.revert();
  }, [isLoaded]);

  const easeOutExpo = [0.22, 1, 0.36, 1];

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background dot pattern */}
      <div className="dot-pattern" style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.03,
        pointerEvents: 'none',
      }} />

      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)',
        pointerEvents: 'none',
        filter: 'blur(60px)',
      }} />

      {/* Card Stack */}
      <div
        ref={stackRef}
        style={{
          position: 'relative',
          width: '420px',
          maxWidth: '90vw',
          height: '560px',
          perspective: '1200px',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Card 1: Portrait */}
        <motion.div
          className="stack-card card"
          initial={{ opacity: 0, y: 60 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1, ease: easeOutExpo }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'var(--surface-container)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'default',
          }}
        >
          {/* Portrait placeholder with aesthetic treatment */}
          <div style={{
            width: '100%',
            height: '70%',
            background: 'linear-gradient(135deg, var(--surface-container-high) 0%, var(--surface-low) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Image from user request */}
            <img 
              src={mainImg} 
              alt="Portrait"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.9,
                mixBlendMode: 'luminosity' // Classic Nothing aesthetic
              }}
            />
            {/* B&W filter overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, var(--surface-container) 0%, transparent 40%)',
              mixBlendMode: 'multiply',
            }} />
            {/* Grain texture */}
            <div style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.15,
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.5\'/%3E%3C/svg%3E")',
              mixBlendMode: 'overlay',
            }} />
          </div>
          <div style={{
            padding: '24px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--primary)',
              animation: 'pulse-red 2s ease-in-out infinite',
            }} />
            <span className="dot-matrix" style={{
              fontSize: '0.65rem',
              color: 'var(--on-surface-variant)',
            }}>
              SYS.OP ACTIVE // NODE_001
            </span>
          </div>
        </motion.div>

        {/* Card 2: System Boot */}
        <motion.div
          className="stack-card card"
          initial={{ opacity: 0, y: 80 }}
          animate={isLoaded ? { opacity: 1, y: -12 } : {}}
          transition={{ duration: 0.8, delay: 1.15, ease: easeOutExpo }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'var(--surface-low)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '40px 32px',
          }}
        >
          <div>
            <div className="dot-matrix" style={{
              fontSize: '0.6rem',
              color: 'var(--primary)',
              marginBottom: '24px',
            }}>
              {'>'} SYSTEM BOOT // v2026.04
            </div>
            <h1 className="font-headline" style={{
              fontSize: '3.2rem',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              color: 'var(--on-surface)',
            }}>
              SALMAN<br />
              <span style={{ color: 'var(--primary)' }}>AJMAL</span>
            </h1>
          </div>
          <div>
            <p className="font-body" style={{
              fontSize: '0.9rem',
              color: 'var(--on-surface-variant)',
              lineHeight: 1.6,
              maxWidth: '280px',
              marginBottom: '24px',
            }}>
              Software & ML Engineer. Building intelligent systems at the intersection of vision, language, and infrastructure.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span className="tag">ML ENGINEER</span>
              <span className="tag">FULL-STACK</span>
              <span className="tag">CV RESEARCHER</span>
            </div>
          </div>
        </motion.div>

        {/* Card 3: Stats */}
        <motion.div
          className="stack-card card"
          initial={{ opacity: 0, y: 100 }}
          animate={isLoaded ? { opacity: 0.7, y: -24 } : {}}
          transition={{ duration: 0.8, delay: 1.3, ease: easeOutExpo }}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            background: 'var(--surface-container-high)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px',
          }}
        >
          <span className="dot-matrix" style={{
            fontSize: '0.6rem',
            color: 'var(--on-surface-dim)',
            marginBottom: '16px',
            textAlign: 'center',
          }}>
            FOCUS
          </span>
          <div className="font-headline" style={{
            fontSize: '2rem',
            fontWeight: 700,
            color: 'var(--on-surface)',
            letterSpacing: '-0.04em',
            textAlign: 'center',
            lineHeight: 1.2,
          }}>
            Software Engineer<br/>
            ML Researcher
          </div>
          <div className="font-body" style={{
            color: 'var(--primary)', 
            fontSize: '1rem',
            marginTop: '16px',
            textAlign: 'center'
          }}> 
            Focusing on ML Driven Applications 
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span className="dot-matrix" style={{
          fontSize: '0.55rem',
          color: 'var(--on-surface-dim)',
        }}>
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="material-symbols-outlined" style={{
            color: 'var(--primary)',
            fontSize: '20px',
          }}>
            expand_more
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
