import React, { Component } from "react";

import { Link } from "react-router-dom";

import AccountsUIWrapper from "./AccountsUIWrapper.jsx";

export default class NavBar extends Component {
  render() {
    return (
      <div className="nav-new">
        <nav className="navbar navbar-expand-lg navbar-fixed-top bg-light">
          <a className="navbar-brand" href="#">
            Picture-This
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/">
                  Home <span className="nav-link sr-only">(current)</span>
                </Link>
              </li>
            </ul>
            <AccountsUIWrapper />
          </div>
        </nav>
      </div>
    );
  }
}
