"use client";

import { useRouter } from "next/navigation";
import Select from "react-select";

type Props = {
  rounds: string[];
  leagueId: string;
  actualRound: string;
  leagueName: string;
};

function RoundSelector({ rounds, leagueId, actualRound, leagueName }: Props) {
  const router = useRouter();

  const options = rounds.map((round) => ({ label: round, value: round }));

  const handleSelectChange = (selectedOption: any) => {
    router.push(
      `/games/${leagueName}/${Number(leagueId)}/${selectedOption.value}`
    );
  };

  return (
    <>
      <label htmlFor="rounds" className="px-4 font-bold">
        Round number:
      </label>
      <Select
        options={options}
        value={{ label: actualRound, value: actualRound }}
        onChange={handleSelectChange}
        className="border-2 border-black w-1/4"
      />
    </>
  );
}

export default RoundSelector;
