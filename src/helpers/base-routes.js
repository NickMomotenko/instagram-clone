export const baseRoutes = {
  base: "/",
  login: "/auth",
  posts: "/posts",
  direct: "/direct",
  stories: "/stories",
  profile: "/profile",
  edit: "/edit",
};

export const authRoutes = {
  create: "create-account",
  forgot: "forgot-password",
};

export const profileEditRoutes = {
  general: `${baseRoutes.profile}${baseRoutes.edit}/general`,
  posts: `${baseRoutes.profile}${baseRoutes.edit}/posts`,
  saved: `${baseRoutes.profile}${baseRoutes.edit}/saved`,
  liked: `${baseRoutes.profile}${baseRoutes.edit}/liked`,
};
