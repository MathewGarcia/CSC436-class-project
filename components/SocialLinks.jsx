import { getSocialLinks } from "@/app/utils/data";

const links = getSocialLinks();

const SocialLinks = () => {
  return (
    <>
      {links.map((link) => {
        return (
          <div
            className={"barge mx-auto flex justify-between items-center"} //not going horizontal??
            key={link.id}
          >
            <a href={link.url}>{link.title}</a>
          </div>
        );
      })}
    </>
  );
};
export default SocialLinks;
