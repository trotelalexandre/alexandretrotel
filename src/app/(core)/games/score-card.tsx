import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ScoreCardProps {
  stats: {
    scores: { title: string; values: { label: string; value: number }[] };
    streaks: { title: string; values: { label: string; value: number }[] };
  };
}

const StatSection = ({
  title,
  values,
}: {
  title: string;
  values: { label: string; value: number }[];
}) => (
  <div className="flex flex-col gap-1">
    <p className="text-sm font-semibold">{title}</p>
    <div>
      {values.map((item, index) => (
        <div key={index} className="flex justify-between">
          <span className="text-sm">{item.label}:</span>
          <span className="font-semibold">{item.value}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function ScoreCard({ stats }: ScoreCardProps) {
  return (
    <Card className="mx-auto h-fit w-full grow md:max-w-sm">
      <CardHeader>
        <CardTitle className="text-center text-lg font-semibold">
          Statistics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <StatSection title={stats.scores.title} values={stats.scores.values} />
        <Separator className="my-4" />
        <StatSection
          title={stats.streaks.title}
          values={stats.streaks.values}
        />
      </CardContent>
    </Card>
  );
}
