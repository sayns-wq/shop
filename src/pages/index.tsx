import { Inter } from "next/font/google";
import Header from "@/modules/Header";
import Main from "./Main/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}
