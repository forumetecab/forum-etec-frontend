import React from "react";
import photosData2023 from "src/data/photos2023";
import { ArrowLeft, Camera, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Images from "./Images";
import * as S from "./gallery.styled";
import {Button, Tag} from "@interface/index";

const photosData = [photosData2023];

const Gallery = () => {
  const nav = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState("");

  const handleOpen = (src: string) => {
    setSelected(src);
    setOpen(true);
  };

  const handleClose = (e: React.MouseEvent) => {
    if (e.target instanceof HTMLDivElement) {
      setOpen(false);
    }
  };

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <S.Container>
      <S.Header>
        <Button.Root variant="secondary" onClick={() => nav(-1)}>
          <Button.Icon>
            <ArrowLeft />
          </Button.Icon>
        </Button.Root>

        <Tag.Root size="xl">
          <Tag.Icon>
            <Camera />
          </Tag.Icon>
          <Tag.Text>Galeria</Tag.Text>
        </Tag.Root>
      </S.Header>

      <S.Content>
        <Video />
        {photosData.map((d) =>
          d.map((p) => (
            <S.Day key={p.day}>
              <Tag.Root size="lg">
                <Tag.Text>{p.day === "2022" ? "2022" : p.day + "/09"}</Tag.Text>
              </Tag.Root>
              {p.events.map((e) => (
                <S.EventDay key={e.thematic}>
                  <Tag.Root type="tag" size="sm">
                    <Tag.Text>{e.thematic}</Tag.Text>
                  </Tag.Root>
                  <Images images={e.photos} handleOpen={handleOpen} />
                </S.EventDay>
              ))}
            </S.Day>
          )),
        )}
      </S.Content>

      {open && (
        <S.Modal onClick={handleClose}>
          <S.ModalContent>
            <Button.Root
              onClick={() => setOpen(false)}
              style={{
                gridArea: "1 / -1",
                zIndex: 2,
                width: "fit-content",
                alignSelf: "start",
                justifySelf: "end",
                margin: "0.5rem",
              }}
            >
              <Button.Icon>
                <X strokeWidth={3} />
              </Button.Icon>
            </Button.Root>
            <S.ImageModal src={selected} />
          </S.ModalContent>
        </S.Modal>
      )}
    </S.Container>
  );
};

const Video = () => {
  return (
    <div>
      <div
        style={{
          position: "relative",
          padding: "56% 0 0 0",
          borderRadius: "0.5rem",
          overflow: "hidden",
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/874879937?badge=1&title=0&sidedock=0&amp;autoplay=1&amp;quality_selector=1&amp;progress_bar=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          loading="lazy"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
          }}
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
};

export default Gallery;
