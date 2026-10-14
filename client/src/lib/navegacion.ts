// Los enlaces de ancla (#seccion) solo existen en la home. Desde otras páginas
// se envían a la home con "/#seccion".
export const destino = (href: string) =>
  href.startsWith("#") && window.location.pathname !== "/" ? `/${href}` : href;
