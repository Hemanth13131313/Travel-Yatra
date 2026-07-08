'use client';

import { useState } from 'react';
import styles from './page.module.css';
import { ScrollReveal } from '@/components/ScrollReveal/ScrollReveal';

type Step = 'welcome' | 'form' | 'loading' | 'result';

export default function PlannerPage() {
  const [step, setStep] = useState<Step>('welcome');

  // Form State
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [duration, setDuration] = useState('7-10 days');
  const [travelers, setTravelers] = useState('2');
  const [budget, setBudget] = useState('Premium');
  const [stylesList, setStylesList] = useState<string[]>([]);
  const [interests, setInterests] = useState('');

  const travelStylesOptions = [
    'Adventure', 'Relaxation', 'Cultural', 'Romantic', 
    'Family', 'Foodie', 'Nightlife', 'Nature'
  ];

  const handleStyleToggle = (style: string) => {
    if (stylesList.includes(style)) {
      setStylesList(stylesList.filter(s => s !== style));
    } else {
      setStylesList([...stylesList, style]);
    }
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStep('result');
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 3000);
  };

  return (
    <div className={styles.container}>
      {step === 'welcome' && (
        <section className={styles.welcomeSection}>
          <ScrollReveal className={styles.welcomeContent}>
            <div className={styles.iconContainer}>✨</div>
            <h1 className={styles.title}>Consult Terra Guide</h1>
            <p className={styles.subtitle}>
              Your personal AI exploration consultant will draft a completely personalized journey 
              proposal based on your personality, curiosities, and travel rhythm.
            </p>
            <button className={styles.btnPrimary} onClick={() => setStep('form')}>
              Start Consultation
            </button>
          </ScrollReveal>
        </section>
      )}

      {step === 'form' && (
        <section className={styles.formSection}>
          <ScrollReveal>
            <div className={styles.formHeader}>
              <button className={styles.backBtn} onClick={() => setStep('welcome')}>← Back</button>
              <h2>Design Your Journey</h2>
              <p>Fill in the details below to help our AI understand your perfect trip.</p>
            </div>

            <form className={styles.plannerForm} onSubmit={handleGenerate}>
              <div className={styles.formGrid}>
                <div className={styles.inputGroup}>
                  <label>Where do you want to go?</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Japan, Maldives, or 'Anywhere warm'" 
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    required
                  />
                </div>
                
                <div className={styles.inputGroup}>
                  <label>When are you planning to travel?</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Next Spring, October 2025" 
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>Duration</label>
                  <select value={duration} onChange={(e) => setDuration(e.target.value)}>
                    <option>3-5 days</option>
                    <option>5-7 days</option>
                    <option>7-10 days</option>
                    <option>10-14 days</option>
                    <option>14+ days</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label>Number of Travelers</label>
                  <input 
                    type="number" 
                    min="1" 
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>Budget Range</label>
                  <select value={budget} onChange={(e) => setBudget(e.target.value)}>
                    <option>Budget-Friendly</option>
                    <option>Mid-Range</option>
                    <option>Premium</option>
                    <option>Luxury</option>
                    <option>Ultra-Luxury</option>
                  </select>
                </div>
              </div>

              <div className={styles.fullWidthGroup}>
                <label>Travel Style (Select all that apply)</label>
                <div className={styles.pillContainer}>
                  {travelStylesOptions.map(style => (
                    <button
                      key={style}
                      type="button"
                      className={`${styles.pill} ${stylesList.includes(style) ? styles.pillActive : ''}`}
                      onClick={() => handleStyleToggle(style)}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.fullWidthGroup}>
                <label>Special Interests or Requests</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us more about what you love. Are you celebrating an anniversary? Do you need wheelchair accessibility? Love trying local street food?"
                  value={interests}
                  onChange={(e) => setInterests(e.target.value)}
                />
              </div>

              <div className={styles.formFooter}>
                <button type="submit" className={styles.generateBtn}>
                  ✨ Generate My Trip Plan
                </button>
              </div>
            </form>
          </ScrollReveal>
        </section>
      )}

      {step === 'loading' && (
        <section className={styles.loadingSection}>
          <div className={styles.loader}>
            <div className={styles.loaderCircle}></div>
            <div className={styles.loaderIcon}>✈️</div>
          </div>
          <h2 className={styles.loadingTitle}>Crafting Your Perfect Trip...</h2>
          <div className={styles.loadingSteps}>
            <p className={styles.loadingStepActive}>Analyzing your preferences</p>
            <p className={styles.loadingStepActive} style={{animationDelay: '1s'}}>Searching premium accommodations</p>
            <p className={styles.loadingStepActive} style={{animationDelay: '2s'}}>Curating unique local experiences</p>
          </div>
        </section>
      )}

      {step === 'result' && (
        <section className={styles.resultSection}>
          <ScrollReveal className={styles.resultHeader}>
            <div className={styles.aiBadge}>Terra Guide Proposal</div>
            <h1>Your Dream Journey to Japan</h1>
            <p>A luxurious 10-day cultural immersion crafted specifically for your premium travel style.</p>
          </ScrollReveal>

          <div className={styles.resultGrid}>
            <div className={styles.mainContent}>
              
              {/* Summary */}
              <ScrollReveal className={styles.card}>
                <h3>Trip Summary</h3>
                <div className={styles.summaryGrid}>
                  <div className={styles.summaryItem}>
                    <span>Destination</span>
                    <strong>Japan (Tokyo, Kyoto, Hakone)</strong>
                  </div>
                  <div className={styles.summaryItem}>
                    <span>Duration</span>
                    <strong>10 Days / 9 Nights</strong>
                  </div>
                  <div className={styles.summaryItem}>
                    <span>Travel Style</span>
                    <strong>Cultural, Romantic, Premium</strong>
                  </div>
                  <div className={styles.summaryItem}>
                    <span>Best Season</span>
                    <strong>Spring (Cherry Blossoms)</strong>
                  </div>
                </div>
              </ScrollReveal>

              {/* Itinerary */}
              <ScrollReveal className={styles.card}>
                <h3>Day-by-Day Itinerary</h3>
                <div className={styles.itinerary}>
                  <div className={styles.day}>
                    <div className={styles.dayNum}>Day 1-3</div>
                    <div className={styles.dayContent}>
                      <h4>Tokyo: The Neon Metropolis</h4>
                      <ul>
                        <li><strong>Morning:</strong> Arrive in Tokyo, private transfer to hotel</li>
                        <li><strong>Afternoon:</strong> Relax, explore the Imperial Palace gardens</li>
                        <li><strong>Evening:</strong> Michelin-starred sushi dinner in Ginza</li>
                        <li><strong>Accommodation:</strong> Aman Tokyo (5-star)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className={styles.day}>
                    <div className={styles.dayNum}>Day 4-5</div>
                    <div className={styles.dayContent}>
                      <h4>Hakone: Hot Springs & Mt. Fuji</h4>
                      <ul>
                        <li><strong>Morning:</strong> Bullet train to Hakone</li>
                        <li><strong>Afternoon:</strong> Open-air museum and Lake Ashi cruise</li>
                        <li><strong>Evening:</strong> Traditional Kaiseki dinner & private onsen</li>
                        <li><strong>Accommodation:</strong> Gora Kadan Ryokan (Luxury)</li>
                      </ul>
                    </div>
                  </div>

                  <div className={styles.day}>
                    <div className={styles.dayNum}>Day 6-9</div>
                    <div className={styles.dayContent}>
                      <h4>Kyoto: Ancient Traditions</h4>
                      <ul>
                        <li><strong>Morning:</strong> Private tea ceremony in Gion</li>
                        <li><strong>Afternoon:</strong> Golden Pavilion (Kinkaku-ji) & Bamboo Grove</li>
                        <li><strong>Evening:</strong> Pontocho Alley food tour</li>
                        <li><strong>Accommodation:</strong> Four Seasons Kyoto (5-star)</li>
                      </ul>
                    </div>
                  </div>

                  <div className={styles.day}>
                    <div className={styles.dayNum}>Day 10</div>
                    <div className={styles.dayContent}>
                      <h4>Departure</h4>
                      <ul>
                        <li><strong>Morning:</strong> Last-minute shopping in Kyoto</li>
                        <li><strong>Afternoon:</strong> Transfer to Kansai Airport for departure</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

            </div>

            <div className={styles.sidebar}>
              {/* Budget */}
              <ScrollReveal className={styles.card}>
                <h3>Estimated Budget</h3>
                <ul className={styles.budgetList}>
                  <li><span>Premium Hotels</span> <span>₹2,10,000</span></li>
                  <li><span>Domestic Transport (Rail Pass)</span> <span>₹35,000</span></li>
                  <li><span>Curated Activities & Tours</span> <span>₹45,000</span></li>
                  <li><span>Food & Dining (Mid-High)</span> <span>₹60,000</span></li>
                  <li className={styles.budgetTotal}>
                    <span>Estimated Total</span> <span>₹3,50,000</span>
                  </li>
                </ul>
                <p className={styles.budgetNote}>*Excludes international flights</p>
              </ScrollReveal>

              {/* Tips */}
              <ScrollReveal className={styles.card}>
                <h3>Essential Tips</h3>
                <ul className={styles.tipsList}>
                  <li>✅ Pre-book Shinkansen tickets with luggage reservations</li>
                  <li>✅ Carry cash; many small traditional shops don't accept cards</li>
                  <li>✅ Learn basic Japanese phrases (Arigatou gozaimasu)</li>
                </ul>
              </ScrollReveal>

              {/* Visa */}
              <ScrollReveal className={styles.card}>
                <h3>Visa & Weather</h3>
                <div className={styles.infoRow}>
                  <span>🛂 Visa</span>
                  <strong>Required (E-Visa available)</strong>
                </div>
                <div className={styles.infoRow}>
                  <span>☀️ Weather (Spring)</span>
                  <strong>15°C - 20°C (Pleasant)</strong>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal className={styles.ctaSection}>
            <h2>Ready to make this trip a reality?</h2>
            <p>Our human travel experts will refine this AI proposal, check real-time availability, and handle all the bookings for you.</p>
            <div className={styles.ctaActions}>
              <button className={styles.btnAccentLarge}>Book a Free Consultation</button>
              <button className={styles.btnText} onClick={() => setStep('form')}>Start Over</button>
            </div>
          </ScrollReveal>
        </section>
      )}
    </div>
  );
}
