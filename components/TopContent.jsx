import { getCurrentUser } from "../app/utils/data.js";
import Image from "next/image.js";
const { name, email, avatar } = getCurrentUser();
const TopContent = () => {
  return (
    <div>
      <p className={"barge"}>{name}</p>
      <p className={"barge"}>{email}</p>
      <Image
        className={"barge"}
        src={avatar}
        alt={"avatar picture"}
        height={200}
        width={200}
      />
    </div>
  );
};
export default TopContent;
