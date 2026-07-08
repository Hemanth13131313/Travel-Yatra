'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import { destinations } from '@/data/siteData';
import { ScrollReveal } from '@/components/ScrollReveal/ScrollReveal';

export default function ExplorePage() {
  const [filter, setFilter] = useState('All');
  
  const continents = ['All', ...Array.from(new Set(destinations.map(d => d.continent)))];
  
  const filteredDestinations = filter === 'All' 
    ? destinations 
    : destinations.filter(d => d.continent === filter);

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <ScrollReveal>
            <h1 className={styles.heroTitle}>Explore the Extraordinary</h1>
            <p className={styles.heroSubtitle}>
              Venture beyond the ordinary. Discover landscapes that inspire and cultures that connect.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section container">
        <ScrollReveal className={styles.filterSection}>
          <div className={styles.filterTabs}>
            {continents.map(continent => (
              <button
                key={continent}
                className={`${styles.filterBtn} ${filter === continent ? styles.filterActive : ''}`}
                onClick={() => setFilter(continent)}
              >
                {continent}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className={styles.destGrid}>
          {filteredDestinations.map((dest, i) => (
            <ScrollReveal key={dest.id} delay={i * 50}>
              <Link href={`/explore/${dest.slug}`} className={styles.destCard}>
                <div className={styles.destImageWrapper}>
                  <img src={dest.imageUrl} alt={dest.name} className={styles.destImage} />
                  <div className={styles.destOverlay} />
                </div>
                <div className={styles.destContent}>
                  <span className={styles.destCountry}>{dest.country}</span>
                  <h3 className={styles.destName}>{dest.name}</h3>
                  <p className={styles.destTagline}>{dest.tagline}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
