export const scoresArray = ({ scores }) => (
  Object.keys(scores).map( id => scores[id] )
);

export const scoresArraySorted = state => {
  const unsorted = scoresArray(state);
  return unsorted.sort( (a, b) => a.time_elapsed - b.time_elapsed );
}

export const selectScoreByUsername = (scores, username) => {
  const id = Object.keys(scores).find( id => scores[id].username === username);
  return scores[id];
};

export const usernameOnScoreboard = (scores, username) => {
  const allUsernames = Object.keys(scores).map( id => scores[id].username );
  return allUsernames.includes(username);
};
