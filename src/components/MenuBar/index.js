import React from "react"
import * as S from "./styled"

import styled from "styled-components"
import { Home } from "styled-icons/boxicons-solid/Home"
import { Search } from "styled-icons/boxicons-regular/Search"
import { Lightbulb as Theme } from "styled-icons/fa-regular/Lightbulb"
import { Grid } from "styled-icons/boxicons-solid/Grid"
import { ToTop as Top } from "styled-icons/boxicons-solid/ToTop"

const MenuBar = () => (
  <S.MenuBarWraper>
    <S.MenuBarGroup>
      <S.MenuBarLink to="/">
        <S.MenuBarItem title="Back to Home">
          <Home />
        </S.MenuBarItem>
      </S.MenuBarLink>

      <S.MenuBarLink to="/search">
        <S.MenuBarItem title="Search">
          <Search />
        </S.MenuBarItem>
      </S.MenuBarLink>
    </S.MenuBarGroup>

    <S.MenuBarGroup>
      <S.MenuBarItem title="Switch Theme">
        <Theme />
      </S.MenuBarItem>
      <S.MenuBarItem title="Switch Visualization">
        <Grid />
      </S.MenuBarItem>
      <S.MenuBarItem title="Move to Top">
        <Top />
      </S.MenuBarItem>
    </S.MenuBarGroup>
  </S.MenuBarWraper>
)

export default MenuBar
