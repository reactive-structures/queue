"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var actions_1 = require("./actions");
exports.enqueue = function (state, action) { return __spread(state, [
    action.payload
]); };
exports.dequeue = function (state, action) {
    var newState = __spread(state);
    newState.shift();
    return newState;
};
exports.clear = function (state, action) { return []; };
exports.reducerMap = new Map([
    [actions_1.QueueActions.ENQUEUE, exports.enqueue],
    [actions_1.QueueActions.DEQUEUE, exports.dequeue],
    [actions_1.QueueActions.CLEAR, exports.clear]
]);
