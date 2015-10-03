(function () {
  'use strict';

  angular
    .module('app.quizz')
    .controller('quizzController', QuizzController);

  QuizzController.$inject = ['$q', 'quizzService'];

  function QuizzController($q, quizzService) {
    var self = this;

    self.theother = null;

    quizzService
      .loadAllUsers()
      .then(function(users) {
        self.theother = users[0].name;
      });
  }

})();
