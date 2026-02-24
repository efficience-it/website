import Image from "next/image";
import { TeamMember } from "@/../data/team";

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="text-center">
      <div className="mx-auto h-32 w-32 overflow-hidden rounded-full bg-light-gray">
        <Image
          src={member.photo}
          alt={member.name}
          width={128}
          height={128}
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="mt-4 font-display text-lg font-bold text-dark">
        {member.name}
      </h3>
      <p className="text-sm text-gray">{member.role}</p>
    </div>
  );
}
