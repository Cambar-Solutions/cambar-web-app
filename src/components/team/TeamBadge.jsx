import { Avatar } from "../ui/Avatar";

export function TeamBadge({ member }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-full">
      <Avatar src={member.avatar} alt={member.name} />
      <span className="text-sm font-medium">{member.name}</span>
    </div>
  );
}
