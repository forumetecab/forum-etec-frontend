import React from "react";
import * as S from "../home.styled";
import logoEvento from "@asset/logo-evento.jpeg";

const Header = () => {
  return (
    <>
      <div
        className="player"
        style={{ padding: "56% 0 0 0", position: "relative" }}
      >
        <iframe
          src="https://player.vimeo.com/video/873147524?badge=1&title=0&sidedock=0&amp;autoplay=1&amp;quality_selector=1&amp;progress_bar=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay"
          loading="lazy"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title="II Forum Tecnologico ETEEC"
        ></iframe>
      </div>
      <S.LogoContainer>
        <S.Logo src={logoEvento} />
      </S.LogoContainer>
    </>
  );
};

export default Header;
