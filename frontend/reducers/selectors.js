export const scoreArray = scores => {
  let scoreIds = Object.keys(scores);
  return scoreIds.map( id => scores[id] );
};
