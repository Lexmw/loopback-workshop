'use strict';

module.exports = function(Team) {
    Team.disableRemoteMethod("delete", true);
};
