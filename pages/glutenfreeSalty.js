import Head from "next/head";
import image from "next/image";
import NavBar from "../components/NavBar";
import Meat from "../components/Meat";
import Recipe from "../components/Recipe";
import NavBarMeat from "@/components/NavBarMeat";
import MeatRecipies from "@/components/MeatRecipies";
import Kosher from "@/components/Kosher";
import NavBarKosher from "@/components/NavBarKosher";
import KosherRecipies from "@/components/KosherRecipies";
import GlutenFreeSalty from "@/components/GlutenFreeSalty";
import NavBarGlutenFreeSalty from "@/components/NavBarGlutenFreeSalty";
import GlutenFreeSaltyRecipies from "@/components/GlutenFreeSaltyRecipies";

export default function Home() {
  return (
    <div>
      <Head>
        <title>The Cookbook </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <NavBarGlutenFreeSalty />
      </header>

      <main>
        <GlutenFreeSalty />
        <GlutenFreeSaltyRecipies />
      </main>
    </div>
  );
}
