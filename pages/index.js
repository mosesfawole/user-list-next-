import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        omnis! Soluta totam sunt saepe, sapiente ipsa atque similique dolor
        dolore repellendus! Illum provident deleniti vero beatae similique quam
        cupiditate eos.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        omnis! Soluta totam sunt saepe, sapiente ipsa atque similique dolor
        dolore repellendus! Illum provident deleniti vero beatae similique quam
        cupiditate eos.
      </p>

      <Footer />
    </div>
  );
}
