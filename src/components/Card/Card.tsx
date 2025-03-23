import { ReactElement } from "react";

interface CardProps {
  children: ReactElement | ReactElement[];
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  // TODO: Check class name order and sorting
  return <div className={`${className} rounded border p-4`}>{children}</div>;
}
