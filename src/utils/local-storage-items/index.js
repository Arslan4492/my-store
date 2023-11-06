import { memoryStrings } from "../config";

export const encode = (key, data) => {
  if (isBrowser) localStorage.setItem(key, data);
};

export const decode = (key) => {
  if (isBrowser) return localStorage.getItem(key);
};

export const remove = (key) => {
  if (isBrowser) localStorage.removeItem(key);
};

// check if you are on the client (browser) or server
export const isBrowser = () => typeof window !== "undefined";

export const checkAppTheme = () => {
  let theme = decode(memoryStrings.themeToken);

  if (theme && theme === "dark") {
    //add class=dark in html element
    document.documentElement.classList.add("dark");
  } else {
    //remove class=dark in html element
    document.documentElement.classList.remove("dark");
  }

  if (theme === "dark") {
    encode(memoryStrings.themeToken, "light");
  } else {
    encode(memoryStrings.themeToken, "dark");
  }
};
