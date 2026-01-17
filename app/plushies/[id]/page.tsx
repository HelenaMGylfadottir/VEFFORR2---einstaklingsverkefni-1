import plushies from "../../data/plushies";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PlushiePage({ params }: Props) {
  const { id } = await params;

  const plushie = plushies.find((p) => p.id === id);

  if (!plushie) {
    return <p>Bangsi ekki fundinn.</p>;
  }

  return (
    <main>
      <section className="section two-column">
        <img
          src={plushie.image}
          alt={plushie.name}
          width={200}
          height={200}
        />

        <div>
          <h2>{plushie.name}</h2>
          <h2>────────────────</h2>
          <ul>   
            <li>- Obtained: {plushie.obtained}</li>
            <li>- Fengin: {plushie.age}</li>
            <li>- Staðreynd: {plushie.funFact}</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <p>{plushie.about}</p>
      </section>
    </main>
  );
}
