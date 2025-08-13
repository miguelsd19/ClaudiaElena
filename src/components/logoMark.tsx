import Logo from "../assets/logo.svg?react";

type Props = { className?: string };


export default function LogoMark({
  className = "",
}: Props) {
  return (
    <Logo
      // 50px de alto, ancho auto; color blanco
      className={`h-[200px] w-auto text-white [&_*]:fill-current [&_*]:stroke-current ${className}`}
      style={{ color: "#fff" }} // por si tu SVG hereda por 'currentColor'
    />
  );
}
