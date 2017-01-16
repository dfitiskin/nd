'use strict';
var user = {
  name: 'Иван',
  showNameDelay: function (delay) {
    return function () {
      console.log(this.name);
    };
  }
}
user.showNameDelay(0)();
