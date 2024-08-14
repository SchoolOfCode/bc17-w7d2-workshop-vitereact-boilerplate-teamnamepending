import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import Footer from './Components/Footer/Footer';
function App() {

  return (
    <>
      <Header />
      <main>
      <HeroSection />

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
    <Footer />

    </>
  );
}


export default App;


