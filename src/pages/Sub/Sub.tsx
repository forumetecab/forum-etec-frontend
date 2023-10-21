import React from "react";
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import * as S from "./sub.styled";
import subImage from "../../assets/sub.jpeg";
import { Paragraph } from "src/interfaces/Text";
import Tag from "src/interfaces/Tag";
import Input from "src/interfaces/Input";
import Button from "src/interfaces/Button";
import { ArrowLeft } from "lucide-react";
import { useMutation } from "react-query";
import api from "src/services/api";
import { AxiosError } from "axios";
import Slides from "src/interfaces/Slides/Slides";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import { Value } from "node_modules/react-date-picker/dist/esm/shared/types";

interface ISub {
  fullName: string;
  email: string;
  birthday: string;
  day: string;
  thematic: string;
}

const Sub = () => {
  const {
    state: { day, thematic },
  } = useLocation();
  const nav = useNavigate();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [date, setDate] = React.useState<Value>(null);
  const mutation = useMutation({
    mutationKey: ["sub", day, thematic],
    mutationFn: (sub: ISub) => {
      return api.post("/user", sub).then((res) => res.data);
    },
  });

  const selectDate = (e: Value) => {
    setDate(e);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dateValue = date?.toLocaleString().split(",")[0];

    if (mutation.isLoading) return;
    if (!name || !email || !dateValue) return alert("Preencha todos os campos");

    const sub = {
      fullName: name.trim(),
      email: email.trim(),
      birthday: dateValue,
      day,
      thematic,
    };

    mutation.mutate(sub, {
      onSuccess: () => {
        console.log("success");
        nav("/voucher", { state: { name } });
      },
      onError: (e) => {
        console.log("error", e);
        if (e && e instanceof AxiosError) {
          return alert("não foi possível completar a inscrição");
        }
      },
    });
  };

  if (!day || !thematic) return <Navigate to="/" />;
  return (
    <S.Container>
      <S.Image src={subImage} />

      <S.LogoContainer>
        <Tag.Root type="title" size="2xl">
          <Tag.Text>Cadastro</Tag.Text>
        </Tag.Root>
      </S.LogoContainer>

      <S.Content>
        <Button.Root
          variant="secondary"
          onClick={() => nav(-1)}
          style={{ width: "fit-content" }}
        >
          <Button.Icon>
            <ArrowLeft strokeWidth={3} />
          </Button.Icon>
          <Button.Text>Voltar</Button.Text>
        </Button.Root>
        <Paragraph>
          Inscreva-se para garantir sua vaga no Fórum Tecnológico
          Interdisciplinar de 2023!
        </Paragraph>

        <S.Form onSubmit={handleSubmit}>
          <Input.Root>
            <Input.Label htmlFor="name">Nome completo</Input.Label>
            <Input.Field
              id="name"
              required
              placeholder="Digite seu nome completo"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Input.Root>
          <Input.Root>
            <Input.Label htmlFor="email">E-mail institucional</Input.Label>
            <Input.Field
              id="email"
              required
              type="email"
              placeholder="exemplo@etec.sp.gov.br"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Input.Root>
          <Input.Root>
            <Input.Label>Data de nascimento</Input.Label>
            <DatePicker
              onChange={selectDate}
              value={date}
              format="dd/MM/yyyy"
              locale="pt-BR"
              disableCalendar
              tileClassName={"date-picker"}
              required
            />
          </Input.Root>

          <Button.Root disabled={mutation.isLoading}>
            <Button.Text>
              {mutation.isLoading ? "Enviando..." : "Inscrever-se"}
            </Button.Text>
          </Button.Root>
        </S.Form>

        <Slides day="all" />
      </S.Content>
    </S.Container>
  );
};

export default Sub;
