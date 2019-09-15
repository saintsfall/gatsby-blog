import styled from "styled-components"

export const SocialLinksWraper = styled.nav`
  width: 100%;
  margin: 2rem auto;
`

export const SocialLinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style: none;
`

export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: crimson;
  }
`

export const IconWraper = styled.div`
  fill: #bbb;
  width: 30px;
  height: 30px;
`
