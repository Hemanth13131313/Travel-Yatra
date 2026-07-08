'use client';

import Link from 'next/link';
import styles from '../explore/page.module.css'; // Reuse styles for now
import { packages } from '@/data/siteData';
import { ScrollReveal } from '@/components/ScrollReveal/ScrollReveal';

export default function ExpeditionsPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <ScrollReveal>
            <h1 className={styles.heroTitle}>Bespoke Expeditions</h1>
            <p className={styles.heroSubtitle}>
              Curated journeys designed for the profoundly curious.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section container">
        <div className={styles.destGrid}>
          {packages.map((pkg, i) => (
            <ScrollReveal key={pkg.id} delay={i * 50}>
              <Link href={`/expeditions/${pkg.slug}`} className={styles.destCard} style={{ display: 'block', textDecoration: 'none' }}>
                <div className={styles.destImageWrapper}>
                  <img src={pkg.imageUrl} alt={pkg.title} className={styles.destImage} />
                  <div className={styles.destOverlay} />
                </div>
                <div className={styles.destContent}>
                  <span className={styles.destCountry}>{pkg.category} • {pkg.duration}</span>
                  <h3 className={styles.destName}>{pkg.title}</h3>
                  <p className={styles.destTagline}>{pkg.description.substring(0, 80)}...</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
