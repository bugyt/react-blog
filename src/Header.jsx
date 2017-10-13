import React from "react";
import Navigation from "./Navigation";
import { Link, Route } from "react-router-dom";

class Header extends React.Component {
    state = {
        navCollapsed: true
    };

    _onToggleNav = () => {
        this.setState({ navCollapsed: !this.state.navCollapsed });
    };

    render() {
        const { navCollapsed } = this.state;

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            {"Bugyt"}
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            onClick={this._onToggleNav}
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>

                        <div
                            className={
                                (navCollapsed ? "collapse" : "") +
                                " navbar-collapse"
                            }
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav mr-auto">
                                <Route path="/" component={Navigation} />
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input
                                    className="form-control mr-sm-2"
                                    type="text"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button
                                    className="btn btn-outline-success my-2 my-sm-0"
                                    type="submit"
                                >
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
