// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {

// parse command
  var cmd = command.split(' ');

  if (cmd[0] === 'SHOW'){
    return show();
  }

  if (cmd[0] === 'ADD'){
    return add(cmd[1], cmd[2]);
  }

  if (cmd[0] === 'REMOVE_PHONE'){
    return remove(cmd[1]);
  }

// Add contact
  function add(name, phones){
    if (phoneBook.hasOwnProperty(name)){
      // update contact
      phoneBook[name] = phoneBook[name].concat(phones.split(','));
    } else {
      // add contact
      phoneBook[name] = phones.split(',');
    }
    return true;
  }

// remove phone number
  function remove(phoneNumber){
    var keys = Object.keys(phoneBook);

    for (var i = 0; i < keys.length; i++){
        var key = keys[i];
        var value = phoneBook[key];

        var index = value.indexOf(phoneNumber);

        if (index > -1){
          phoneBook[key].splice(index,1);
          return true;
        }
      }
        return false;
}

// show phoneBook
  function show(){
    var keys = Object.keys(phoneBook).sort();
    var showResult = [];

    for (var i = 0; i < keys.length; i++){
        var key = keys[i];
        var value = phoneBook[key];

        if (value.length > 0){
            showResult.push(key + ': ' + value.join(', '));
        }
    }
    return showResult;
  }
};
