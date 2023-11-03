"use client";

import { useRouter } from "next/navigation";

type Props = {
  rounds: string[];
  leagueId: string;
  actualRound: string;
  leagueName: string;
};

function RoundSelector({ rounds, leagueId, actualRound, leagueName }: Props) {
  const router = useRouter();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(
      `/games/${leagueName}/${Number(leagueId)}/${event.target.value}`
    );
  };
  return (
    <>
      <label htmlFor="rounds" className="px-4 font-bold">
        Round number:
      </label>
      <select
        name="rounds"
        id="rounds"
        value={actualRound}
        onChange={handleSelectChange}
        className="border-2 border-black"
      >
        {rounds.map((round, index) => (
          <option key={index}>{round}</option>
        ))}
      </select>
    </>
  );
}

export default RoundSelector;
