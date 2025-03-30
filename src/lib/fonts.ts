import { Lexend, Outfit } from "next/font/google";

const primary = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-primary",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const secondary = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-secondary",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const primary_font = primary.variable;
export const secondary_font = secondary.variable;
