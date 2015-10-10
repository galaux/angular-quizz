(function () {
  'use strict';

  angular
    .module('app.quizz')
    .factory('quizzService', quizzService);

  function quizzService($http, $q) {

    var service = {
      loadAllQuestions: loadAllQuestions
    };

    return service;

    function loadAllQuestions() {
      return $http.get('/app/data/questions.json')
        .success(function(data) {
          return data;
        });
    }

  }

})();
