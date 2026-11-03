/* Estado de "Mi vehículo" y "Mi lista" (cotización). Se guarda en este navegador. */
import { useSyncExternalStore } from "react";

export type ItemLista = { id: string; nombre: string; marca: string | null };
export type Vehiculo = { marca: string; modelo: string; anio: string; motor: string };
type Estado = { vehiculo: Vehiculo | null; lista: ItemLista[] };

const CLAVE = "blessing-cotizacion";
const VACIO: Estado = { vehiculo: null, lista: [] };

function leer(): Estado {
  if (typeof window === "undefined") return VACIO;
  try {
    const raw = window.localStorage.getItem(CLAVE);
    return raw ? { ...VACIO, ...(JSON.parse(raw) as Estado) } : VACIO;
  } catch {
    return VACIO;
  }
}

let estado: Estado = leer();
const oyentes = new Set<() => void>();

function emitir(next: Estado) {
  estado = next;
  try {
    window.localStorage.setItem(CLAVE, JSON.stringify(next));
  } catch {
    /* sin almacenamiento disponible: el estado sigue en memoria */
  }
  oyentes.forEach((f) => f());
}

const suscribir = (f: () => void) => {
  oyentes.add(f);
  return () => oyentes.delete(f);
};
const obtener = () => estado;

export const useCotizacion = () => useSyncExternalStore(suscribir, obtener, obtener);

export const guardarVehiculo = (v: Vehiculo) => emitir({ ...estado, vehiculo: v });
export const quitarVehiculo = () => emitir({ ...estado, vehiculo: null });

export const estaEnLista = (id: string) => estado.lista.some((i) => i.id === id);
export const alternarEnLista = (item: ItemLista) =>
  emitir({
    ...estado,
    lista: estaEnLista(item.id) ? estado.lista.filter((i) => i.id !== item.id) : [...estado.lista, item],
  });
export const quitarDeLista = (id: string) => emitir({ ...estado, lista: estado.lista.filter((i) => i.id !== id) });
export const vaciarLista = () => emitir({ ...estado, lista: [] });
