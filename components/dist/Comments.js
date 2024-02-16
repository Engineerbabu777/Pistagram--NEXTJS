"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var actions_1 = require("@/lib/actions");
var schemas_1 = require("@/lib/schemas");
var form_1 = require("@/components/ui/form");
var zod_1 = require("@hookform/resolvers/zod");
var link_1 = require("next/link");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
function Comments(_a) {
    var _this = this;
    var postId = _a.postId, comments = _a.comments, user = _a.user;
    var form = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(schemas_1.CreateComment),
        defaultValues: {
            body: "",
            postId: postId
        }
    });
    var _b = react_1.useTransition(), isPending = _b[0], startTransition = _b[1];
    var _c = react_1.useOptimistic(comments, 
    // @ts-ignore
    function (state, newComment) { return __spreadArrays([
        { body: newComment, userId: user === null || user === void 0 ? void 0 : user.id, postId: postId, user: user }
    ], state); }), optimisticComments = _c[0], addOptimisticComment = _c[1];
    var body = form.watch("body");
    var commentsCount = optimisticComments.length;
    return (React.createElement("div", { className: "space-y-0.5 px-3 sm:px-0" },
        commentsCount > 1 && (React.createElement(link_1["default"], { scroll: false, href: "/dashboard/p/" + postId, className: "text-sm font-medium text-neutral-500" },
            "View all ",
            commentsCount,
            " comments")),
        optimisticComments.slice(0, 3).map(function (comment, i) {
            var _a;
            var username = (_a = comment.user) === null || _a === void 0 ? void 0 : _a.username;
            return (React.createElement("div", { key: i, className: "text-sm flex items-center space-x-2 font-medium" },
                React.createElement(link_1["default"], { href: "/dashboard/" + username, className: "font-semibold" }, username),
                React.createElement("p", null, comment.body)));
        }),
        React.createElement(form_1.Form, __assign({}, form),
            React.createElement("form", { onSubmit: form.handleSubmit(function (values) { return __awaiter(_this, void 0, void 0, function () {
                    var valuesCopy;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                valuesCopy = __assign({}, values);
                                form.reset();
                                startTransition(function () {
                                    addOptimisticComment(valuesCopy.body);
                                });
                                return [4 /*yield*/, actions_1.createComment(valuesCopy)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }), className: "border-b border-gray-300 dark:border-neutral-800 pb-3 py-1 flex items-center space-x-2" },
                React.createElement(form_1.FormField, { control: form.control, name: "body", render: function (_a) {
                        var field = _a.field, fieldState = _a.fieldState;
                        return (React.createElement(form_1.FormItem, { className: "w-full flex" },
                            React.createElement(form_1.FormControl, null,
                                React.createElement("input", __assign({ type: "text", placeholder: "Add a comment...", className: "bg-transparent text-sm border-none focus:outline-none flex-1 placeholder-neutral-500 dark:text-white dark:placeholder-neutral-400 font-medium" }, field))),
                            React.createElement(form_1.FormMessage, null)));
                    } }),
                body.trim().length > 0 && (React.createElement("button", { type: "submit", className: "text-sky-500 text-sm font-semibold hover:text-white disabled:hover:text-sky-500 disabled:cursor-not-allowed" }, "Post"))))));
}
exports["default"] = Comments;
