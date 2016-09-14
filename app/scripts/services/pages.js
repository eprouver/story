'use strict';

/**
 * @ngdoc service
 * @name adventureApp.pages
 * @description
 * # pages
 * Service in the adventureApp.
 */
angular.module('adventureApp')
  .service('pages', ['$q', 'testPage', function($q, testPage) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var pages = Gun({
      // Amazon S3 (comes bundled)
      // s3: {
      //   key: '',
      //   secret: '',
      //   bucket: ''
      // },

      // simple JSON persistence (bundled)
      // meant for ease of getting started
      // NOT meant for production
      uuid: UUID.generate,
      file: 'file/local.json'
    }).get('pages');

    return {
      addPage: function(page) {
        page = {
          _id: UUID.generate(),
          choice: page.choice,
          text: page.text,
          creation: _.now(),
          reads: 0,
          choices: {}
        };

        pages.put(page).key(page._id);
        console.log(page._id);

        page.choices = [];

        return $q.when(page);
      },
      getPage: function(id) {
        if (!id) {
          return $q.reject();
        }
        var defer = $q.defer();
        pages.get(id).val(function(v){

          v.choices = [];

          defer.resolve(v);
        });
        return defer.promise;
      }
    }
  }]);
