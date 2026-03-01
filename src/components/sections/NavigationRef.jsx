import "../../styles/components/sections/_navigationref.scss";

function NavigationRef({ variant = "default" }) {
  return (
    <div
      className={`navigationref container flex-row navigationref--${variant} `}
    >
      <a href="">Home</a>
      <p>&rsaquo;</p>
      <a href="">Dog</a>
      <p>&rsaquo;</p>
      <a href="">Small Dog</a>
    </div>
  );
}

export default NavigationRef;
