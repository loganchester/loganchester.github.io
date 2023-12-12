import { Link } from "gatsby";
import React from "react";
import { PageTitle } from "../types/page";

type Props = {
    title: PageTitle;
}

const Header: React.FC<Props> = ({ title }) => {
    const [active, setActive] = React.useState<PageTitle>(title);
    return (
        <header className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <h2 className="m-0 text-primary">Logan Chester</h2>
                    </Link>
                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="true"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className={`nav-link${active === 'About' ? ' active' : ''}`}
                                >
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/blogs"
                                    className={`nav-link${active === 'Blogs' ? ' active' : ''}`}
                                >
                                    Travel Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/projects"
                                    className={`nav-link${active === 'Projects' ? ' active' : ''}`}
                                >
                                    Projects
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/resume"
                                    className={`nav-link${active === 'Resume' ? ' active' : ''}`}
                                >
                                    Resume
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/contact"
                                    className={`nav-link${active === 'Contact' ? ' active' : ''}`}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;