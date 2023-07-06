import React from "react";
import { Link } from "react-router-dom";

export default function Footers() {
  return (
    <footer className="">
      <div className="container">
        <p>
          <Link to={'/god'}>&copy;{new Date().getFullYear()} | </Link>
          <a href="https://kushalsoni.in">kushalsoni.in</a> | All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
