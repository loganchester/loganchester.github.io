import React from "react";
import "../styles/index.scss";
import Layout from "../components/layout";
import { experience, skills } from "../data/resume";
import resume from "../files/resume.pdf";

type Props = {}

type Tabs = "experience" | "skills";

const ResourcesPage: React.FC<Props> = () => {
    const [activeTab, setActiveTab] = React.useState<Tabs>("experience");

    return (
        <Layout title="Resume">
            <ul className="nav nav-pills nav-fill mb-3">
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === "experience" ? "active" : ""}`}
                        onClick={() => setActiveTab("experience")}
                    >
                        Experience
                    </button>
                </li>
                <li className="nav-item">
                    <button
                        className={`nav-link ${activeTab === "skills" ? "active" : ""}`}
                        onClick={() => setActiveTab("skills")}
                    >
                        Skills
                    </button>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        href={resume}
                        download
                    >
                        Download <i className="fa fa-download"></i>
                    </a>
                </li>
            </ul>

            <div className="row">
                <div className="col-12">
                    {activeTab === "experience" &&
                        <div className="table-responsive">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>Employer</th>
                                        <th>Role</th>
                                        <th>Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {experience.map(e => {
                                        return (
                                            <tr>
                                                <td>{e.company}</td>
                                                <td>{e.role}</td>
                                                <td>{e.duration}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    }

                    {activeTab === "skills" &&
                        <div className="table-responsive">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>Category</th>
                                        <th>Skill</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {skills.map(s => {
                                        return (
                                            <tr>
                                                <td>{s.category}</td>
                                                <td>
                                                    <ul className="list-group list-group-horizontal">
                                                        {s.items.map(i => {
                                                            return (
                                                                <li className="list-group-item">{i}</li>
                                                            )
                                                        })}
                                                    </ul>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            </div>
        </Layout>
    )
}

export default ResourcesPage;