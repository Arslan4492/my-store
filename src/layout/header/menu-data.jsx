import { FormattedMessage } from "react-intl";

export const menuData = [
  {
    id: "home",
    title: <FormattedMessage id="home" />,
    path: "/",
    newTab: false,
  },
  {
    id: "men",
    title: <FormattedMessage id="men" />,
    path: "/men-collection",
    newTab: false,
  },
  {
    id: "women",
    title: <FormattedMessage id="women" />,
    path: "/women-collection",
    newTab: false,
  },
  {
    id: "children",
    title: <FormattedMessage id="children" />,
    path: "/children-collection",
    newTab: false,
  },
  {
    id: "winter-collection",
    title: <FormattedMessage id="winter-collection" />,
    newTab: false,
    submenu: [
      {
        id: 41,
        title: <FormattedMessage id="men" />,
        path: "/men-winter-collection",
        newTab: false,
      },
      {
        id: 42,
        title: <FormattedMessage id="women" />,
        path: "/men-winter-collection",
        newTab: false,
      },
      {
        id: 43,
        title: <FormattedMessage id="children" />,
        path: "/children-winter-collection",
        newTab: false,
      },
    ],
  },
];
