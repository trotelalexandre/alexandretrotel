import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { features } from "@/data/features";
import { Project } from "@/types/projects";
import { Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectItemProps extends Project {
  showImage?: boolean;
}

export function ProjectItem({
  title,
  description,
  date,
  dateCompleted,
  url,
  image,
  tags,
  status,
  featured,
  showImage,
  icon,
}: ProjectItemProps) {
  return (
    <Card>
      <div className="flex flex-col justify-between w-full h-full">
        <div>
          {showImage && image && (
            <div className="relative w-full h-48">
              <Image
                src={image}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="w-full h-full rounded-t-lg"
              />
            </div>
          )}
          <CardHeader>
            <div className="flex items-center gap-4 justify-between w-full">
              <div className="flex items-center gap-2">
                {icon && (
                  <Image
                    src={icon}
                    alt={title}
                    width={24}
                    height={24}
                    className="rounded-md"
                  />
                )}
                <CardTitle>{title}</CardTitle>
              </div>
              <div className="flex items-center gap-2">
                {featured && <Badge className="text-xs">Featured</Badge>}
                <Badge variant="outline">{status}</Badge>
              </div>
            </div>
            <CardDescription className="text-sm">
              {date.toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              })}{" "}
              - {dateCompleted ? dateCompleted.toDateString() : "Present"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{description}</p>
          </CardContent>
        </div>
        <CardFooter className="w-full">
          <div className="flex flex-col gap-2 w-full">
            {features.canSeeProjectsReadMore && url && (
              <Button asChild size="sm" className="w-fit">
                <Link href={url}>
                  <Info size={16} />
                  Learn more
                </Link>
              </Button>
            )}

            <Separator className="my-2 w-full" />

            <div className="flex flex-wrap gap-2">
              {tags?.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}