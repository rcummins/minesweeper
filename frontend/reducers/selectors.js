export const selectScoreByUsername = (scores, username) => {
  const id = Object.keys(scores).find( id => scores[id].username === username);
  return scores[id];
};

export const usernameOnScoreboard = (scores, username) => {
  const allUsernames = Object.keys(scores).map( id => scores[id].username );
  return allUsernames.includes(username);
};
