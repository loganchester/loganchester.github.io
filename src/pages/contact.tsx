import React from "react";
import Layout from "../components/layout";
import "../styles/index.scss";

type Props = {}

const AboutPage: React.FC<Props> = () => {
    return (
        <Layout title="Contact">
            <form method="post" id="contactform" name="contactform" action="https://formspree.io/f/xzbkyenv">
                <input className="form-control mb-3" type="text" name="first_name" placeholder="Your first name..." />
                <input className="form-control mb-3"  type="text" name="last_name" placeholder="Your last name..." />
                <input className="form-control mb-3" type="text" name="_replyto" placeholder="Your email address..." />
                <textarea className="form-control mb-3" name="message" placeholder="Your message..."></textarea>
                <input className="btn btn-primary" type="submit" value="Send" />

                <input type="hidden" name="_next" value="//loganchester.github.io" />
                <input type="hidden" name="_subject" value="Website Submission" />
                <input type="text" name="_gotcha" style={{ display: "none" }} />
            </form>
        </Layout>
    )
}

export default AboutPage;