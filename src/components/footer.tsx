import { Link } from "gatsby";
import React from "react";

type Props = {}

const Footer: React.FC<Props> = () => {

    return (
        <footer className="sticky-bottom">
            <div className="d-flex justify-content-around align-items-center bg-light p-3">
                <div>
                    <a href="https://www.linkedin.com/in/logan-chester-259807149/" target="_blank" className="fa fa-linkedin fa-2x text-decoration-none"></a>
                </div>
                <div>
                    <a href="https://github.com/loganchester/loganchester.github.io" target="_blank" className="fa fa-github fa-2x text-decoration-none"></a>
                </div>
                <div>
                    <a href="https://www.instagram.com/loganjchester_/?hl=en" target="_blank" className="fa fa-instagram fa-2x text-decoration-none"></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;