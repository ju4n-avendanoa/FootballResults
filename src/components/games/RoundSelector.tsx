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
    <div className="flex flex-col items-center justify-center w-full gap-6 px-8 py-4 md:flex-row">
      <span className="px-4 text-sm font-bold text-white lg:text-lg">
        Round number:
      </span>
      <Select
        options={options}
        value={{ label: actualRound, value: actualRound }}
        onChange={handleSelectChange}
        className="w-full md:w-1/3 lg:w-1/3 max-w-[400px] focus:bg-red-500"
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            border: 0,
            boxShadow: "none",
          }),
          menu: (base) => ({
            ...base,
            width: "100%",
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            background: state.isSelected ? "#38a169" : "white",
            "&:hover": {
              backgroundColor: "rgba(56, 161, 105, 0.5)",
              color: "black",
            },
          }),
        }}
      />
    </div>
  );
}

export default RoundSelector;
