import styles from '../explore/page.module.css';

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <section className={styles.hero} style={{ height: '50vh', minHeight: '400px' }}>
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80" alt="Contact Us" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -2 }} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Get in Touch</h1>
          <p className={styles.heroSubtitle}>We're here to help you plan your next extraordinary journey.</p>
        </div>
      </section>

      <section className="section container" style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'start' }}>
          


          <div style={{ background: 'var(--color-surface)', padding: '40px', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '30px', color: 'var(--color-primary)' }}>Send a Message</h3>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-text)', fontWeight: 500 }}>Name</label>
                <input type="text" placeholder="Your name" style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-text)', fontWeight: 500 }}>Email</label>
                <input type="email" placeholder="Your email address" style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-text)', fontWeight: 500 }}>Subject</label>
                <input type="text" placeholder="How can we help?" style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: 'var(--color-text)', fontWeight: 500 }}>Message</label>
                <textarea placeholder="Write your message here..." rows={5} style={{ width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', resize: 'vertical' }}></textarea>
              </div>
              <button type="button" style={{ background: 'var(--color-primary)', color: 'white', border: 'none', padding: '16px', borderRadius: '30px', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', marginTop: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </section>
    </div>
  );
}
