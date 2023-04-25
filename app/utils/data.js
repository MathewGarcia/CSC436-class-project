const getCurrentUser = () => {
  return {
    id: 1,
    email: "leon6496@gmail.com",
    name: "Mathew Garcia",
    bio: "I like turtles....",
    avatar: "https://placebear.com/200/200",
  };
};

const getLinks = (userId) => {
  return [
    {
      id: 1,
      userId: 1,
      url: "https://twitter.com/martinfowler?lang=en",
      order: 1,
      linkType: "social",
      title: "twitter",
    },
    {
      id: 2,
      userId: 1,
      url: "https://facebook.com/foobar",
      order: 2,
      linkType: "social",
      title: "facebook",
    },
    {
      id: 3,
      userId: 1,
      url: "https://mycompany.com",
      order: 1,
      linkType: "link",
      title: "My Company!",
    },
    {
      id: 4,
      userId: 1,
      url: "https://myteam.com",
      order: 1,
      linkType: "link",
      title: "Go Sportsball Go",
    },
  ];
};

const getSocialLinks = (userId) => {
  return getLinksFiltered(userId, "social");
};

const getLinksFiltered = (userId, by) => {
  if (!["social", "link"].includes(by)) {
    return false;
  }

  return getLinks()
    .filter(({ linkType }) => linkType === by)
    .sort((a, b) => a.order - b.order);
};

const getLinkLinks = (userId) => {
  return getLinksFiltered(userId, "link");
};

export { getLinkLinks, getSocialLinks, getCurrentUser };
