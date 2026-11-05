import type { ReactNode } from "react";
import "./RedCheckbox.css";

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  children?: ReactNode;
};

/** Checkbox animado en rojo de marca. El contenido (children) se muestra junto a la caja. */
export default function RedCheckbox({ checked, onChange, className = "", children }: Props) {
  return (
    <label className={`rc-label ${className}`.trim()}>
      <input
        type="checkbox"
        className="rc-input"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="rc-box" aria-hidden="true">
        <svg viewBox="0 0 18 18">
          <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z" />
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </span>
      {children}
    </label>
  );
}
