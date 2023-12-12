import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";
import "../styles/index.scss";

type Props = {}

type Tabs = "private-sessions" | "functional-technique" | "cranial-sacral-rhythm" | "bc-legislation";

const HomePage: React.FC<Props> = () => {
    const [activeTab, setActiveTab] = React.useState<Tabs>("private-sessions");


    return (
        <Layout title="About">
            <div className="row">
                <div className="col-12">
                    <StaticImage
                        src="../images/profile-edited.jpg"
                        alt="Image - Howard Dieno headshot"
                        className="rounded float-sm-end ms-sm-3 mb-3"
                        width={200}
                    />
                    <p>
                        Welcome to my tiny corner of the web!
                    </p>
                    <p>
                        I grew up in Victoria, BC. During high school, I mixed
                        my passion for academics with music while I spent four years
                        performing in the Victoria High School Rhythm and Blues Band.
                        Additionally, I formed many small bands and even released an EP.
                    </p>
                    <p>
                        Following high school, I took a year off to travel. During this time,
                        I visited over 20 countries! I am getting close to 30 now. Have a look
                        through my travel blog.
                    </p>
                    <p>
                        My next adventure required me to move across Canada to attend
                        school at the Univeristy of Toronto and persue a degree in
                        Computer Science, specializing in Software Engineering.
                    </p>
                    <p>
                        After graduating with honours, I began working as a Software
                        Engineer for Bitformations, a job I currently hold. At Bitformations, I
                        work on custom Web Applications for a variety of clients.
                    </p>
                </div>
            </div>
        </Layout >
    )
}

export default HomePage;