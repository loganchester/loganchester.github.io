import { Link, graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../../components/layout";
import Blog from "../../components/blog";

type Props = {
    pageContext: any;
    data: any
}

const TemplateBlogPage: React.FC<Props> = ({ pageContext, data }) => {
    const imgHz = data.allFile.edges.filter((image: any) => image.node.relativePath.includes('hz')); // only horizontal photos rendered for now

    return (
        <Layout>
            <div className="d-flex align-items-center justify-content-between my-3">
                <h1 className="text-primary">{pageContext.title}</h1>
                <Link className="btn btn-outline-primary" to="/blogs"><span className="fa fa-arrow-left"></span>&nbsp;Back</Link>
            </div>
            <Blog images={imgHz} />
        </Layout>
    )
}

export default TemplateBlogPage;

export const query = graphql`
    query ($reg: String) {
        allFile(filter: {
            extension: {regex: "/(jpg)|(jpeg)|(png)/"},
            relativePath: {regex: $reg}
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