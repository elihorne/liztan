var noodles = angular.module('noodles', []);

noodles.config(function($routeProvider) {
  // routing
  $routeProvider.
    when('/', { templateUrl: '/views/home.html', controller: 'HomeCtrl' }).
    when('/error', { templateUrl: '/views/error.html', controller: 'ErrorCtrl' }).
    when('/about', { templateUrl: '/views/about.html', controller: 'AboutCtrl' }).
    when('/projects', { templateUrl: '/views/project-main.html', controller: 'ProjectMainCtrl' }).
    when('/projects/:projectname', { templateUrl: '/views/project-detail.html', controller: 'ProjectDetailCtrl' }).
    otherwise({ redirectTo: '/error' });
});

function MainCtrl() {
  console.log('mainCtrl');
}

function HomeCtrl() {
  console.log('homeCtrl');
}

function AboutCtrl() {
  console.log('aboutCtrl');
}

function ProjectMainCtrl() {
  console.log('projectMainCtrl');
}

function ProjectDetailCtrl() {
  console.log('projectDetailCtrl');
}

function ErrorCtrl() {
  console.log('errorCtrl');
}
