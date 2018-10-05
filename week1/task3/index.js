/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    var hours_new = Math.floor((hours * 60 + minutes + interval) / 60) % 24;
    var min_new = (hours * 60 + minutes + interval) % 60;

    return String(hours_new).padStart(2, '0') + ':' + String(min_new).padStart(2, '0');
};
