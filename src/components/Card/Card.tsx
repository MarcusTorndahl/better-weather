import { ReactElement } from "react";

interface CardProps {
  children: ReactElement;
}

export default function Card({ children }: CardProps) {
  return <div className="rounded border p-4">{children}</div>;
}
