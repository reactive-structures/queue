"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QueueActions;
(function (QueueActions) {
    QueueActions["ENQUEUE"] = "[Queue] Enqueue item";
    QueueActions["DEQUEUE"] = "[Queue] Dequeue item";
    QueueActions["CLEAR"] = "[Queue] Clear stack";
})(QueueActions = exports.QueueActions || (exports.QueueActions = {}));
var Enqueue = /** @class */ (function () {
    function Enqueue(payload) {
        this.payload = payload;
        this.type = QueueActions.ENQUEUE;
    }
    return Enqueue;
}());
exports.Enqueue = Enqueue;
var Dequeue = /** @class */ (function () {
    function Dequeue() {
        this.type = QueueActions.DEQUEUE;
    }
    return Dequeue;
}());
exports.Dequeue = Dequeue;
var Clear = /** @class */ (function () {
    function Clear() {
        this.type = QueueActions.CLEAR;
    }
    return Clear;
}());
exports.Clear = Clear;
