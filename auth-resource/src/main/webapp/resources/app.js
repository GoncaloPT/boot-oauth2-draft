var isLoginPage = window.location.href.indexOf("login") != -1;
if (isLoginPage) {
    if ($cookies.get("access_token")) {
        window.location.href = "index";
    }
} else {
    if ($cookies.get("access_token")) {
        $http.defaults.headers.common.Authorization =
                'Bearer ' + $cookies.get("access_token");
    } else {
        window.location.href = "login";
    }
}

var app = angular.module('myApp', ["ngResource", "ngRoute", "ngCookies"]);
app.controller('mainCtrl',
        function ($scope, $resource, $http, $httpParamSerializer, $cookies) {

            $scope.data = {
                grant_type: "password",
                username: "",
                password: "",
                client_id: "clientIdPassword"
            };
            $scope.encoded = btoa("clientIdPassword:secret");

            $scope.login = function () {
                var req = {
                    method: 'POST',
                    url: "http://localhost:8080/spring-security-oauth-server/oauth/token",
                    headers: {
                        "Authorization": "Basic " + $scope.encoded,
                        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
                    },
                    data: $httpParamSerializer($scope.data)
                }
                $http(req).then(function (data) {
                    $http.defaults.headers.common.Authorization =
                            'Bearer ' + data.data.access_token;
                    $cookies.put("access_token", data.data.access_token);
                    window.location.href = "index";
                });
            }
        });