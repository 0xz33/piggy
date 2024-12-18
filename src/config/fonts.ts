import localFont from "next/font/local";

export const helveticaNeueLT = localFont({
  src: [
    {
      path: "../../public/fonts/helveticaNeueLT/HelveticaNeueLTPro-BdCnO.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
});
