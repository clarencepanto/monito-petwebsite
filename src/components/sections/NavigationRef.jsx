import "../../styles/components/sections/_navigationref.scss";

function NavigationRef({ variant = "default", a, b, c, d }) {
  return (
    <div className={` container flex-row navigationref--${variant} `}>
      <a href="">{a}</a>
      <p className="navrefchevright">&rsaquo;</p>
      <a href="">{b}</a>
      <p className="navrefchevright">&rsaquo;</p>
      <a href="">{c}</a>
      <p className="navrefchevright">&rsaquo;</p>
      <a href="">{d}</a>
    </div>
  );
}

export default NavigationRef;
