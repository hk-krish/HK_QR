import { ROUTES } from "../constants";
import { MenuItem } from "../types";

// ********** Sidebar Data **********

export const menuList: MenuItem[] = [
  { id: 1, title: "dashboard", url: ROUTES.HOME, icon: "home", type: "link" },
  { id: 2, title: "dashboard1", url: ROUTES.MANAGE_CHANNELS, icon: "home", type: "link" },
  { id: 3, title: "dashboard2", url: ROUTES.MANAGE_CHANNELS, icon: "home", type: "link" },
  { id: 4, title: "dashboard3", url: ROUTES.MANAGE_CHANNELS, icon: "home", type: "link" },
];
