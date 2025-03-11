import { TeamList } from "./TeamList";

export function TeamSection({ team }) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4 text-center">Nuestro Equipo</h2>
      <TeamList members={team} />
    </div>
  );
}
