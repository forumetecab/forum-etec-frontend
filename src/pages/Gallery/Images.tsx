import React from "react";
import * as S from "./gallery.styled";
import Button from "src/interfaces/Button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  images: string[];
  handleOpen: (i: string) => void;
}

const Images = ({ images, handleOpen }: Props) => {
  const qnty = 6;
  const [activeImages, setActiveImages] = React.useState(images.slice(0, qnty));
  const [index, setIndex] = React.useState(qnty);
  const [page, setPage] = React.useState(1);

  const handleNext = () => {
    if (index >= images.length) return;
    const start = index;
    const end = index + qnty;

    setActiveImages(() => images.slice(start, end));
    setIndex((prev) => prev + qnty);
    setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (page === 1) return;
    const start = index - qnty;
    const end = index;

    setActiveImages(() => images.slice(start - qnty, end - qnty));
    setIndex((prev) => prev - qnty);
    setPage((prev) => prev - 1);
  };

  return (
    <>
      <S.Images>
        {activeImages.map((i, index) => (
          <S.Image
            loading="lazy"
            decoding="async"
            src={i}
            onClick={() => handleOpen(i)}
            key={index}
          />
        ))}
      </S.Images>
      <S.ButtonWrapper>
        <Button.Root onClick={handlePrev} disabled={page === 1}>
          <Button.Icon>
            <ArrowLeft />
          </Button.Icon>
        </Button.Root>

        <Button.Root onClick={handleNext} disabled={index >= images.length}>
          <Button.Icon>
            <ArrowRight />
          </Button.Icon>
        </Button.Root>
      </S.ButtonWrapper>
    </>
  );
};

export default Images;
