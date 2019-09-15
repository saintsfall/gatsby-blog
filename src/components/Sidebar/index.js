import React from "react"

import Profile from "../Profile"
import SocialLinks from "../SocialLinks"

import * as S from "./styled"

const Sidebar = () => (
  <S.SidebarWraper>
    <Profile />
    <SocialLinks />
  </S.SidebarWraper>
)

export default Sidebar
