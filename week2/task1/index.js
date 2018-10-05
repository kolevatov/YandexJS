/**
 * @param {String} tweet
 * @returns {String[]}
 */

module.exports = function (tweet) {
  var tweets = tweet.split(' ');

  function isHashTag(tweet, index){
    if (tweet.startsWith('#')){
      return true;
    }else {
      return false;
    }
    return true;
  }

  function hashToString(hash, index){
      return hash.substr(1);
  }

  return tweets.filter(isHashTag).map(hashToString);
};
