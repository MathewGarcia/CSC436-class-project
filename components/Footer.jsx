import cargoBlack from "../images/zip/cargo-black.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="barge mx-auto flex justify-between items-center">
      <p className="h2">Copyright 2023</p>
      <Image src={cargoBlack} alt={"LinkBarge"} height="37" width="44" />
    </footer>
  );
};
export default Footer;
