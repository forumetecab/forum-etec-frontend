import React from 'react'
import * as S from "./header.styled"
import logoEvento from "../../assets/logo-evento.jpeg"

const Header = () => {
  return (
    <S.Container>
      <img src={logoEvento} style={{ width: "100%" }} />
    </S.Container>
  )
}

export default Header
