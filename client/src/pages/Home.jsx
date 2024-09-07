import { Analytics } from "../components/Analytics";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Transform Your Body, Elevate Your Mind at PrimeFit!</p>
              <h1>Welcome to PrimeFit</h1>
              <p>
              Step into a vibrant community that's dedicated to lifelong learning and making a difference. Explore our exciting range of classes, from fitness programs to educational workshops. We're committed to fostering a supportive environment where you can connect with others, develop new skills, and contribute to meaningful causes.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/home.jpg"
                alt="home1 info"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      <Analytics />

      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/home2.jpg"
              alt="home2 info"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>We are here to help you!</p>
            <h1>Get Started Today</h1>
            <p>
            Discover a place where learning and social responsibility come together. We offer a diverse range of classes to suit your interests, from fitness and wellness to arts and education. We also believe in giving back to our community through volunteer initiatives and social events. Join us on this journey of personal growth and shared purpose.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};