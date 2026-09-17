export type BallEvent = { runsOffBat: number; extraRuns: number; isLegalDelivery: boolean; wicket: boolean };

export function reconstructScore(events: BallEvent[]) {
  return events.reduce((score, event) => ({
    runs: score.runs + event.runsOffBat + event.extraRuns,
    wickets: score.wickets + Number(event.wicket),
    legalBalls: score.legalBalls + Number(event.isLegalDelivery),
  }), { runs: 0, wickets: 0, legalBalls: 0 });
}
