'use client';

import Link from 'next/link';
import { ScrollReveal } from '@/components/ScrollReveal/ScrollReveal';
import styles from './page.module.css';

const values = [
  {
    icon: '🌿',
    title: 'Authenticity',
    description:
      'We celebrate genuine cultural experiences and connect travelers with the soul of every destination.',
  },
  {
    icon: '✨',
    title: 'Curiosity',
    description:
      'Every journey is designed to spark wonder and encourage a deeper understanding of the world.',
  },
  {
    icon: '💡',
    title: 'Innovation',
    description:
      'Our AI-powered Terra Guide brings cutting-edge technology to the art of travel planning.',
  },
  {
    icon: '🎯',
    title: 'Personalization',
    description:
      'No two travelers are the same. Every itinerary is tailored to your rhythm, interests, and dreams.',
  },
];

const team = [
  {
    initials: 'SK',
    name: 'Sathvik Kadimisetty',
    title: 'Founder & Head Explorer',
    bio: 'A lifelong explorer with a vision to make meaningful travel accessible, personal, and unforgettable.',
  },
  {
    initials: 'AP',
    name: 'Aria Patel',
    title: 'Director of Expeditions',
    bio: 'Ensures every journey runs like clockwork — from first enquiry to the final farewell.',
  },
  {
    initials: 'RS',
    name: 'Ravi Shankar',
    title: 'Lead Terra Guide',
    bio: 'With 12 years in adventure travel, Ravi crafts itineraries that turn first-time visitors into lifelong fans.',
  },
  {
    initials: 'NM',
    name: 'Neha Mehta',
    title: 'AI Architect',
    bio: 'The mastermind behind Terra Guide — making smart, personality-driven travel recommendations a reality.',
  },
];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      {/* ── Hero ────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>About Travel Yatra</span>
          <h1 className={styles.heroTitle}>Our Story</h1>
          <p className={styles.heroSubtitle}>
            Born from a passion for extraordinary experiences, Travel Yatra
            redefines what it means to explore the world.
          </p>
        </div>
      </section>

      {/* ── Story ───────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.storyBlock}>
              <span className={styles.label}>Who We Are</span>
              <h2 className={styles.storyTitle}>
                Fostering Curiosity Since 2024
              </h2>
              <p className={styles.storyText}>
                Travel Yatra was founded with a simple yet ambitious
                mission — to create travel experiences that feel effortless,
                immersive, and deeply personal. We aren't just a booking site; 
                we are an exploration platform designed to help you discover the unknown.
              </p>
              <p className={styles.storyText}>
                We believe travel is not just about visiting new places — it's
                about the stories you collect, the people you meet, and the
                memories that stay with you forever. That belief drives every
                itinerary we design, powered by human expertise and our intelligent Terra Guide.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Mission & Vision ────────────────── */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.mvGrid}>
              <div className={styles.mvCard}>
                <span className={styles.mvIcon}>🎯</span>
                <h3 className={styles.mvTitle}>Our Mission</h3>
                <p className={styles.mvText}>
                  To make immersive exploration accessible and deeply personal
                  — empowering every traveler to explore the world with
                  confidence and joy through AI-driven planning and
                  human-crafted expertise.
                </p>
              </div>
              <div className={styles.mvCard}>
                <span className={styles.mvIcon}>🔭</span>
                <h3 className={styles.mvTitle}>Our Vision</h3>
                <p className={styles.mvText}>
                  To become the world's most trusted exploration partner,
                  where technology and human touch converge to create journeys
                  that inspire, transform, and connect people across cultures.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Values ──────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className={styles.label}>What Drives Us</span>
              <h2 className={styles.sectionTitle}>Our Core Values</h2>
            </div>
          </ScrollReveal>

          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 80}>
                <div className={styles.valueCard}>
                  <span className={styles.valueIcon}>{v.icon}</span>
                  <h4 className={styles.valueTitle}>{v.title}</h4>
                  <p className={styles.valueDesc}>{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ────────────────────────────── */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.sectionHeader}>
              <span className={styles.label}>The People Behind Travel Yatra</span>
              <h2 className={styles.sectionTitle}>Meet Our Team</h2>
            </div>
          </ScrollReveal>

          <div className={styles.teamGrid}>
            {team.map((m, i) => (
              <ScrollReveal key={m.name} delay={i * 80}>
                <div className={styles.teamCard}>
                  <div className={styles.avatar}>{m.initials}</div>
                  <h4 className={styles.teamName}>{m.name}</h4>
                  <span className={styles.teamRole}>{m.title}</span>
                  <p className={styles.teamBio}>{m.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <ScrollReveal>
            <div className={styles.ctaBlock}>
              <h2 className={styles.ctaTitle}>
                Ready to Start Your Journey?
              </h2>
              <p className={styles.ctaText}>
                Let our team craft the perfect travel experience for you. Get
                in touch and let's plan something extraordinary.
              </p>
              <Link href="/contact" className={styles.ctaButton}>
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
