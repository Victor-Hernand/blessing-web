import "./CarAnimation.css";

/** Escena decorativa de un auto en movimiento (CSS puro). */
export default function CarAnimation() {
  return (
    <div className="relative h-60 w-full overflow-hidden" aria-hidden="true">
      <div className="car-container">
        <div className="car">
          <div className="window"></div>
          <div className="cargo-details"></div>
          <div className="door"></div>
          <div className="lights"></div>
        </div>
        <div className="wheels wheels1"></div>
        <div className="wheels wheels2"></div>
        <div className="street"></div>
        <div className="post"></div>
      </div>
    </div>
  );
}
