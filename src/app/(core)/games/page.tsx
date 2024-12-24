import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const games = [
  {
    name: "Quatio",
    description:
      "Quatio is a game where you have to solve equations to get the highest score.",
    href: "/games/quatio",
    image: "/games/quatio.png",
  },
  {
    name: "Sneeky",
    description: "Sneeky is a remaster of the classic Snake game.",
    href: "/games/sneeky",
    image: "/games/sneeky.png",
  },
];

export default async function Games() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Games</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mx-auto max-w-5xl">
        {games.map((game) => (
          <Card key={game.name} className="flex flex-col justify-between">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{game.name}</CardTitle>
                <Image
                  src={game.image}
                  alt={game.name}
                  width={32}
                  height={32}
                />
              </div>
              <CardDescription>{game.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button asChild>
                <Link href={game.href}>Play now</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}