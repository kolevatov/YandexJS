/**
 * @param {String[]} hashtags
 * @returns {String}
 */

module.exports = function (hashtags) {
  var results = [];

    hashtags.forEach(processTag);

  function processTag(tag, index){
    if (results.includes(tag.toLowerCase()) === false) {
      results.push(tag.toLowerCase());
    }
  }

  return results.join(', ');
};
