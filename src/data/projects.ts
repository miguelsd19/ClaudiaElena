import Render1 from '../assets/Render1.png'
import Render2 from '../assets/Render-Terraza.png'
import Cocina from '../assets/Cocina.png'

export type Project = { title: string; category: string; year: string; image: string };

export const PROJECTS: Project[] = [
  { title: "Cabaña Propuesta interior", category: "Residencial", year: "2024",
    image: Render1},
  { title: "Remodelación / Terraza . Roof", category: "Residencial", year: "2023",
    image: Render2 },
  { title: "Loft Lomas", category: "Interiorismo", year: "2025",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1974&auto=format&fit=crop" },
  { title: "Showroom Terra", category: "Comercial", year: "2024",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1974&auto=format&fit=crop" },
  { title: "Casa Patio", category: "Residencial", year: "2022",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1974&auto=format&fit=crop" },
  { title: "Remodelacion cocina", category: "Interiorismo", year: "2023",
    image: Cocina },
];
