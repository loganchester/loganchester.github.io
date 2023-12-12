import path from 'path';
import {data as blogs} from './src/data/blogs';

// ignore bootstrap during production build to avoid document undefined errors
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bootstrap/,
            use: loaders.null(),
          }
        ],
      },
    })
  }
}

exports.createPages = async ({ actions: { createPage } }) => {
  const blogPageTemplate = path.resolve("./src/pages/blogs/template.tsx");

  blogs
  .forEach(blog => {
    createPage({
      path: `/blogs/${blog.id}/`,
      component: blogPageTemplate,
      context: {
        reg: `/${blog.id}/`,
        title: blog.title
      },
    })
  })
}
