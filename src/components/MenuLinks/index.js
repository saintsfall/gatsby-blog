import React from "react"
import * as S from "./styled"
import links from "./content"

const MenuLinks = () => (
  <S.MenuLinksWraper>
    <S.MenuLinksList>
      {links.map((link, index) => (
        <S.MenuLinksItem>
          <S.MenuLinksLink to={link.url} activeClassName="active">
            {link.label}
          </S.MenuLinksLink>
        </S.MenuLinksItem>
      ))}
    </S.MenuLinksList>
  </S.MenuLinksWraper>
)

export default MenuLinks
