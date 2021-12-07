import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./Pages/AllQuotes";
import AllQuotesEmployee from "./Pages/AllQuotesEmployee";
import { GoogleLogin } from "react-google-login";
// import NewQuote from "./Pages/NewQuote";
// import QuoteDetail from "./Pages/QuoteDetail";
// import NotFound from "./Pages/NotFound";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import SignUp from "./components/Auth/SignUp";
import Login from "./components/Auth/Login";

const NewQuote = React.lazy(() => import("./Pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./Pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./Pages/NotFound"));
// const LoadingSpinner = React.lazy(() =>
// import("./components/UI/LoadingSpinner")
// );
function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Layout>
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Navigate to="/orders" />} />
            <Route path="/orders" element={<AllQuotes />} />
            <Route path="/EmployeeOrders" element={<AllQuotesEmployee />} />
            <Route path="/EmployeeOrders/:quoteId/*" element={<QuoteDetail />} />
            <Route path="/orders/:quoteId/*" element={<QuoteDetail />} />
            <Route path="/new-order" element={<NewQuote />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
