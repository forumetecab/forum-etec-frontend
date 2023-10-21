interface IEvent {
  day: TypeDays;
  thematic: "Administração" | "Edificações" | "Turismo" | "Informática";
  local: "Auditório alternativo (1° andar)" | "Auditório principal (quadra)";
  activities: {
    time: string;
    title: string;
    speaker: string[] | null;
  }[];
}

interface IGallery {
  day: TypeDays | "2022";
  events: {
    thematic:
    | "2022"
    | "Administração"
    | "Edificações"
    | "Turismo"
    | "Informática"
    | "Enfermagem";
    photos: string[];
  }[];
}

type TypeDays = "25" | "26" | "27" | "28" | "29";

declare module "*.jpg";
declare module "*.jpeg";
