import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const PaginationWrapper = styled.div`
  grid-column: 2 / span 12;
  padding: 3rem 0;
  display: flex;
  align-items: center;
  justify-content: center;

  a:nth-child(2) {
    color: ${props =>
      props.isFirst ? props.theme.colors.dark3 : props.theme.colors.dark1};
    pointer-events: ${props => (props.isFirst ? "none" : "auto")};
    cursor: ${props => (props.isFirst ? "default" : "pointer")};
  }

  a:nth-child(1) {
    color: ${props =>
      props.isLast ? props.theme.colors.dark3 : props.theme.colors.dark1};
    pointer-events: ${props => (props.isLast ? "none" : "auto")};
    cursor: ${props => (props.isLast ? "default" : "pointer")};
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`

export const PostPaginationWrapper = styled.div`
  display: flex;
  grid-column: 4 / span 8;
  padding: 0 10%;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  @media ${props => props.theme.breakpoints.mobile} {
    grid-column: 2 / span 6;
    padding: ${props =>
      `${props.theme.spacings.medium} ${props.theme.spacings.medium}`};
  }
`

export const PaginationElement = styled(props => <Link {...props} />)`
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: 400;
  text-decoration: none;
  margin: 0 2rem;
  color: ${props => props.theme.colors.dark2};

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`
