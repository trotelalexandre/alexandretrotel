import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  BOARD_SIZE,
  DASH_BOOST_DURATION,
} from "@/data/games/sneeky/parameters";
import { useSneeky } from "@/hooks/games/sneeky/use-sneeky";

export default function Game() {
  const {
    snake,
    gameOver,
    setGameOver,
    score,
    isOnSnake,
    activeItems,
    startTime,
    endTime,
    init,
    setInit,
    duration,
    highestScore,
    resetGame,
    dash,
    dashDuration,
    dashDelay,
  } = useSneeky();

  const handlePlay = () => {
    setInit(false);
    setGameOver(false);
    resetGame();
  };

  if (init || gameOver) {
    return (
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-lg font-semibold">{gameOver && "Game Over!"}</h2>
        <div className="flex flex-col gap-1">
          {!init && <p>Score: {score}</p>}
          <p>Highest Score: {highestScore > score ? highestScore : score}</p>
          {!init && (
            <p>
              Duration:{" "}
              {endTime
                ? `${Math.floor(
                    (endTime.getTime() - startTime.getTime()) / 1000,
                  )} seconds`
                : "N/A"}
            </p>
          )}
        </div>
        <Button className="mt-4" onClick={() => handlePlay()}>
          {gameOver ? "Restart" : "Start"}
        </Button>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-4">
        <div
          className="mb-4 grid gap-1"
          style={{
            gridTemplateRows: `repeat(${BOARD_SIZE}, minmax(0, 1fr))`,
            gridTemplateColumns: `repeat(${BOARD_SIZE}, minmax(0, 1fr))`,
          }}
        >
          {Array.from({ length: BOARD_SIZE * BOARD_SIZE }, (_, i) => {
            const x = Math.floor(i / BOARD_SIZE);
            const y = i % BOARD_SIZE;
            const isSnake = isOnSnake(snake, [x, y]);
            const item = activeItems.find(
              (item) => item.position[0] === x && item.position[1] === y,
            );

            return (
              <div
                key={i}
                className={`flex aspect-square items-center justify-center rounded-sm ${
                  isSnake
                    ? "bg-green-500"
                    : item?.type === "apple"
                      ? "bg-red-500"
                      : item?.type === "goldApple"
                        ? "bg-yellow-500"
                        : "bg-muted"
                }`}
              >
                {isSnake && <span className="text-sm">🐍</span>}
                {item?.type === "apple" && <span className="text-sm">🍎</span>}
                {item?.type === "goldApple" && (
                  <span className="text-sm">🌟</span>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-2">
          <div>
            <p className="text-center text-lg font-semibold">Score: {score}</p>
            <p className="text-center text-lg font-semibold">
              Length: {snake.length}
            </p>
            <p className="text-center text-lg font-semibold">
              Duration: {duration} second{duration > 1 && "s"}
            </p>
            {dashDelay && (
              <div>
                <p className="animate-pulse text-center text-lg font-semibold">
                  Dash disabled
                </p>
              </div>
            )}
            {dash && (
              <div className="flex flex-col gap-2">
                <p className="text-center text-lg font-semibold">
                  Dash {dashDuration / 1000}s
                </p>
                <Progress
                  value={
                    ((DASH_BOOST_DURATION - dashDuration) /
                      DASH_BOOST_DURATION) *
                    105
                  }
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
