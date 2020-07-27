import React from "react"
import { PostPaginationWrapper, PaginationElement } from "../elements"

export const PostPagination = ({ previous, next }) => {
  return (
    <PostPaginationWrapper>
      {previous === false ? null : (
        <>
          {previous && (
            <PaginationElement to={previous.node.frontmatter.slug}>
              {previous.node.frontmatter.title}
            </PaginationElement>
          )}
        </>
      )}
      <PaginationElement to="/">Home</PaginationElement>
      {next === false ? null : (
        <>
          {next && (
            <PaginationElement to={next.node.frontmatter.slug}>
              {next.node.frontmatter.title}
            </PaginationElement>
          )}
        </>
      )}
    </PostPaginationWrapper>
  )
}
