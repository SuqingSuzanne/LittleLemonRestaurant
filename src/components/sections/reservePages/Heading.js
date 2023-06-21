import titleImage from "../../../assets/food/food2.jpeg";
export default function Heading() {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={titleImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text" >
        <h1>Reserve a table</h1>
      </div>
    </header>
  );
}
