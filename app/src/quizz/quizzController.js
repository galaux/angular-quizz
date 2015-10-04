(function () {
  'use strict';

  angular
    .module('app.quizz')
    .controller('quizzController', QuizzController);

  QuizzController.$inject = ['$q', 'quizzService'];

  function QuizzController($q, quizzService) {
    var self = this;

    self.question = null;
    self.answer = null;

    self.questions = null;

    activate();

    function activate() {
      return loadQuestions()
        .then(function(data) {
          return nextQuestion();
        })
    }

    function loadQuestions() {
      return quizzService
        .loadAllQuestions()
        .then(function(data) {
          self.questions = data;
          return self.questions;
        });
    }

    self.nextQuestion = nextQuestion;
    function nextQuestion() {
      var i = Math.floor((Math.random() * self.questions.length));
      self.question = self.questions[i].question;
      self.answer = self.questions[i].answer;
    }

  }

})();
