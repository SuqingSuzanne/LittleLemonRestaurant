import titleImage from "../../assets/food/food5.jpeg";
import { Link, useLocation } from "react-router-dom";
export default function Confirmation() {
  const location = useLocation();
  const formData = location.state;
  return (
    <header className="confirmation-header">
      <img
        className="confirmation-image"
        src={titleImage}
        alt="Little Lemon Ingredients"
      ></img>
      <section className="reserve-header-text">
        <h1>Your Reservation is Confirmed!</h1>
             <h4>Thanks for dining with us!</h4>
      </section>

      <section className="redirect-buttons">
        <a
          className="redirect-button"
          href={require("../../assets/menu.webp")}
          target="_blank"
          rel="noreferrer"
        >
          Browse Menu
        </a>
        <Link className="redirect-button" to="/order">
          Order Online
        </Link>
        <Link className="redirect-button" to="/">
          Home Page
        </Link>
      </section>
    </header>
  );
}
