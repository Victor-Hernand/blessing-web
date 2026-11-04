/** Define una vez el clip squircle usado por los iconos sociales (referenciado como url(#squircleClip)). */
export default function SquircleDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden="true">
      <defs>
        <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
          <path d="M 0,0.5 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5" />
        </clipPath>
      </defs>
    </svg>
  );
}
