"use strict";
exports.__esModule = true;
exports.sleep = void 0;
/**
 * Sleep async function
 * @param time
 */
function sleep(time) {
    return new Promise(function (resolve) { return setTimeout(resolve, time); });
}
exports.sleep = sleep;
