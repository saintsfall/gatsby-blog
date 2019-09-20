import React from "react"

import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      slug="/slug/"
      background="hotpink"
      category="misc"
      date="20 de setembro de 2019"
      timeToRead="4"
      title="Meu primeiro blog post usando Gatsby"
      description="Aqui esta a minha segunda tentativa de colocar um blog no ar, a primeira tentativa na verdade era baseada num teaser de um curso e muito rudimentar pra ser colocada no ar."
    />
  </Layout>
)

export default IndexPage
