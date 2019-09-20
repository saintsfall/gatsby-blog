import React from "react"

import Profile from "../Profile"
import SocialLinks from "../SocialLinks"
import MenuLinks from "../MenuLinks"

import * as S from "./styled"

const Sidebar = () => (
  <S.SidebarWraper>
    <Profile />
    <SocialLinks />
    <MenuLinks />
  </S.SidebarWraper>
)

export default Sidebar
