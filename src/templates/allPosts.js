import React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Content,
  ContentCard,
  FeatureImage,
  Pagination,
  Seo,
} from "../components"
import { H1, P } from "../elements"

const allPosts = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`

  const posts = data.allMdx.edges

  return (
    <Container>
      <Seo />
      <FeatureImage />
      <Content>
        <H1 textAlign="left" margin="0 0 1rem 0">
          Divoc, confinement au jour le jour
        </H1>
        <P color="dark2" textAlign="left" size="medium">
          Même si nous nous y préparions, l’annonce d’un confinement pour
          contrer Corona est tombée comme un couperet auprès de la population
          belge. Bons vivants chaleureux et amicaux, les Belges ont vu avec
          effroi la réduction de leur liberté personnelle, même s’il en allait
          de la survie du collectif. Pour ma part, le confinement ne me pèse pas
          trop, sauf que mes activités professionnelles sont mises en stand-by
          pour une durée indéterminée. En effet, sans prise de vue, pas de
          photos...
        </P>
        {posts.map(post => (
          <ContentCard
            key={post.node.frontmatter.slug}
            date={post.node.frontmatter.date}
            title={post.node.frontmatter.title}
            excerpt={post.node.frontmatter.excerpt}
            slug={post.node.frontmatter.slug}
            image={post.node.frontmatter.featureImage.childImageSharp.fluid}
          />
        ))}
      </Content>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Container>
  )
}

export default allPosts

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "DD/MM/YYYY")
            featureImage {
              childImageSharp {
                fluid(maxWidth: 680) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
