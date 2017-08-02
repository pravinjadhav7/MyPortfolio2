angular.module('app', ['lbServices','ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('about', {
      url: '',
      templateUrl: 'views/about.html',
      controller: 'aboutController'
    }),

      $stateProvider
      .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.html',
      controller: 'contactController'
    }),
    $stateProvider
      .state('portfolio', {
      url: '/portfolio',
      templateUrl: 'views/portfolio.html',
      controller: 'portfolioController'
    }),
    $stateProvider
      .state('resume', {
      url: '/resume',
      templateUrl: 'views/resume.html',
      controller: 'resumeController'
    })
    ;

    $urlRouterProvider.otherwise('index');

  }]);