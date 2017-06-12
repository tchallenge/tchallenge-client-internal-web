(function () {

    'use strict';

    angular
        .module('application.miscellaneous')
        .controller('logonViewController', [
            '$state',
            'homeStateContextService',
            'authenticationService',
            'authenticationContextService',
            LogonViewController
        ]);

    function LogonViewController($state,
                                 homeStateContextService,
                                 authenticationService,
                                 authenticationContextService) {

        var self = this;

        self.$onInit = function () {
            var authentication = authenticationContextService.getAuthentication();
            if (authentication) {
                handleSuccessfulAuthentication();
            } else {
                homeStateContextService.reset();
            }
        };

        self.authenticate = function () {

            self.error = null;

            // TODO: check login and secret inputs

            authenticationService

                .authenticate({
                    login: self.email,
                    secret: self.secret
                })

                .then(function (response) {
                    console.log("INFO: handle success");
                    handleSuccessfulAuthentication();
                })

                .catch(function (response) {
                    console.log("ERROR: handle failure");
                    handleFailedAuthentication();
                });
        };

        function handleSuccessfulAuthentication() {
            $state.go(homeStateContextService.getHomeState());
        }

        function handleFailedAuthentication() {
            self.error = "Ошибка при попытке входа";
        }
    }
})();