import Marquee from "react-fast-marquee";

const TituloBannerMove = ({ titulo, pauseOnHover, speed, nameSection }) => {
  return (
    <>
      <Marquee
        className={`tituloBanner ${nameSection ? "nameSection" : ""} `}
        speed={speed}
        gradient={false}
        pauseOnHover={pauseOnHover}
      >
        {titulo && titulo}
      </Marquee>
    </>
  );
};
export default TituloBannerMove;
