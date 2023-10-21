import React from "react";
import * as S from "../home.styled";
import Tag from "src/interfaces/Tag";
import { Clock, MapPin, User } from "lucide-react";
import Button from "src/interfaces/Button";
import { useNavigate } from "react-router-dom";

interface Props {
  e: IEvent;
}

const EventCard = ({ e }: Props) => {
  const nav = useNavigate();
  return (
    <S.Event key={e.thematic}>
      <Tag.Root type="title" size="lg">
        <Tag.Text>{e.thematic}</Tag.Text>
      </Tag.Root>
      <S.EventLoc>
        <MapPin />
        <S.EventLocText>{e.local}</S.EventLocText>
      </S.EventLoc>
      <S.EventProgram>
        {e.activities.map((a) => (
          <S.EventItem key={a.title}>
            {a.time && (
              <Tag.Root size="sm">
                <Tag.Icon>
                  <Clock size={16} />
                </Tag.Icon>
                <Tag.Text>{a.time}</Tag.Text>
              </Tag.Root>
            )}
            <S.EventItemTitle>{a.title}</S.EventItemTitle>
            {a.speaker && (
              <Tag.Root size="sm">
                <Tag.Icon>
                  <User size={16} />
                </Tag.Icon>
                <Tag.Text>Palestrantes</Tag.Text>
              </Tag.Root>
            )}
            {a.speaker && (
              <S.EventItemGuests>
                {a.speaker?.map((s) => <p key={s}>{s}</p>)}
              </S.EventItemGuests>
            )}
          </S.EventItem>
        ))}
      </S.EventProgram>
      <Button.Root
        disabled
        onClick={() =>
          nav("/inscricao", {
            state: { day: e.day, thematic: e.thematic },
          })
        }
      >
        <Button.Text>Inscrições encerradas</Button.Text>
      </Button.Root>
    </S.Event>
  );
};

export default EventCard;
