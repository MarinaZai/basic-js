const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  let nameDreamTeam = [];
  if (Array.isArray(members) !== true || members === null || members.length === 0 ) {
    return false;
  }
  for (i = 0; i < members.length; i++) {
    members.sort();
    if (typeof members[i] === "string") {
      nameDreamTeam.push(members[i].trim()[0]);
    }
  }
  return nameDreamTeam.join("").toUpperCase().split("").sort().join("");
}

module.exports = {
  createDreamTeam
};
