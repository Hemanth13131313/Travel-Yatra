import { notFound } from 'next/navigation';
import { destinations } from '@/data/siteData';
import styles from '../page.module.css';

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export default async function ExploreDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const dest = destinations.find((d) => d.slug === resolvedParams.slug);

  if (!dest) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <img src={dest.imageUrl} alt={dest.name} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -2 }} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{dest.name}</h1>
          <p className={styles.heroSubtitle}>{dest.tagline}</p>
        </div>
      </section>

      <section className="section container" style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'start' }}>
          <div>
            <h2>About {dest.name}</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '40px', color: 'var(--color-text-muted)' }}>{dest.description}</p>
            
            <h3>Highlights</h3>
            <ul style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', listStyle: 'none', padding: 0, marginBottom: '40px' }}>
              {dest.highlights.map(h => (
                <li key={h} style={{ background: 'var(--color-surface)', padding: '10px 20px', borderRadius: '30px', fontSize: '0.9rem', color: 'var(--color-accent)' }}>{h}</li>
              ))}
            </ul>
          </div>
          <div>
            <img src={dest.imageUrl} alt={`Discover ${dest.name}`} style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
        <div style={{ marginTop: '60px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center', marginBottom: '60px' }}>
            <div>
              <h3>Highlights</h3>
              <ul style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', listStyle: 'none', padding: 0 }}>
                {dest.highlights.map(h => (
                  <li key={h} style={{ background: 'var(--color-surface)', padding: '10px 20px', borderRadius: '30px', fontSize: '0.9rem', color: 'var(--color-accent)' }}>{h}</li>
                ))}
              </ul>
            </div>
            <img src={dest.detailImages?.highlights} alt="Highlights" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '16px' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center', marginBottom: '60px' }}>
            <img src={dest.detailImages?.trip} alt="Trip Details" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '16px' }} />
            <div>
              <h3>Trip Details</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
                <div style={{ background: 'var(--color-surface)', padding: '20px', borderRadius: '12px' }}>
                  <strong>Best Time to Visit</strong><br/>
                  <span style={{ color: 'var(--color-text-muted)' }}>{dest.bestTimeToVisit}</span>
                </div>
                <div style={{ background: 'var(--color-surface)', padding: '20px', borderRadius: '12px' }}>
                  <strong>Average Cost / Day</strong><br/>
                  <span style={{ color: 'var(--color-text-muted)' }}>{dest.averageCostPerDay}</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center', marginBottom: '60px' }}>
            <div>
              <h3>Food Recommendations</h3>
              <ul style={{ paddingLeft: '20px', color: 'var(--color-text-muted)' }}>
                {dest.foodRecommendations.map(f => <li key={f} style={{ marginBottom: '10px' }}>{f}</li>)}
              </ul>
            </div>
            <img src={dest.detailImages?.food} alt="Food" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '16px' }} />
          </div>
        </div>
      </section>
    </div>
  );
}
