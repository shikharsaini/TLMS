import { useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import classes from "./QuoteItem.module.css";
import { deleteQuote } from "../../lib/api";
import useHttp from "../../Hooks/use-http";
import LoadingSpinner from "../UI/LoadingSpinner";

const QuoteItem = (props) => {
  const history = useNavigate();
  const { sendRequest, status } = useHttp(deleteQuote, true);

  useEffect(() => {
    if (status === "completed") {
      // console.log(data);
      history("/orders");
      window.location.reload(false);
    }
  }, [status, history]);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("HI");
    sendRequest(props.id);
    // if (status === "pending") {
    //   <LoadingSpinner />;
    // }
  };
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.date}</p>
        </blockquote>
        {console.log(props.date)}
        <figcaption>Total Items : {props.total}</figcaption>
      </figure>

      <Link className="btn" to={`${props.id}`}>
        View Details
      </Link>

      {/* <button className="centered" onClick> */}
      <form onSubmit={submitHandler}>
        <button className="btn2">Drop Order</button>
      </form>
      {/* </button> */}
      {/* <div className="centered"> */}
      {/* </div> */}
      {/* </div> */}
    </li>
  );
};

export default QuoteItem;
