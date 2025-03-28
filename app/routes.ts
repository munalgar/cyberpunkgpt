import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("profile", "routes/profile.tsx"),
  route("characters", "routes/characters/index.tsx"),
  route("characters/:characterId", "routes/characters/character.tsx"),
  route("about", "routes/about.tsx"),
] satisfies RouteConfig;
