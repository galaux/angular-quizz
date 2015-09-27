(function () {
  'use strict';

  angular
    .module('app.quizz')
    .controller('quizzController', ['quizzService', QuizzController]);

  function QuizzController(quizzService, $q) {
    var self = this;

    self.theother = null;

    quizzService
      .loadAllUsers()
      .then(function(users) {
        self.theother = users[0].name;
      });
  }

})();
