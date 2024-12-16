import localFont from "next/font/local";

export const helveticaNeueLT = localFont({
  src: [
    {
      path: "../../public/fonts/helveticaNeueLT/HelveticaNeueLTPro-BlkCnO.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "../../public/fonts/helveticaNeueLT/HelveticaNeueLTPro-BdCnO.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/helveticaNeueLT/HelveticaNeueLTPro-MdCnO.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/helveticaNeueLT/HelveticaNeueLTPro-LtCnO.otf",
      weight: "300",
      style: "italic",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
});
