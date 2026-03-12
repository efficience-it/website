"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { technologies } from "@/../data/expertise";

const MAX_VISIBLE_TECHNOLOGIES = 16;

export default function TechnologiesGrid() {
  const [showAllTechnologies, setShowAllTechnologies] = useState(false);

  const visibleTechnologies = showAllTechnologies
    ? technologies
    : technologies.slice(0, MAX_VISIBLE_TECHNOLOGIES);

  return (
    <>
      <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {visibleTechnologies.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center gap-2">
            <Image
              src={tech.logo}
              alt={tech.name}
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
            <span className="text-xs font-medium text-dark">{tech.name}</span>
          </div>
        ))}
      </div>
      {!showAllTechnologies && technologies.length > MAX_VISIBLE_TECHNOLOGIES && (
        <div className="mt-8 flex justify-center">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowAllTechnologies(true)}
          >
            Voir plus
          </Button>
        </div>
      )}
    </>
  );
}
