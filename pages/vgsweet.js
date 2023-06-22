import Head from "next/head";
import NavBarVSweet from "@/components/NavBarVSweet";
import VSweet from "@/components/VSweet";
import VSweetRecipies from "@/components/VSweetRecipies";
import VGSweet from "@/components/VGSweet";
import VGSweetRecipies from "@/components/VGSweetRecipies";
import NavBarVGSweet from "@/components/NavBarVGSweet";

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Cookbook </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <NavBarVGSweet />
      </header>

      <main>
        <VGSweet />
        <VGSweetRecipies />
      </main>
    </div>
  );
}
