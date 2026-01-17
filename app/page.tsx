import TogglePlushies from "./components/TogglePlushies";
import RandomPlushieButton from "./components/RandomPlushieButton";

export default function Home() {
  return (
    <main>
      <header className="banner">
        <img src="/banner.png" alt="Banner" />
      </header>

      <section className="section">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
        </p>
      </section>

      <TogglePlushies />

      <section className="section">
        <p>Having a hard time picking? Click here!
        <RandomPlushieButton />
        </p>
      </section>
    </main>
  );
}
