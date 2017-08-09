const Config = {
  menuItems: [
    {
      name: "Posts",
      link: {
        pathname: "/posts",
        search: "?page=1"
      }
    },
    {
      name: "Admin",
      link: {
        pathname: "/admin",
        search: "?page=all"
      }
    }
  ],
  dateFormat: "MMMM Do ,YYYY"
};

module.exports =  Config;
