import Link from "next/link";
import { Plushie } from "../types/plushie";

type Props = {
  plushie: Plushie;
};

export default function PlushieCard({ plushie }: Props) {
  return (
    <div className="plushie-card">
      <Link href={`/plushies/${plushie.id}`}>
        <img
          src={plushie.image}
          alt={plushie.name}
        />
      </Link>

      <Link className="plushie-link" href={`/plushies/${plushie.id}`}>
        <p>{plushie.name}</p>
      </Link>
    </div>
  );
}
