import styled from "styled-components"
import { Link } from "gatsby"

export const ProfileWraper = styled.section`
  display: flex;
  flex-direction: column;
  color: #ffffff;
`

export const ProfileLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: #cccccc;
  }
`

export const ProfileAuthor = styled.h1`
  margin: 0.5rem auto 1.5rem;
  font-size: 1.6rem;
`

export const ProfilePosition = styled.small`
  display: block;
  font-weight: 300;
  font-size: 1.2rem;
`

export const ProfileDescripton = styled.p`
  line-height: 1.4rem;
  font-weight: 300;
  font-size: 1rem;
`
