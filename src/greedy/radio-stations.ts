type States = Set<string>;
type Stations = Map<string, States>;

function bestStations(stations: Stations, statesNeeded: States): States {
  let finalStations: States = new Set();

  while (statesNeeded.size) {
    let bestStation: string;
    let statesCovered: States = new Set();

    for (const [station, states] of stations) {
      let covered: States = intersect(statesNeeded, states);
      if (covered.size > statesCovered.size) {
        bestStation = station;
        statesCovered = covered;
      }
    }
    statesNeeded = difference(statesNeeded, statesCovered);
    finalStations.add(bestStation);
  }
  return finalStations;
}

function intersect(a: States, b: States): States {
  return new Set(
    [...a].filter(elem => b.has(elem))
  );
}

function difference(a: States, b: States): States {
  return new Set(
    [...a].filter(elem => !b.has(elem))
  );
}

///////////////////////////////////////////////////////////////////////////////

export default function test(): void {
  const stationsObj: Object = {
    kone: new Set(['id', 'nv', 'ut']),
    ktwo: new Set(['wa', 'id', 'mt']),
    kthree: new Set(['or', 'nv', 'ca']),
    kfour: new Set(['nv', 'ut']),
    kfive: new Set(['ca', 'az'])
  };
  const stations = new Map<string, States>(Object.entries(stationsObj));

  let statesNeeded: States = new Set(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);

  console.log(bestStations(stations, statesNeeded));
}
