'use client';

import Link from 'next/link';
import styles from '../explore/page.module.css'; // Reuse styles for now
import { ScrollReveal } from '@/components/ScrollReveal/ScrollReveal';

export default function ServicesPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <ScrollReveal>
            <h1 className={styles.heroTitle}>Our Services</h1>
            <p className={styles.heroSubtitle}>
              From AI-guided discovery to bespoke logistics, we handle the details so you can focus on the journey.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section container">
        <ScrollReveal>
          <h2>Logistics & Planning</h2>
          <p>We provide full-service booking, visa assistance, and 24/7 on-ground support for all Travel Yatra travelers.</p>
        </ScrollReveal>
      </section>
    </div>
  );
}
