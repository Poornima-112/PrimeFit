import { NavLink } from "react-router-dom";
import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/auth";

export const About = () => {
  const { user } = useAuth();



  if (!user) {
    return <p>Loading...</p>; // Display while data is being fetched
  }

  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">

              <p>
                Welcome, {user ? ` ${user.username} !` : ` to our website`}
              </p>


              <h1>Why Choose Us? </h1>
              <p>
                <strong>Experienced Instructors:</strong> Our team of certified fitness instructors is dedicated to helping you achieve your goals.
              </p>
              <p>
                <strong>Wide Range of Classes:</strong> From yoga and Pilates to high-intensity workouts, we offer a diverse range of classes to keep you motivated.
              </p>
              <p>
                <strong>Personalized Training:</strong> Our trainers can create a customized workout plan to help you reach your fitness goals.
              </p>
              <p>
                <strong>Community Atmosphere:</strong> PrimeFit is more than just a gym. It's a community of like-minded individuals who support each other on their fitness journeys.
              </p>
              <p>
                <strong>Affordable Membership:</strong> We offer competitive membership rates to make fitness accessible to everyone.
              </p>
              <p>
                <strong>Social Responsibility:</strong> PrimeFit is committed to giving back to the community. We organize various social service initiatives, including marathons, walkathons, yoga classes for the community, and volunteering programs in schools.
              </p>

              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect Now</button>
                </NavLink>
                <button className="btn secondary-btn">learn more</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/about.jpg"
                alt="about info"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};