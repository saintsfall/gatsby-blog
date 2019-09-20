import styled from "styled-components"
import { Link } from "gatsby"

export const MenuBarWraper = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  right: 0;
  width: 3.75rem;
  height: 100vh;
  border-left: 3px solid #5a5e77;
  background-color: #44475a;
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuBarLink = styled(Link)`
  display: block;
`

export const MenuBarItem = styled.span`
  display: block;
  position: relative;
  width: 3.75rem;
  height: 3.75rem;
  padding: 1.1rem;
  color: #8899a6;
  cursor: pointer;
  transition: color 0.5s;

  &:hover {
    color: #1fa1f2;
  }
`
