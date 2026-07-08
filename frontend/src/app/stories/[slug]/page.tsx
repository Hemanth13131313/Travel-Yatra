import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/siteData';
import styles from '../../explore/page.module.css';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function StoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <img src={post.imageUrl} alt={post.title} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -2 }} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{post.title}</h1>
          <p className={styles.heroSubtitle}>By {post.author} • {post.date} • {post.readTime}</p>
        </div>
      </section>

      <article className="section container" style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'start' }}>
          <div style={{ fontSize: '1.2rem', lineHeight: 1.8, color: 'var(--color-text)' }}>
            <p style={{ marginBottom: '20px', fontStyle: 'italic', color: 'var(--color-accent)' }}>{post.excerpt}</p>
            <p style={{ marginBottom: '20px' }}>
              The journey began long before the flight touched down. It started with a curiosity that turned into an obsession, reading every piece of literature and studying maps until the topography felt familiar. Yet, nothing prepares you for the reality of standing there, feeling the crisp air and hearing the silence that only true wilderness can offer.
            </p>
            <p>
              In the end, it wasn't about the destination, but the quiet moments of realization along the way. Travel has a unique way of stripping away the unnecessary and leaving you with a profound sense of clarity and connection to the world around you.
            </p>
          </div>
          <div>
            <img src={post.imageUrl} alt={`Read ${post.title}`} style={{ width: '100%', height: '500px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
          </div>
        </div>
      </article>
    </div>
  );
}
