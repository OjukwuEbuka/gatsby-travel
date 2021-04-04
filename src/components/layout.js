import * as React from "react"

import Header from "./Head.js"
import Footer from "./Footer.js"
import { GlobalStyle } from "./styles/GlobalStyles.js"

const Layout = ({ children }) => {
  
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
