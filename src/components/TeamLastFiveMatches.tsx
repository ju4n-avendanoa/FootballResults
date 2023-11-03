import React from "react";

type Props = {
  matches: string;
};

type MatchResult = "W" | "D" | "L";

function TeamLastFiveMatches({ matches }: Props) {
  const matchResult = {
    W: "bg-green-500",
    D: "bg-yellow-500",
    L: "bg-red-500",
  };

  return (
    <div className="flex justify-center gap-1">
      {matches?.split("").map((match, index) => (
        <article
          key={index}
          className={`w-5 h-5 text-center rounded-sm ${
            matchResult[match as MatchResult]
          }`}
        >
          {match}
        </article>
      ))}
    </div>
  );
}

export default TeamLastFiveMatches;
