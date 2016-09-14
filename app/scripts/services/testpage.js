'use strict';

/**
 * @ngdoc service
 * @name adventureApp.testPage
 * @description
 * # testPage
 * Factory in the adventureApp.
 */
angular.module('adventureApp')
  .factory('testPage', ['$q', function($q) {
    return function() {
      return $q.when({
        _id: _.uniqueId(),
        choice: _.uniqueId(),
        text: 'Lorem ipsum dolor sit amet, sit diam vel tempore. Lacus sollicitudin malesuada quisque, felis aliquam ad sem nascetur et qui, turpis morbi mollis tempus in. Donec mauris scelerisque justo tristique dis ligula, amet tellus ipsum sed sollicitudin nunc, integer tincidunt eros ipsum, proin mattis non nulla ullamcorper etiam. Ornare sociis ut. Ornare justo augue gravida aliquet aenean. Odio nulla tincidunt pharetra perferendis vestibulum erat, vehicula commodo morbi, faucibus aliquam congue libero in risus. Wisi porttitor nunc neque interdum, et laborum. Scelerisque sed in venenatis at, euismod dolor sed sodales et vel faucibus, orci tempus blandit et sodales, lacus viverra integer, quis orci. Ut cursus adipiscing wisi a justo, vel non cursus suscipit mollis arcu in, luctus aenean nonummy. Non tellus amet mauris massa sed. Id sit.',
        popular: [{_id: _.uniqueId(), choice: 'BBBB'}, {_id: _.uniqueId(), choice: 'BBBB'}, {_id: _.uniqueId(), choice: 'BBBB'}, {_id: _.uniqueId(), choice: 'BBBB'}],
        newest: [{_id: _.uniqueId(), choice: 'BBBB'}, {_id: _.uniqueId(), choice: 'BBBB'}, {_id: _.uniqueId(), choice: 'BBBB'}, {_id: _.uniqueId(), choice: 'BBBB'}]
      });
    }
  }]);
