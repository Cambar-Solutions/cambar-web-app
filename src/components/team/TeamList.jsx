import { TeamBadge } from "./TeamBadge";

export function TeamList({ members }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {members.map((member) => (
        <TeamBadge key={member.id} member={member} />
      ))}
    </div>
  );
}
