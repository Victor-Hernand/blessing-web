import { Search, X } from "lucide-react";
import "./SearchBar.css";

type Props = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  ariaLabel?: string;
};

/** Buscador en pastilla con acento rojo de marca y botón para limpiar. */
export default function SearchBar({ id, value, onChange, placeholder, ariaLabel }: Props) {
  return (
    <label htmlFor={id} className="sb-search">
      <Search className="sb-search__icon" aria-hidden="true" />
      <input
        id={id}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={ariaLabel}
        autoComplete="off"
        className="sb-search__field"
      />
      {value && (
        <button type="button" onClick={() => onChange("")} aria-label="Limpiar búsqueda" className="sb-search__clear">
          <X className="w-4 h-4" aria-hidden="true" />
        </button>
      )}
    </label>
  );
}
