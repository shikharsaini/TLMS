// import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
import classes from "./MainNavigation.module.css";
const MainNavigation = () => {
  // const { loginWithRedirect, logout, user, isLoading } = useAuth0();
  // const { user, loginWithRedirect, logout, isLoading } = useAuth0();
  // console.log(logout);
  // console.log(user);
  // console.log(isAuthenticated);
  const history = useNavigate();
  const logout = () => {
    localStorage.removeItem("email");
    history("./login");
  };
  return (
    <header className={classes.header}>
      <div className={classes.logo}>THAPAR LAUNDRY MANAGEMENT SYSTEM</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/orders"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              All Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-order"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Create Order
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              <button className="btn--flat2" onClick={logout}>
                {" "}
                Log Out
              </button>
            </NavLink>
          </li>
          {/* <li>
            {!isLoading && !user && (
              <button className="btn2" onClick={() => logout()}>
                Log Out
              </button>
            )}
          </li>
          <li>
            {!isLoading && !user && (
              <button className="btn2" onClick={() => loginWithRedirect()}>
                Log In
              </button>
            )}
          </li> */}
          <li>
            {/* {!isLoading && !user && (
              <button className="btn2" onClick={() => loginWithRedirect()}>
                Log In
              </button>
            )} */}
          </li>
          {/* nfk */}
          {/* {user} */}
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
