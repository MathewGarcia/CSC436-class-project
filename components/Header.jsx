import Image from "next/image";
import cargoWhite from "../images/zip/cargo-white.svg";
const Header = () => {
  return (
    <header className="barge bg-black mx-auto flex justify-between items-center">
      <Image src={cargoWhite} alt={"LinkBarge"} height="79" width="79" />
      <p className="h1 text-white">BARGE</p>
    </header>
  );
};
export default Header;
