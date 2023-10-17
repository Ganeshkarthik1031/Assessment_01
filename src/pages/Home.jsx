import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Index_Page</h1>
      <p className="headline">
        This project was created for Fitpeo Tech entry level assesment developed by {" "}
        <a href="https://ganeshkarthik1031.000webhostapp.com/">Ganesh Karthik</a>. Quickly use below link
        to navigate through the requested webpage.
      </p>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
