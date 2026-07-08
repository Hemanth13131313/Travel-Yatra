import { notFound } from 'next/navigation';
import { packages } from '@/data/siteData';
import styles from '../../explore/page.module.css';

export function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export default async function ExpeditionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const pkg = packages.find((p) => p.slug === resolvedParams.slug);

  if (!pkg) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <img src={pkg.imageUrl} alt={pkg.title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -2 }} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{pkg.title}</h1>
          <p className={styles.heroSubtitle}>{pkg.destination} • {pkg.duration}</p>
        </div>
      </section>

      <section className="section container" style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'start' }}>
          <div>
            <h2>About this Expedition</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '40px', color: 'var(--color-text-muted)' }}>{pkg.description}</p>
            
            <h3>What's Included</h3>
            <ul style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', listStyle: 'none', padding: 0, marginBottom: '20px' }}>
              {pkg.included.map(item => (
                <li key={item} style={{ background: 'var(--color-surface)', padding: '10px 20px', borderRadius: '30px', fontSize: '0.9rem', color: 'var(--color-accent)' }}>✓ {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <img src={pkg.imageUrl} alt={`Discover ${pkg.title}`} style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }}>
          <div style={{ background: 'var(--color-surface)', padding: '20px', borderRadius: '12px' }}>
            <strong>Price</strong><br/>
            <span style={{ color: 'var(--color-text-muted)' }}>{pkg.currency}{pkg.price.toLocaleString()}</span>
          </div>
          <div style={{ background: 'var(--color-surface)', padding: '20px', borderRadius: '12px' }}>
            <strong>Difficulty</strong><br/>
            <span style={{ color: 'var(--color-text-muted)' }}>{pkg.difficulty}</span>
          </div>
          <div style={{ background: 'var(--color-surface)', padding: '20px', borderRadius: '12px' }}>
            <strong>Group Size</strong><br/>
            <span style={{ color: 'var(--color-text-muted)' }}>{pkg.groupSize}</span>
          </div>
          <div style={{ background: 'var(--color-surface)', padding: '20px', borderRadius: '12px' }}>
            <strong>Accommodations</strong><br/>
            <span style={{ color: 'var(--color-text-muted)' }}>{pkg.hotels}</span>
          </div>
        </div>

        <h3>Included</h3>
        <ul style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', listStyle: 'none', padding: 0, marginBottom: '40px' }}>
          {pkg.included.map(i => (
            <li key={i} style={{ background: 'var(--color-surface)', padding: '10px 20px', borderRadius: '30px', fontSize: '0.9rem', color: 'var(--color-accent)' }}>✓ {i}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
