import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ScrollReveal/ScrollReveal';
import { destinations, packages, blogPosts } from '@/data/siteData';

export default function Home() {
  const featuredDestinations = destinations.filter(d => d.featured).slice(0, 6);
  const featuredExpeditions = packages.filter(p => p.featured).slice(0, 4);
  const stories = blogPosts.slice(0, 3);

  const moods = [
    { name: 'Mountains', icon: '🏔️', color: '#1E3A2F' },
    { name: 'Beaches', icon: '🏝️', color: '#4A6984' },
    { name: 'Nature', icon: '🌲', color: '#2E5A48' },
    { name: 'Culture', icon: '🏛️', color: '#D96C5B' },
    { name: 'Adventure', icon: '🧗', color: '#32495E' },
    { name: 'Stargazing', icon: '🌌', color: '#12241D' },
  ];

  return (
    <div className={styles.main}>
      {/* Cinematic Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80" alt="Cinematic Landscape" className={styles.heroImage} />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroContent}>
          <ScrollReveal delay={100}>
            <h1 className={styles.heroTitle}>Where Will Your Curiosity Take You Next?</h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className={styles.heroSubtitle}>
              Discover extraordinary places, meaningful experiences, and unforgettable adventures with Travel Yatra.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300} className={styles.heroActions}>
            <Link href="/explore" className={styles.btnPrimary}>Start Exploring</Link>
            <Link href="/journey-guide" className={styles.btnOutline}>Consult Terra Guide</Link>
          </ScrollReveal>
        </div>
        <div className={styles.scrollIndicator}>
          <span>Discover</span>
          <div className={styles.mouse} />
        </div>
      </section>

      {/* Featured Experiences (Destinations) */}
      <section className="section container">
        <ScrollReveal>
          <div className="sectionLabel">EXTRAORDINARY PLACES</div>
          <h2 className="sectionTitle">Featured Experiences</h2>
          <p className="sectionSubtitle">Immerse yourself in landscapes that defy imagination.</p>
        </ScrollReveal>
        
        <div className={styles.destGrid}>
          {featuredDestinations.map((dest, i) => (
            <ScrollReveal key={dest.id} delay={i * 100}>
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
        <ScrollReveal delay={200} className={styles.centerAction}>
          <Link href="/explore" className={styles.btnSecondary}>Explore All Destinations</Link>
        </ScrollReveal>
      </section>

      {/* Explore by Mood */}
      <section className={`section ${styles.moodSection}`}>
        <div className="container">
          <ScrollReveal>
            <div className="sectionLabel">FIND YOUR RHYTHM</div>
            <h2 className="sectionTitle">Explore by Mood</h2>
          </ScrollReveal>
          
          <div className={styles.moodGrid}>
            {moods.map((mood, i) => (
              <ScrollReveal key={mood.name} delay={i * 100}>
                <Link href="/explore" className={styles.moodCard} style={{ display: 'block', textDecoration: 'none', color: 'inherit', textAlign: 'center' }}>
                  <div className={styles.moodIconWrapper} style={{ backgroundColor: mood.color }}>
                    <span className={styles.moodIcon}>{mood.icon}</span>
                  </div>
                  <h3 className={styles.moodName}>{mood.name}</h3>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Expeditions */}
      <section className="section container">
        <ScrollReveal>
          <div className="sectionLabel">CURATED JOURNEYS</div>
          <h2 className="sectionTitle">Popular Expeditions</h2>
          <p className="sectionSubtitle">Carefully crafted routes designed for profound discovery.</p>
        </ScrollReveal>
        
        <div className={styles.pkgGrid}>
          {featuredExpeditions.map((pkg, i) => (
            <ScrollReveal key={pkg.id} delay={i * 100}>
              <div className={styles.pkgCard}>
                <div className={styles.pkgImageWrapper}>
                  <img src={pkg.imageUrl} alt={pkg.title} className={styles.pkgImage} />
                  <span className={styles.pkgBadge}>{pkg.category}</span>
                </div>
                <div className={styles.pkgContent}>
                  <h3 className={styles.pkgTitle}>{pkg.title}</h3>
                  <div className={styles.pkgMeta}>
                    <span>📍 {pkg.destination}</span>
                    <span>⏱️ {pkg.duration}</span>
                  </div>
                  <p className={styles.pkgDesc}>{pkg.description.substring(0, 100)}...</p>
                  <div className={styles.pkgFooter}>
                    <Link href={`/expeditions/${pkg.slug}`} className={styles.btnText}>View Expedition Route →</Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Interactive World Map (Placeholder for SVG Map) */}
      <section className={styles.mapSection}>
        <div className={styles.mapOverlay} />
        <div className="container">
          <ScrollReveal className={styles.mapContent}>
            <div className="sectionLabel" style={{ color: 'var(--color-bg)' }}>GLOBAL DISCOVERY</div>
            <h2 className={styles.mapTitle}>Explore the World Map</h2>
            <p className={styles.mapDesc}>
              Pinpoint hidden gems, track expedition routes, and dream up your next adventure on our interactive globe.
            </p>
            <button className={styles.btnAccent}>Open Interactive Map</button>
          </ScrollReveal>
        </div>
      </section>

      {/* AI Exploration Guide */}
      <section className={`section ${styles.aiSection}`}>
        <div className="container">
          <div className={styles.aiLayout}>
            <ScrollReveal className={styles.aiContent}>
              <div className="sectionLabel">MEET TERRA GUIDE</div>
              <h2 className={styles.aiTitle}>Your Personal Exploration Consultant</h2>
              <p className={styles.aiDesc}>
                Not sure where to go? Terra Guide acts as an experienced explorer, analyzing your travel style, mood, and curiosities to draft a bespoke journey plan.
              </p>
              <ul className={styles.aiFeatures}>
                <li>✨ Personalized to your personality</li>
                <li>🧭 Uncovers hidden offbeat locations</li>
                <li>📊 Tailored to your specific budget</li>
              </ul>
              <Link href="/journey-guide" className={styles.btnPrimary}>Start Consultation</Link>
            </ScrollReveal>
            <ScrollReveal delay={200} className={styles.aiVisual}>
              <div className={styles.aiMockup}>
                <div className={styles.mockHeader}>
                  <div className={styles.mockTitle}>Terra Guide Consultation</div>
                </div>
                <div className={styles.mockBody}>
                  <div className={styles.mockMessage}>
                    <div className={styles.mockAvatar}>TG</div>
                    <div className={styles.mockBubble}>
                      Welcome! Tell me, when you think of your next adventure, do you crave the silence of the mountains or the rhythm of the ocean?
                    </div>
                  </div>
                  <div className={styles.mockUserMessage}>
                    <div className={styles.mockUserBubble}>
                      Definitely the silence of the mountains. I want something rugged but culturally rich.
                    </div>
                  </div>
                  <div className={styles.mockMessage}>
                    <div className={styles.mockAvatar}>TG</div>
                    <div className={styles.mockBubble}>
                      In that case, let me suggest a journey through the Sacred Valley of Peru or the deep quiet of the Japanese Alps. Let's narrow it down...
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Traveler Stories */}
      <section className="section container">
        <ScrollReveal>
          <div className="sectionLabel">TRAVELER STORIES</div>
          <h2 className="sectionTitle">Chronicles of Discovery</h2>
        </ScrollReveal>
        
        <div className={styles.storyGrid}>
          {stories.map((story, i) => (
            <ScrollReveal key={story.id} delay={i * 150} className={styles.storyCard}>
              <Link href={`/stories/${story.slug}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                <div className={styles.storyImageWrapper}>
                  <img src={story.imageUrl} alt={story.title} className={styles.storyImage} />
                </div>
                <div className={styles.storyContent}>
                  <span className={styles.storyMeta}>{story.category} • {story.readTime}</span>
                  <h3 className={styles.storyTitle}>{story.title}</h3>
                  <p className={styles.storyExcerpt}>{story.excerpt}</p>
                  <div className={styles.storyAuthor}>By {story.author}</div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={200} className={styles.centerAction}>
          <Link href="/stories" className={styles.btnSecondary}>Read All Stories</Link>
        </ScrollReveal>
      </section>

      {/* Hidden Gems Banner */}
      <section className={styles.gemsBanner}>
        <ScrollReveal className={styles.gemsContent}>
          <h2>Discover the Undiscovered</h2>
          <p>We believe the best experiences aren't found in guidebooks.</p>
          <Link href="/explore" className={styles.btnPrimary}>Find Hidden Gems</Link>
        </ScrollReveal>
      </section>
    </div>
  );
}
