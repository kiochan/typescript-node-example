"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var fs_1 = require("fs");
fs_1.readdir('/', function (err, files) {
    console.log(files);
});
var ExampleClass = (function () {
    function ExampleClass(opts) {
        this._helloWorldString = opts.helloWorldText;
    }
    return ExampleClass;
}());
exports.ExampleClass = ExampleClass;
var DefaultExampleClass = (function (_super) {
    __extends(DefaultExampleClass, _super);
    function DefaultExampleClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DefaultExampleClass;
}(ExampleClass));
exports["default"] = DefaultExampleClass;
//# sourceMappingURL=index.js.map