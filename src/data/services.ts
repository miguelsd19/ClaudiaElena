import { Home, Building2, Palette, PenTool, type LucideIcon } from "lucide-react";

export type Service = { icon: LucideIcon; title: string; desc: string };

export const SERVICES: Service[] = [
  { icon: Home, title: "Arquitectura Residencial", desc: "Viviendas a medida, ampliaciones y remodelaciones." },
  { icon: Building2, title: "Arquitectura Comercial", desc: "Locales, oficinas y showrooms funcionales." },
  { icon: Palette, title: "Interiorismo", desc: "Materiales, mobiliario y ambientación." },
  { icon: PenTool, title: "Planos, Renders y Permisos", desc: "Planos ejecutivos, renders y gestión." },
];
