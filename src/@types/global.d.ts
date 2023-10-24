interface IEvent {
  day: TypeDays;
  thematic: TypeEvents;
  local: TypeLocals;
  activities: {
    time: string;
    title: string;
    speaker: string[] | null;
  }[];
}

interface IGallery {
  day: TypeDays | "2022";
  events: {
    thematic: TypeEvents | "2022"
    photos: string[];
  }[];
}

type TypeDays = "25" | "26" | "27" | "28" | "29";
type TypeEvents = "Administração" | "Edificações" | "Turismo" | "Informática" | "Enfermagem"
type TypeLocals = "Auditório alternativo (1° andar)" | "Auditório principal (quadra)"

declare module "*.jpg";
declare module "*.jpeg";
