import Link from "next/link";
import { Plushie } from "../types/plushie";

type Props = {
  plushie: Plushie;
};

export default function PlushieCard({ plushie }: Props) {
  return (
    <div className="plushie-card">
      <img src={plushie.image} alt={plushie.name} />
      <p></p>
      <Link href={`/plushies/${plushie.id}`}>{plushie.name}</Link>
    </div>
  );
}