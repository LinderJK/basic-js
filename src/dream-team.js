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
function createDreamTeam( members) {
  if (!Array.isArray(members)) {
    return false;
  }
  const dreamTeam = members.reduce((result, member) => {
    if (typeof member === 'string') {
      const trimmedMember = member.trim();
      if (trimmedMember.length > 0 ) {
        const firstLetter = trimmedMember.trim().charAt(0).toUpperCase();
        result.push(firstLetter);
      }
    }
    return result;
  }, []);
  return dreamTeam.sort().join('');
}

module.exports = {
  createDreamTeam
};
