import { useEffect } from "react";
import { Routes, useParams, Route, Link, useNavigate } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../Hooks/use-http";
import { getSingleQuote } from "../lib/api";
const FIREBASE_DOMAIN =
  // "https://react-router-42a29-default-rtdb.firebaseio.com/";
  "https://thapar-lms-default-rtdb.firebaseio.com/";

const QuoteDetail = () => {
  const params = useParams();
  const history = useNavigate();
  const { quoteId } = params;
  const { sendRequest, status, data, error } = useHttp(getSingleQuote, true);

  const dropHandler = async () => {
    const response = await fetch(`${FIREBASE_DOMAIN}/orders/${quoteId}.json`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Could not delete");
    }
    // history()
    history("/orders");
  };
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (!data.date) {
    return <p>No orders Found!</p>;
  }
  // console.log(data);
  // const quote = data.find((quote) => quote.id === params.quoteId);
  // if (!quote) {
  //   return <p>Nooooo quote found!</p>;
  // }
  return (
    <section>
      <HighlightedQuote
        date={data.date}
        request={data.request}
        shirt={data.shirt}
        tshirt={data.tshirt}
        short={data.short}
        jeans={data.jeans}
        trouser={data.trouser}
        sweater={data.sweater}
        towel={data.towel}
        bedsheet={data.bedsheet}
      />
      {/* <button> */}
      {/* <div className="bt2"> */}
      {/* <button className="btn" onClick={dropHandler}> */}
      {/* <Link className="btn" to="/orders"> */}
      {/* <h5 className="centered"> Drop Order</h5> */}
      {/* <p className="centered">Drop Order</p> */}
      {/* Drop Order */}
      {/* </Link> */}
      {/* </button> */}
      {/* </div> */}
      {/* </button> */}
      {/* <Link to="comments">Comments</Link> */}
      <Routes>
        <Route
          path="/"
          element={
            <div className="centered">
              <Link className="btn--flat" to="comments">
                Give FeedBack
              </Link>
            </div>
          }
        />

        {/* </Routes> */}

        {/* <Routes> */}
        <Route path="comments" element={<Comments />} />
      </Routes>
    </section>
  );
};
export default QuoteDetail;
