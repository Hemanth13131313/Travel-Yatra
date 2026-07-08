'use client';

import Link from 'next/link';
import styles from '../explore/page.module.css'; // Reuse styles for now
import { blogPosts } from '@/data/siteData';
import { ScrollReveal } from '@/components/ScrollReveal/ScrollReveal';

export default function StoriesPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <ScrollReveal>
            <h1 className={styles.heroTitle}>Chronicles of Discovery</h1>
            <p className={styles.heroSubtitle}>
              Read stories from travelers who ventured into the unknown.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section container">
        <div className={styles.destGrid}>
          {blogPosts.map((post, i) => (
            <ScrollReveal key={post.id} delay={i * 50}>
              <Link href={`/stories/${post.slug}`} className={styles.destCard} style={{ display: 'block', textDecoration: 'none' }}>
                <div className={styles.destImageWrapper}>
                  <img src={post.imageUrl} alt={post.title} className={styles.destImage} />
                  <div className={styles.destOverlay} />
                </div>
                <div className={styles.destContent}>
                  <span className={styles.destCountry}>{post.category} • {post.readTime}</span>
                  <h3 className={styles.destName}>{post.title}</h3>
                  <p className={styles.destTagline}>By {post.author}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
