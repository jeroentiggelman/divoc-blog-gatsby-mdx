import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
  P,
} from "../elements"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "facebook.svg" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
      twitter: file(relativePath: { eq: "twitter.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "instagram.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a
            href="https://www.facebook.com/nathalie.hupin.photographie/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.facebook.publicURL} alt="Facebook logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/nathaliehupin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.linkedin.publicURL} alt="Linkedin logo" />
          </a>
          <a
            href="https://www.instagram.com/nathaliehupin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.instagram.publicURL} alt="Instagram logo" />
          </a>
        </FooterSocialIcons>
        <P size="xSmall" color="dark3">
          © 2020 Nathalie Hupin. Tous droits réservés
        </P>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
