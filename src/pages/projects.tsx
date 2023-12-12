import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import "../styles/index.scss";
import { projects } from "../data/projects";
import Layout from "../components/layout";

type Props = {
    data: any;
}

const ResourcesPage: React.FC<Props> = ({ data }) => {
    return (
        <Layout title="Projects">
            <div className="row">
                <div className="col-12">
                    <div className="accordion accordion-flush" id="project-accordion">
                        {projects.map((project, i) => {
                            const image = data.allFile.edges.find((image: any) => image.node.relativePath.includes(project.image));
                            return <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${i}`} aria-expanded="true" aria-controls={`collapse${i}`}>
                                        {project.title}
                                    </button>
                                </h2>
                                <div id={`collapse${i}`} className={`accordion-collapse collapse${!i ? " show" : ""}`} data-bs-parent="#project-accordion">
                                    <div className="accordion-body">
                                        <div className="row">
                                            {image &&
                                                <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
                                                    <GatsbyImage image={image?.node.childrenImageSharp[0].gatsbyImageData} alt={`Image - ${project.title}`} />
                                                </div>
                                            }
                                            <div className={`col-12${image ? " col-md-8" : ""}`}>
                                                {project.content.map(c => {
                                                    return <p>
                                                        {c}
                                                    </p>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ResourcesPage;

export const query = graphql`
    query {
        allFile(filter: {
            extension: {regex: "/(jpg)|(jpeg)|(png)/"},
            relativePath: {regex: "/projects/"}
        })
        {
          edges {
            node {
                childrenImageSharp {
                    gatsbyImageData(
                      width: 200,
                      placeholder: DOMINANT_COLOR
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                  relativePath,
                  id
            }
          }
        }
    }
`