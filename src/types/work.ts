import { ModalId } from "@/contexts";

export interface Work {
  id: ModalId;
  title: string;
  preview: string;
  technologies: string[];
  pet?: boolean;
  previewType: "desctop" | "mobile";
}
