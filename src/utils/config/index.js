import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const config = {
  fontFamily: `'Ubuntu', sans-serif`,
  locale: "en", // 'en' - English, 'fr' - French, 'ur' - Urdu
  theme: "dark", // light, dark
  token: null,
};

export const appRoutes = {
  dashboard: "/",
  dialPad: "/dial-pad",
  contacts: "/contacts",
  calender: "/calender",
  funnels: "/funnels",
  settings: "/account-settings",
  login: "/sign-in",
  register: "/register",
  support: "/support",
};

export const memoryStrings = {
  authorizationToken: "my-space",
  themeToken: "my-space-theme",
};

export const AppColors = {
  appColor: "#01C0BB",
  appButton: "#fa651c",
  appBlue: "#6184D8",
  appGrey: "#8C8C8C",
  black: "#000000",
  white: "#ffffff",
};

export const isUnRestrictedRoute = (pathname) => {
  const urlPaths = {
    "/sign-in": "/sign-in",
    "/register": "/register",
    "/forgot-password": "/forgot-password",
    "/set-new-password": "/set-new-password",
  };
  return urlPaths[pathname];
};

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const ALLOWED_FILE_TYPES = ["image/png", "image/jpeg", "image/jpg"];

export function validateFileType(type) {
  return ALLOWED_FILE_TYPES.includes(type);
}

export const getNameInitials = (name) =>
  `https://ui-avatars.com/api/?background=983EEF&color=fff&name=${name}`;
