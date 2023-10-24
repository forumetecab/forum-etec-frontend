import React from 'react'
import * as S from "./congrats.styled"
import subImage from '@asset/sub.jpeg'
import logoEtec from '@asset/logo-etec.png'
import { Paragraph } from 'src/interfaces/Text'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { Download } from 'lucide-react'
import { toPng } from 'html-to-image'
import {Button, Tag} from "@interface/index";



const Congrats = () => {
  const { state } = useLocation()
  const nav = useNavigate()
  const imageRef = React.useRef<HTMLDivElement>(null)

  const handleImage = () => {
    if (imageRef.current === null) return console.log("error")

    const clientHeight = imageRef.current.clientHeight

    toPng(imageRef.current, { cacheBust: true, backgroundColor: "#fff", height: clientHeight - (clientHeight * 0.15) }).then((dataUrl) => {
      const link = document.createElement('a')
      link.download = '2-forum-tecnologico-interdisciplinar-etec-ab.png'
      link.href = dataUrl
      link.click()
    })
  }

  if (!state) return <Navigate to={"/"} />
  return (
    <S.Container ref={imageRef}>
      <S.Image src={subImage} />

      <S.LogoContainer>
        <S.Logo src={logoEtec} />
      </S.LogoContainer>

      <S.Content>
        <Tag.Root size='xl'>
          <Tag.Text style={{ textAlign: "center" }}>
            Parabéns, {state?.name}! Inscrição realizada com sucesso
          </Tag.Text>
        </Tag.Root>
        <Paragraph>
          Sua inscrição para o 2° Fórum Tecnológico Interdisciplinar da ETEC Adolpho Berezin foi realizada com sucesso!
        </Paragraph>

        <Paragraph>
          Compartilhe esta imagem com seus amigos e familiares para que eles também possam se inscrever!
        </Paragraph>

        <S.ButtonWrapper>
          <Button.Root variant='primary' onClick={handleImage}>
            <Button.Text>Baixar Imagem</Button.Text>
            <Button.Icon><Download /></Button.Icon>
          </Button.Root>
          <Button.Root variant='secondary' onClick={() => nav("/")}>
            <Button.Text>Voltar ao início</Button.Text>
          </Button.Root>
        </S.ButtonWrapper>
      </S.Content>

    </S.Container>
  )
}

export default Congrats
