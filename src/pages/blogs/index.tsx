import { Link, graphql } from "gatsby";
import React from "react";
import { data as blogs } from "../../data/blogs";
import Layout from "../../components/layout";
import { GatsbyImage } from "gatsby-plugin-image";

type Props = {
    data: any;
}

const BlogsPage: React.FC<Props> = ({ data }) => {
    return (
        <Layout title="Blogs">
            <div className="row g-3">
                {blogs
                    .sort((a, b) => a.id.localeCompare(b.id))
                    .map(blog => {
                        const coverPhoto = data.allFile.edges.find((edge: any) => edge.node.relativePath.includes(blog.id));
                        return <div className="col-12 col-md-6 col-xl-4">
                            <div className="card">
                                <GatsbyImage image={coverPhoto?.node?.childrenImageSharp[0].gatsbyImageData} alt={`Image - ${blog.title}`} />
                                <div className="card-body bg-light">
                                    <h5 className="card-title text-primary">
                                        {blog.title}
                                    </h5>
                                    <Link to={`/blogs/${blog.id}`} className="btn btn-outline-primary">View</Link>
                                </div>
                            </div>
                        </div>
                    })}
            </div>
        </Layout>
    )
}

export default BlogsPage;
export const query = graphql`
    query {
        allFile(filter: {
            extension: {regex: "/(jpg)|(jpeg)|(png)/"},
            relativePath: {regex: "/cover-photo/"}
        })
        {
          edges {
            node {
                childrenImageSharp {
                    gatsbyImageData(
                      width: 800,
                      height: 500,
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