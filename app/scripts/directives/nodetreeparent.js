'use strict';

/**
 * @ngdoc directive
 * @name adventureApp.directive:nodeTreeParent
 * @description
 * # nodeTreeParent
 */
angular.module('adventureApp')
  .directive('nodeTreeParent', ['$compile', 'pages', '$rootScope', function($compile, pages, $rootScope) {
    return {
      templateUrl: 'views/nodetreeparent.html',
      restrict: 'E',
      replace: true,
      controllerAs: 'ntpCtrl',
      controller: ['$scope', '$element', function($scope, $element) {
        var self = this;
        var childholder = $element.find('.childholder');
        var kidElem = {};

        $scope.colClass = function(num) {
          return Math.max(~~(12 / num), 3);
        };

        function toggle(e) {
          if (!e) return;
          _(kidElem).each(function(v){
            v.hide();
          })

          var par = $(e.currentTarget).parent();
          if (!par.hasClass('selected')) {
            par.parent().addClass('choice');
          }

          par.siblings().removeClass('selected')
          par.toggleClass('selected');
        };

        self.selectNewPage = function(e){
          toggle(e);
        };

        self.moreChoices = function(bb, e) {
          $rootScope.$broadcast('show-more-choices', {
            bb: bb,
            ctrl: self,
            e: e
          });
        };

        self.showKids = function(bb, e) {
          toggle(e);

          if (kidElem[bb._id]) {
            kidElem[bb._id].show();
          } else {
            var s = $scope.$new(true);
            s.parent = bb;
            $compile('<node-tree-parent></node-tree-parent>')(s, function(el, scope) {
              childholder.children().hide();
              childholder.append(el);
              kidElem[bb._id] = el;
            })
          }

        };
      }]
    }
  }]);
