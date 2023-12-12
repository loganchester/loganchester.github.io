import React from "react";
import Header from "./header";
import Footer from "./footer";
import { PageTitle } from "../types/page";

type Props = {
    children: any;
    header?: boolean;
    title?: PageTitle;
    footer?: boolean;
}

const Layout: React.FC<Props> = ({ children, header = true, title, footer = true }) => {


    return (
        <div className="d-flex flex-column min-vh-100">
            {header && <Header title={title ?? ''} />}
            <div className="container flex-grow-1">
                <div className="row my-5">
                    <div className="col-12">
                        <h3 className="text-primary">{title}</h3>
                        {children}
                    </div>
                </div>
            </div>
            {footer && <Footer />}
        </div>
    )
}

export default Layout;