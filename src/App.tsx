import React from "react"
import { Outlet } from "react-router-dom"
import * as S from "./styles/global"
import Header from "./interfaces/Header"
import Footer from "./interfaces/Footer"
import PageScroll from "./interfaces/PageScroll"

function App() {

  return (
    <PageScroll>
      <S.MainContainer>
        <S.Container>
          <Outlet />
        </S.Container>
        <Footer />
      </S.MainContainer>
    </PageScroll>
  )
}

export default App
