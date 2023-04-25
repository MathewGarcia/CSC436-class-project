import { getLinkLinks } from "@/app/utils/data";

const links = getLinkLinks();
const NonSocialLinks = () => {
  return (
    <>
      {links.map((link) => {
        return (
          <div key={link.id} className={"barge button"}>
            <a href={link.url}>{link.title}</a>
          </div>
        );
      })}
    </>
  );
};
export default NonSocialLinks;
