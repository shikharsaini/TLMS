import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="centered">
      {/* <p>Page not found!</p> */}
      {/* <div> */}
      {/* <br /> */}
      {/* <button className="btn--flat"> */}
      {/* <Link to="/orders">Go Home</Link> */}
      {/* </button> */}
      {/* </div> */}
      <div className="noquote">
        <p>No orders found!</p>
        <Link className="btn" to="/orders">
          GO HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
