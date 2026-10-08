"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isCursorVisible, setIsCursorVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);
  // Animation variants
  const heroContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const lineVariants = {
    hidden: { y: "110%" },
    visible: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
  };

  const imageRevealVariants = {
    hidden: { scale: 0.95, opacity: 0, filter: "blur(10px)" },
    visible: { 
      scale: 1, 
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const } 
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
    }
  };

  const sectionContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <div 
        className={`custom-cursor ${isCursorVisible ? 'cursor--visible' : ''}`} 
        style={{ left: cursorPos.x + 'px', top: cursorPos.y + 'px' }}
      >
        <span style={{ textAlign: 'center', lineHeight: 1.3 }}>View<br/>Project</span>
      </div>

      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        className="h-[68px] flex items-center justify-between sticky top-0 z-50 transition-colors" 
        style={{ paddingLeft: 'var(--px)', paddingRight: 'var(--px)', background: 'white' }}
      >
        <a href="/" className="flex items-center gap-2.5" style={{ textDecoration: 'none' }}>
          <Image src="/assets/logo.png" alt="Michal Rome" width={38} height={38} className="rounded-full object-cover" />
          <span className="text-[15px] font-medium tracking-[-0.3px]" style={{ color: '#030712', display: 'inline-block', minWidth: '120px' }}>
            Michal Rome
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="nav-link">
            <span className="nav-link-plus">+</span> About
          </a>
          <a href="#portfolio" className="nav-link">
            <span className="nav-link-plus">+</span> Work
          </a>
        </div>
        <a href="mailto:kontakt@romemichal.pl" className="nav-link hidden md:flex">
          <span className="nav-link-plus">+</span> Get in touch
        </a>
        <button className="md:hidden text-[15px] font-medium tracking-[-0.3px]" style={{ color: '#030712', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
          + Menu
        </button>
      </motion.nav>

      <main>
        {/* HERO SECTION */}
        <section id="hero" style={{ 
          background: 'white', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          paddingTop: 'calc(68px + clamp(40px, 5.5vh, 100px))', 
          paddingBottom: 'clamp(40px, 5.5vh, 100px)', 
          paddingLeft: 'var(--px)', 
          paddingRight: 'var(--px)' 
        }}>
          <motion.div 
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            style={{ width: '100%', maxWidth: '640px', display: 'flex', flexDirection: 'column' }}
          >
            <h1 className="hero-title">
              <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.15em', marginBottom: '-0.15em' }}>
                <motion.span variants={lineVariants} className="hero-subtitle" style={{ display: 'block', willChange: 'transform' }}>Pretty is</motion.span>
              </span>
              <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.15em', marginBottom: '-0.15em' }}>
                <motion.span variants={lineVariants} className="hero-subtitle" style={{ display: 'block', willChange: 'transform' }}>the easy part.</motion.span>
              </span>
              <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.15em', marginBottom: '-0.15em' }}>
                <motion.span variants={lineVariants} style={{ color: '#030712', display: 'block', willChange: 'transform' }}>I design apps</motion.span>
              </span>
              
              <motion.div 
                variants={imageRevealVariants}
                style={{ width: '100%', height: 'min(360px, 25vh)', position: 'relative', overflow: 'hidden', margin: 'clamp(16px, 2.2vh, 40px) 0', borderRadius: '24px', backgroundColor: '#f3f4f6', willChange: 'transform, opacity, filter' }}
              >
                 <Image src="/assets/hero.png" alt="Hero App" fill className="object-cover object-top" priority />
              </motion.div>

              <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.15em', marginBottom: '-0.15em' }}>
                <motion.span variants={lineVariants} style={{ color: '#030712', display: 'block', willChange: 'transform' }}>that work.</motion.span>
              </span>
            </h1>
            
            <motion.div variants={fadeUpVariants} className="hero-stats">
              <div className="hero-stats-col">
                <span style={{ color: '#6b7280', whiteSpace: 'nowrap' }}>Year of experience</span>
                <span style={{ color: '#030712' }}>+14 years</span>
              </div>
              <div className="hero-stats-col">
                <span style={{ color: '#6b7280', whiteSpace: 'nowrap' }}>Working globally</span>
                <span style={{ color: '#030712' }}>Poland based</span>
              </div>
              <div className="hero-stats-col hidden sm:flex">
                <span style={{ color: '#6b7280', whiteSpace: 'nowrap' }}>Specialized</span>
                <span style={{ color: '#030712' }}>Product and web designer</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* CLIENTS SECTION */}
        <section className="clients-section" style={{ background: 'white', paddingBottom: 'clamp(48px, 8vw, 120px)', overflow: 'hidden' }}>
          <div style={{ paddingLeft: 'var(--px)', paddingRight: 'var(--px)' }}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              style={{ borderTop: '1px solid #e5e7eb', paddingTop: 'clamp(80px, 8vw, 120px)' }}
            >
              <p style={{ fontSize: '15px', fontWeight: 500, lineHeight: 1.5, letterSpacing: '-0.3px', color: '#030712', margin: '0 0 40px 0' }}>
                Worked with
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="clients-marquee"
          >
            <div className="clients-marquee-track">
              {['opera', 'IHCL', 'Vivanta', 'MTU', 'TUS', 'Reshape', 'DWH', 'WOCK', 'DP', 'Kapica', 'Kraftcode', 'Propstack'].map((client, i) => (
                <div key={i} className="flex items-center justify-center h-[92px] px-8">
                  <img src={`/assets/clients/${client}.png`} alt={client} className="h-full w-auto object-contain filter grayscale opacity-70" />
                </div>
              ))}
            </div>
            <div className="clients-marquee-track" aria-hidden="true">
              {['opera', 'IHCL', 'Vivanta', 'MTU', 'TUS', 'Reshape', 'DWH', 'WOCK', 'DP', 'Kapica', 'Kraftcode', 'Propstack'].map((client, i) => (
                <div key={i + 100} className="flex items-center justify-center h-[92px] px-8">
                  <img src={`/assets/clients/${client}.png`} alt={client} className="h-full w-auto object-contain filter grayscale opacity-70" />
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <motion.section 
          id="about" 
          className="section-padding"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={sectionContainerVariants}
        >
          <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '32px' }}>
            <motion.div variants={fadeUpVariants} className="section-label-row">
              <span>01</span>
              <span>About me</span>
            </motion.div>
            <div className="section-grid">
              <motion.div variants={fadeUpVariants} style={{ width: '100%', maxWidth: '242px', aspectRatio: '242 / 341', background: '#f3f4f6', overflow: 'hidden', position: 'relative' }}>
                <Image src="/assets/photo.png" alt="Michal Rome" fill className="object-cover" />
              </motion.div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <h2 style={{ fontSize: 'clamp(1.75rem, 5.3vw, 4.25rem)', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.045em', color: '#030712', margin: 0 }}>
                    <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.15em', marginBottom: '-0.15em' }}>
                      <motion.span variants={lineVariants} style={{ display: 'block' }}>I make complex things</motion.span>
                    </span>
                    <span style={{ display: 'block', overflow: 'hidden', paddingBottom: '0.15em', marginBottom: '-0.15em' }}>
                      <motion.span variants={lineVariants} style={{ display: 'block' }}>feel simple.</motion.span>
                    </span>
                  </h2>
                </div>
                <motion.div variants={fadeUpVariants}>
                  <p className="prose-text">
                    Fourteen years, dozens of products, one obsession: interfaces that just work. I'm a senior web and product designer who bridges strategy and craft, taking on everything from user flows and interaction design to visual identity. If your product is hard to use, hard to understand, or just hard to look at, let's fix that.
                  </p>
                </motion.div>
                <motion.div variants={fadeUpVariants} style={{ display: 'flex', gap: '24px', fontSize: 'clamp(1rem, 1.7vw, 1.375rem)', lineHeight: 1.5, letterSpacing: '-0.3px', color: '#030712', marginTop: '16px' }}>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <span>Product design</span>
                    <span>UX Architecture</span>
                    <span>UI &amp; Design Systems</span>
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <span>Website &amp; Platforms</span>
                    <span>Mobile Applications</span>
                    <span>E-commerce</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* PORTFOLIO SECTION */}
        <section id="portfolio" className="section-padding">
          <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '32px' }}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              className="section-label-row"
            >
              <span>02</span>
              <span>Selected works</span>
            </motion.div>
            
            {[
              {
                title: "Designing the System for a Wholesale Platform",
                desc: "Every corner of the business, one coherent system. A long-term design partnership with a global digital games distributor.",
                tags: ["Application", "Desktop"],
                img: "/assets/portfolio-1.png"
              },
              {
                title: "A Skills Platform for a Region in Transition",
                desc: "A skills and career-development platform designed from the ground up for four distinct user types, all sharing one coherent system.",
                tags: ["Application", "Desktop & Mobile"],
                img: "/assets/portfolio-2.png"
              },
              {
                title: "Connecting Trainers and Clients Through One App",
                desc: "Gainz is a coaching app that connects personal trainers and their clients in one place.",
                tags: ["Application", "Mobile"],
                img: "/assets/portfolio-3.png"
              }
            ].map((work, idx) => (
              <motion.a 
                key={idx}
                href="#" 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-150px" }}
                variants={fadeUpVariants}
                className="section-grid portfolio-row group" 
                style={{ textDecoration: 'none', color: 'inherit', display: 'grid' }}
                onMouseEnter={() => setIsCursorVisible(true)}
                onMouseLeave={() => setIsCursorVisible(false)}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <h3 className="portfolio-row-title group-hover:text-gray-600 transition-colors">
                    <span>{work.title}</span>
                  </h3>
                  <p className="prose-text">
                    {work.desc}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {work.tags.map(tag => (
                      <span key={tag} className="tag-pill">{tag}</span>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'block', background: '#f3f4f6', aspectRatio: '3 / 2', position: 'relative', overflow: 'hidden', borderRadius: '16px' }} className="group-hover:scale-[1.02] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <Image src={work.img} alt={work.title} fill className="object-cover object-top" />
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="section-padding">
          <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '32px' }}>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariants}
              className="section-label-row"
            >
              <span>03</span>
              <span>Experience</span>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={sectionContainerVariants}
            >
              {[
                { company: "Self-employed", role: "6 years", date: "Apr 2019 – Present", first: true },
                { company: "Objectivity Bespoke Software Specialists", role: "1 year 2 months", date: "Feb 2018 – Mar 2019" },
                { company: "Opera Software", role: "1 year 1 month", date: "Jan 2017 – Jan 2018" },
                { company: "Objectivity Bespoke Software Specialists", role: "2 years", date: "Feb 2015 – Jan 2017" },
                { company: "KRD S.A", role: "2 years 6 months", date: "Sep 2012 – Feb 2015" }
              ].map((exp, idx) => (
                <motion.div key={idx} variants={fadeUpVariants} className="timeline-row" style={{ borderTop: exp.first ? 'none' : '1px solid #e5e7eb' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                    <span className="exp-company">{exp.company}</span>
                    <span className="exp-role">{exp.role}</span>
                  </div>
                  <span className="exp-date">{exp.date}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FOOTER */}
        <motion.footer 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariants}
          className="section-padding" 
          style={{ paddingBottom: '64px' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
            <a href="mailto:kontakt@romemichal.pl" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 500, letterSpacing: '-0.04em', color: '#030712', textDecoration: 'none' }} className="hover:opacity-70 transition-opacity">
              kontakt@romemichal.pl
            </a>
            <div style={{ display: 'flex', gap: '24px' }}>
              <a href="#" className="nav-link">LinkedIn</a>
              <a href="#" className="nav-link">Twitter</a>
            </div>
          </div>
        </motion.footer>
      </main>
    </>
  );
}
