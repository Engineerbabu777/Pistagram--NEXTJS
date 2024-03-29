"use client";
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
var dialog_1 = require("@/components/ui/dialog");
var SubmitButton_1 = require("@/components/SubmitButton");
var lucide_react_1 = require("lucide-react");
var sonner_1 = require("sonner");
var actions_1 = require("@/lib/actions");
function CommentOptions(_a) {
    var _this = this;
    var comment = _a.comment;
    return (React.createElement(dialog_1.Dialog, null,
        React.createElement(dialog_1.DialogTrigger, { asChild: true },
            React.createElement(lucide_react_1.MoreHorizontal, { className: "h-5 w-5 hidden group-hover:inline cursor-pointer dark:text-neutral-400" })),
        React.createElement(dialog_1.DialogContent, { className: "dialogContent" },
            React.createElement("form", { action: function (formData) { return __awaiter(_this, void 0, void 0, function () {
                    var message;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, actions_1.deleteComment(formData)];
                            case 1:
                                message = (_a.sent()).message;
                                sonner_1.toast(message);
                                return [2 /*return*/];
                        }
                    });
                }); }, className: "postOption" },
                React.createElement("input", { type: "hidden", name: "id", value: comment.id }),
                React.createElement(SubmitButton_1["default"], { className: "text-red-500 font-bold disabled:cursor-not-allowed w-full p-3" }, "Delete")),
            React.createElement(dialog_1.DialogClose, { className: "postOption border-0 w-full p-3" }, "Cancel"))));
}
exports["default"] = CommentOptions;
