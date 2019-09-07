import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function PageTemplate({ data: { mdx } }) {
  return (
    <div>
      <h1>{mdx.frontmatter.title}</h1>
      <p>Excerpt: {mdx.excerpt}</p>
      <p>Description (field): {mdx.fields.description}</p>
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      fields {
        description
      }
      excerpt
      frontmatter {
        title
      }
    }
  }
`