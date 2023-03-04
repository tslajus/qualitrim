/// <reference types="vite/client" />

interface PageContextTypes {
  portSize: {
    mobile: string;
    tabPort: string;
    tabLand: string;
    desktopSmall: string;
    desktopBig: string;
  };
  navLinks: { id: string; name: string }[];
}
