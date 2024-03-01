import "./Banner.css";
import PropTypes from "prop-types";
import { Button } from "../Button/Button.jsx";

export const Banner = ({
  backgroundImageUrl,
  title,
  description,
  releaseYear,
  duration,
}) => {
  const bannerStyle = {
    backgroundImage: `linear-gradient(90deg, rgba(25, 25, 25, 1) 0%, rgba(25, 25, 25, 0.5) 50%), url(${backgroundImageUrl})`,
  };
  return (
    <section className="movie-banner" style={bannerStyle}>
      <div className="banner-content container">
        <h1>{title}</h1>
        <p>{description}</p>
        <p>
          <i className="bi bi-calendar-fill"></i>
          {releaseYear}
        </p>
        <p>
          <i className="bi bi-clock-fill"></i>
          {duration}
        </p>
        <Button title="Play Now" addClassName="play-now-button" />
      </div>
    </section>
  );
};

Banner.propTypes = {
  backgroundImageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  releaseYear: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};
