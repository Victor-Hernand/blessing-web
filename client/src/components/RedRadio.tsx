import type { ReactNode } from "react";
import "./RedRadio.css";

type Props = {
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
  className?: string;
  children?: ReactNode;
};

/** Radio animado en rojo de marca. El contenido (children) se muestra junto al círculo. */
export default function RedRadio({ name, value, checked, onChange, className = "", children }: Props) {
  return (
    <label className={`rr-label ${className}`.trim()}>
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="rr-input" />
      <span className="rr-selector" aria-hidden="true" />
      {children}
    </label>
  );
}
