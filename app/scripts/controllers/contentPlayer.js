'use strict';

angular.module('playerApp')
        .controller('playerCtrl', function (resourceService, $stateParams, $log, $scope, $rootScope, $sessionStorage, $timeout, $location, $anchorScroll) {
            var player = this;
            player.contentPlayer = {
                isContentPlayerEnabled: false
            };
            player.ngInit = function () {
                if ($stateParams.content) {
                    player.contentPlayer.isContentPlayerEnabled = true;
                    player.contentPlayer.contentData = $stateParams.content;
                    player.hashId = "content/" + $stateParams.content.identifier;

                } else if ($location.hash() != '') {
                    player.contentPlayer.isContentPlayerEnabled = true;
                    player.hashId = $location.hash();
                    player.contentPlayer.contentId = player.hashId.replace("content/", "");
                }
                player.scrollToPlayer();
            }
            player.scrollToPlayer = function () {
                $location.hash(player.hashId);
                $timeout(function () {
                    $anchorScroll();
                }, 500);
            }
        });
        