import React from "react";
import * as S from "../home.styled";
import Tag from "src/interfaces/Tag";
import { Map, MapPin, School } from "lucide-react";

const Loc = () => {
  return (
    <S.Loc>
      <Tag.Root>
        <Tag.Icon>
          <MapPin />
        </Tag.Icon>
        <Tag.Text>Localização</Tag.Text>
      </Tag.Root>

      <S.LocInfo>
        <Tag.Root size="md" type="tag">
          <Tag.Icon>
            <School />
          </Tag.Icon>
          <Tag.Text>ETEC Adolpho Berezin</Tag.Text>
        </Tag.Root>

        <Tag.Root size="md" type="tag">
          <Tag.Icon>
            <Map />
          </Tag.Icon>
          <Tag.Text>
            Av. Monteiro Lobato, n° 8000 - Bal. Jussara, Mongaguá
          </Tag.Text>
        </Tag.Root>
      </S.LocInfo>
    </S.Loc>
  );
};

export default Loc;
