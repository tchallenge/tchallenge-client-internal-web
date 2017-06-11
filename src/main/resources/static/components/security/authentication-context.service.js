(function () {

    'use strict';

    angular
        .module('application.security')
        .controller('authenticationContextService', [
            AuthenticationContextService
        ]);

    function AuthenticationContextService() {

        var self = this;

        self.getAuthentication = function () {
            return authentication;
        };

        self.setAuthentication = function (authentication) {
            console.log("INFO: authentication context set");
            self.authentication = authentication;
        };

        self.reset = function (authentication) {
            console.log("INFO: authentication context reset");
            self.authentication = null;
        };
    }
})();
