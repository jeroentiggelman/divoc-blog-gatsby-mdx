import React from "react"
import { PaginationWrapper, PaginationElement } from "../elements"

export const Pagination = ({ isFirst, isLast, prevPage, nextPage }) => {
  return (
    <PaginationWrapper isFirst={isFirst} isLast={isLast}>
      <PaginationElement to={nextPage}>Entrées précédentes</PaginationElement>
      <PaginationElement to={prevPage}>Entrées suivantes</PaginationElement>
    </PaginationWrapper>
  )
}
