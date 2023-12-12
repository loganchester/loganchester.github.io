import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";

type Props = {
    images: any[]
}

const Blog: React.FC<Props> = ({ images }) => {
    return (
        <>
            <div className="row g-3">
                {images.map(image => {
                    return <div className="col-12 col-md-6 col-xl-4">
                        <GatsbyImage image={image?.node?.childrenImageSharp[0]?.gatsbyImageData} alt={image?.id} />
                    </div>
                })}
            </div>
        </>
    )
}

export default Blog;