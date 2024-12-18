import localFont from "next/font/local";

export const helveticaNeueLT = localFont({
  src: [
    {
      path: "../../public/fonts/helveticaNeueLT/HelveticaNeueLTPro-BdCnO.otf",
      weight: "700",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
});

export const bdex = localFont({
  src: [
    {
      path: "../../public/fonts/helveticaNeueLT/HelveticaNeueLTPro-BdEx.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-bdex",
  display: "swap",
});
