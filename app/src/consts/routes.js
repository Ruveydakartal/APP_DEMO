const ROUTES = {
  home: "/home",
  notFound: "*",
  login: "/login",
  register: "/register",
  forSale: "/for-sale",
  forRent: "/for-rent",
  detail: { path: "/detail/:id", to: "/detail/" },
  offices: "/offices",
  profile: "/profile",
  favorites: "/favorites",
};

export default ROUTES;
