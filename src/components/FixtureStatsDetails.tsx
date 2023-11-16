import StatBar from "./StatBar";

type Props = {
  fixtureId: number | undefined;
};

async function FixtureStatsDetails({ fixtureId }: Props) {
  if (fixtureId) {
    return (
      <>
        <StatBar fixtureId={fixtureId} />
      </>
    );
  } else {
    return <h2>There is no stats for this match</h2>;
  }
}

export default FixtureStatsDetails;
