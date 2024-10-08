var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;
  let doubleS = s + s;
  if (doubleS.includes(goal)) return true;
  else return false;
};
