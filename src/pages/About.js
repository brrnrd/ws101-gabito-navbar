import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="card-grid">
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <h2>Favorite Band</h2>
            </div>
            <div className="card-back">
              <p>THE 1975</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <h2>Favorite Song</h2>
            </div>
            <div className="card-back">
              <p>It's Not Living (If It's Not With You)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
