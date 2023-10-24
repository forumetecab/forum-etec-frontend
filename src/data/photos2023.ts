import adm26 from "@asset/gallery/2023/adm-26";
import enf28 from "@asset/gallery/2023/enf-28";
import i2022 from "@asset/gallery/2022";
import edf27 from "@asset/gallery/2023/edf-27";
import tur27 from "@asset/gallery/2023/tur-27";
import inf29 from "@asset/gallery/2023/inf-29";

const photosData: IGallery[] = [
  {
    day: "2022",
    events: [
      {
        thematic: "2022",
        photos: [...Object.values(i2022)],
      },
    ],
  },
  {
    day: "26",
    events: [
      {
        thematic: "Administração",
        photos: [...Object.values(adm26)],
      },
    ],
  },
  {
    day: "27",
    events: [
      {
        thematic: "Edificações",
        photos: [...Object.values(edf27)],
      },
    ],
  },
  {
    day: "28",
    events: [
      {
        thematic: "Turismo",
        photos: [...Object.values(tur27)],
      },
      {
        thematic: "Enfermagem",
        photos: [...Object.values(enf28)],
      },
    ],
  },
  {
    day: "29",
    events: [
      {
        thematic: "Informática",
        photos: [...Object.values(inf29)],
      },
    ],
  },
];

export default photosData;
