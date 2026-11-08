var predictPartyVictory = function (senate) {
  let radient = [];
  let dire = [];
  let radiantFront = 0;
  let direFront = 0;

  for (let index = 0; index < senate.length; index++) {
    if (senate[index] === "R") {
      radient.push(index);
    } else {
      dire.push(index);
    }
  }

  while (radiantFront < radient.length && direFront < dire.length) {
    let val1 = radient[radiantFront];
    let val2 = dire[direFront];

    // both senators are consumed from the front this round
    radiantFront++;
    direFront++;

    if (val1 > val2) {
      // Dire acts first, bans Radiant, and re-queues for the next round
      dire.push(val2 + senate.length);
    } else {
      // Radiant acts first, bans Dire, and re-queues for the next round
      radient.push(val1 + senate.length);
    }
  }

  return radiantFront === radient.length ? "Dire" : "Radiant";
};
const hel = predictPartyVictory("RDD");

console.log(hel);
