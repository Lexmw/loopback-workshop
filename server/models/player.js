'use strict';

module.exports = function(Player) {
    Player.disableRemoteMethod("delete", true);
};
