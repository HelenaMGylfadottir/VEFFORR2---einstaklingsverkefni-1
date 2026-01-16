import plushies from "../data/plushies";
import PlushieCard from "./PlushieCard";

export default function PlushieGrid() {
  return (
    <div className="plushie-grid">
      {plushies.map((plushie) => (
        <PlushieCard key={plushie.id} plushie={plushie} />
      ))}
    </div>
  );
}