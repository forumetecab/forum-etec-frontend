import React from "react";
import * as S from "./home.styled";
import { ArrowRightCircle, Calendar, Camera } from "lucide-react";
import {Button, Slides, Tag} from "@interface/index";
import { Paragraph } from "@interface/Text";
import event from "@data/event";
import { useNavigate } from "react-router-dom";
import { days } from "@data/days";
import Loc from "./components/Loc";
import Header from "./components/Header";
import EventCard from "./components/EventCard";

const Home = () => {
  const [selectedDay, setSelectedDay] = React.useState<TypeDays>(days[0].day);
  const nav = useNavigate();

  const dayEvent = React.useMemo(() => {
    const dayEvent = event.filter((e) => e.day === selectedDay);
    return dayEvent;
  }, [selectedDay]);

  return (
    <S.Container>
      <Header />
      <S.Content>
        <Paragraph>
          Faça agora sua inscrição para o 2° Fórum Tecnológico Interdisciplinar
          da ETEC Adolpho Berezin. Confira a programação abaixo!
        </Paragraph>

        <Button.Root
          onClick={() => nav("galeria")}
          variant="secondary"
          style={{ marginTop: "1rem" }}
        >
          <Button.Text>Ver galeria</Button.Text>
          <Button.Icon>
            <Camera />
          </Button.Icon>
        </Button.Root>

        <Tag.Root
          type="title"
          size="lg"
          style={{ marginTop: "2rem", marginBottom: "0.5rem" }}
        >
          <Tag.Icon>
            <Calendar />
          </Tag.Icon>
          <Tag.Text>Programação</Tag.Text>
        </Tag.Root>
        <Paragraph>
          Selecione o dia de sua preferência e confira a programação
        </Paragraph>

        <S.CardWrapper>
          {days.map((d) => (
            <S.Card
              key={d.day}
              onClick={() => setSelectedDay(d.day as TypeDays)}
              data-active={selectedDay === d.day}
            >
              <S.CardDay data-active={selectedDay === d.day}>
                {d.day}/09
              </S.CardDay>
              <S.CardTime data-active={selectedDay === d.day}>
                {d.time}
              </S.CardTime>
            </S.Card>
          ))}
        </S.CardWrapper>
        <Tag.Root size="sm" type="tag" style={{ justifySelf: "end" }}>
          <Tag.Text>Deslize para ver mais</Tag.Text>
          <Tag.Icon>
            <ArrowRightCircle />
          </Tag.Icon>
        </Tag.Root>

        <S.EventContainer>
          {dayEvent.map((e) => (
            <EventCard e={e} key={e.thematic} />
          ))}
        </S.EventContainer>
        <Tag.Root size="sm" type="tag" style={{ justifySelf: "end" }}>
          <Tag.Text>Deslize para ver mais</Tag.Text>
          <Tag.Icon>
            <ArrowRightCircle />
          </Tag.Icon>
        </Tag.Root>
        <Slides day={selectedDay} />
        <Loc />
      </S.Content>
    </S.Container>
  );
};

export default Home;
