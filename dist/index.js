"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("@reactive-redux/store");
var reducers_1 = require("./reducers");
var actions_1 = require("./actions");
var Queue = /** @class */ (function (_super) {
    __extends(Queue, _super);
    function Queue(initialQueue) {
        if (initialQueue === void 0) { initialQueue = []; }
        var _this = _super.call(this, initialQueue, reducers_1.reducerMap) || this;
        _this.peek$ = _this.state$.pipe(store_1.select(function (queue) { return queue[0]; }));
        _this.size$ = _this.state$.pipe(store_1.select(function (queue) { return queue.length; }));
        _this.isEmpty$ = _this.state$.pipe(store_1.select(function (queue) { return queue.length === 0; }));
        return _this;
    }
    Queue.prototype.enqueue = function (item) {
        this.dispatch(new actions_1.Enqueue(item));
    };
    Queue.prototype.dequeue = function () {
        this.dispatch(new actions_1.Dequeue());
    };
    Queue.prototype.clear = function () {
        this.dispatch(new actions_1.Clear());
    };
    return Queue;
}(store_1.Store));
exports.Queue = Queue;
