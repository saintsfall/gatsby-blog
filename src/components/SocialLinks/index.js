import React from "react"

import Icons from "./Icons"
import links from "./content"

import * as S from "./styled"

const SocialLinks = () => (
  <S.SocialLinksWraper>
    <S.SocialLinksList>
      {links.map((link, index) => {
        const Icon = Icons[link.label]

        return (
          <S.SocialLinksItem key={index}>
            <S.SocialLinksLink
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.IconWraper>
                <Icon />
              </S.IconWraper>
            </S.SocialLinksLink>
          </S.SocialLinksItem>
        )
      })}
    </S.SocialLinksList>
  </S.SocialLinksWraper>
)

export default SocialLinks
