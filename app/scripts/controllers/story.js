'use strict';

/**
 * @ngdoc function
 * @name adventureApp.controller:StoryCtrl
 * @description
 * # StoryCtrl
 * Controller of the adventureApp
 */
angular.module('adventureApp')
  .controller('StoryCtrl', ['$scope', 'testPage', 'pages', '$routeParams',
    function($scope, testPage, pages, $routeParams) {
      var self = this;
      var sourceCtrl,originalEvent;

      pages.getPage($routeParams.page).then(function(res) {
        $scope.parent = res;
      });

      self.addChoice = function() {
        //submit choice

        pages.addPage({
          choice: self.newChoice,
          text: self.newText
        }).then(function(res) {
          if (!self.currentBB) {
            $scope.parent = res;
            return
          }

          self.currentBB.choices.push(res);
          sourceCtrl.showKids(res, originalEvent);
        })

      };

      self.chooseAnother = function(choice) {
        //get choice
        sourceCtrl.showKids(choice);
      }

      $scope.$on('show-more-choices', function(s, source) {
        sourceCtrl = source.ctrl;
        self.currentBB = source.bb;
        originalEvent = source.e;
        $('#all-choices').modal('show');
      });
    }
  ]);
