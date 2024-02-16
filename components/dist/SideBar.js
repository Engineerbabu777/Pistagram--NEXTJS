"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var Logo_1 = require("./Logo");
var NavLinks_1 = require("./NavLinks");
var MoreDropDown_1 = require("./MoreDropDown");
var ProfileLink_1 = require("./ProfileLink");
var auth_1 = require("@/auth");
function SideBar(_a) {
    return __awaiter(this, void 0, void 0, function () {
        var session, user;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, auth_1.auth()];
                case 1:
                    session = _b.sent();
                    user = session === null || session === void 0 ? void 0 : session.user;
                    return [2 /*return*/, (react_1["default"].createElement(react_1["default"].Fragment, null,
                            react_1["default"].createElement("div", { className: 'flex h-full flex-col px-3 py-4 md:px-2' },
                                react_1["default"].createElement("div", { className: 'border-t -ml-3 md:ml-0 bg-white dark:bg-neutral-950 h-16 justify-evenly fixed flex-1 md:relative md:h-full bottom-0 md:border-none flex flex-row md:justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 p-2 ' },
                                    react_1["default"].createElement(Logo_1["default"], null),
                                    react_1["default"].createElement(NavLinks_1["default"], null),
                                    user && react_1["default"].createElement(ProfileLink_1["default"], { user: user }),
                                    react_1["default"].createElement("div", { className: 'hodden md:flex relative md:mt-auto flex-1 items-end w-full' },
                                        react_1["default"].createElement(MoreDropDown_1["default"], null))))))];
            }
        });
    });
}
exports["default"] = SideBar;
