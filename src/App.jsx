import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header class="header-container">
        <h1>🔥 Fireplace Palace</h1>
      </header>
      <main>
        <section class="hero-section">
          <img
            src="/images/hero-mobile.png"
            srcset="/images/hero-mobile.png 900w, /images/hero-desktop.png 901w"
            sizes="(max-width: 900px) 100vw,
             901px"
            alt="Cozy living room with a fireplace"
            class="hero-image"
          />

          <div class="hero-description">
            <p class="hero-headline">
              Discover the <br />
              perfect fireplace ...
            </p>
            <p class="consultation-paragraph">
              Book consultation: <span class="number-span">0121 345 6789</span>
            </p>
          </div>
        </section>

        <hr class="separator" />

        <section id="how-it-works" class="how-it-works-section">
          <h2 class="how-it-works-text">How It Works</h2>
          <div class="tiles">
            <article class="tile">
              <img
                src="/images/how-it-works-1.png"
                alt="Phone call illustration"
                class="tile-image"
              />
              <h3>Give us a call...</h3>
              <p>
                Call us and book in a "Design Consultation" on a date and time
                that suits you.
              </p>
            </article>
            <article class="tile">
              <img
                src="/images/how-it-works-2.png"
                alt="Home visit illustration"
                class="tile-image"
              />
              <h3>We come to you...</h3>
              <p>
                We come to your home to do an assessment of the space and to
                your style preference.
              </p>
            </article>
            <article class="tile">
              <img
                src="/images/how-it-works-3.png"
                alt="Fireplace recommendation illustration"
                class="tile-image"
              />
              <h3>We recommend...</h3>
              <p>We send you a bespoke set of fireplace recommendations.</p>
            </article>
          </div>
        </section>
      </main>
      <footer class="footer">
        <div class="colunms-container">
          <div class="footer-column">
            <p>Find us on:</p>
            <ul class="footer-nav">
              <li>
                <a href="https://www.facebook.com" class="socials-link">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" class="socials-link">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com" class="socials-link">
                  TikTok
                </a>
              </li>
            </ul>
          </div>

          <div class="footer-column">
            <p>Contact us:</p>
            <address>
              <a href="mailto:info@firepalace.co.uk" class="email-link">
                info@firepalace.co.uk
              </a>
            </address>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
