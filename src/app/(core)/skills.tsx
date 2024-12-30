"use client";
import "client-only";

import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/skills";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Category, Skills } from "@/types/skills";

interface SkillsProps {
  delay: number;
}

export default function SkillsSection({ delay }: SkillsProps) {
  return (
    <motion.div
      className="flex flex-col"
      layoutId="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <StaticSkillsContent />
    </motion.div>
  );
}

function StaticSkillsContent() {
  const [selectedGroup, setSelectedGroup] = useState<Category | null>(null);

  const filteredSkills: Skills = useMemo(() => {
    if (selectedGroup === null) {
      return skills.flatMap((group) => group.skills);
    }

    return skills
      .filter((group) => group.category === selectedGroup)
      .flatMap((group) => group.skills);
  }, [selectedGroup]);

  return (
    <div>
      <h1 className="text-lg font-semibold">Skills</h1>
      <div className="flex flex-col gap-4">
        <p className="text-sm text-muted-foreground">
          I&apos;ve worked with a variety of technologies and tools. Here are
          some of the skills I&apos;ve picked up along the way in a
          non-exhaustive list.
        </p>

        <div className="flex flex-wrap gap-2">
          <Badge
            className="cursor-pointer"
            variant={selectedGroup === null ? "default" : "outline"}
            onClick={() => setSelectedGroup(null)}
          >
            All
          </Badge>

          {skills
            ?.sort((a, b) => a.category.localeCompare(b.category))
            ?.map((group, groupIndex) => (
              <Badge
                key={groupIndex}
                className="cursor-pointer"
                variant={
                  selectedGroup === group.category ? "default" : "outline"
                }
                onClick={() => setSelectedGroup(group.category)}
              >
                {group.category}
              </Badge>
            ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {filteredSkills
            ?.sort((a, b) => a.skill.localeCompare(b.skill))
            ?.map((item) => {
              if (item?.url) {
                return (
                  <Link key={item.skill} href={item.url} target="_blank">
                    <Badge>
                      {item.skill}
                      <ArrowUpRight size={16} className="ml-1" />
                    </Badge>
                  </Link>
                );
              } else {
                return <Badge key={item.skill}>{item.skill}</Badge>;
              }
            })}
        </div>
      </div>
    </div>
  );
}
