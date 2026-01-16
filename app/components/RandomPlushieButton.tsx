"use client";
import { useRouter } from "next/navigation";
import plushies from "../data/plushies";

export default function RandomPlushieButton() {
  const router = useRouter();

  function pickRandom() {
    const random =
      plushies[Math.floor(Math.random() * plushies.length)];
    router.push(`/plushies/${random.id}`);
  }

  return <button onClick={pickRandom}>❤︎⁠</button>;
}