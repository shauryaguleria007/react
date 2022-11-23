import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payments infrastructure for the internet.</h1>
          <p>
            Millions of companies of all size-form startups to Fortune 500s-user
            Stripes software to accept payments, give payouts,and manage their
            business online.
          </p>
          <button className="btn">Start Now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
