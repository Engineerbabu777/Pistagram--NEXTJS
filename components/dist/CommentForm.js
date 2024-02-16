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
exports.__esModule = true;
var actions_1 = require("@/lib/actions");
var schemas_1 = require("@/lib/schemas");
var utils_1 = require("@/lib/utils");
var form_1 = require("@/components/ui/form");
var zod_1 = require("@hookform/resolvers/zod");
var lucide_react_1 = require("lucide-react");
var react_hook_form_1 = require("react-hook-form");
function CommentForm(_a) {
    var _this = this;
    var postId = _a.postId, className = _a.className, inputRef = _a.inputRef;
    var form = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(schemas_1.CreateComment),
        defaultValues: {
            body: "",
            postId: postId
        }
    });
    var body = form.watch("body");
    var isSubmitting = form.formState.isSubmitting;
    return (React.createElement(form_1.Form, __assign({}, form),
        React.createElement("form", { onSubmit: form.handleSubmit(function (values) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, actions_1.createComment(values)];
                        case 1:
                            _a.sent();
                            form.reset();
                            return [2 /*return*/];
                    }
                });
            }); }), className: utils_1.cn("border-b relative border-gray-200 dark:border-neutral-800 py-3 flex items-center space-x-2 w-full px-3", className) },
            isSubmitting && (React.createElement("div", { className: "flex justify-center items-center w-full absolute" },
                React.createElement(lucide_react_1.Loader2, { className: "h-4 w-4 animate-spin" }))),
            React.createElement(form_1.FormField, { control: form.control, name: "body", render: function (_a) {
                    var field = _a.field;
                    return (React.createElement(form_1.FormItem, { className: "w-full flex" },
                        React.createElement(form_1.FormControl, null,
                            React.createElement("input", __assign({ disabled: isSubmitting, type: "text", placeholder: "Add a comment...", className: "bg-transparent text-sm border-none focus:outline-none flex-1 dark:text-neutral-400 placeholder-neutral-400 font-medium disabled:opacity-30" }, field))),
                        React.createElement(form_1.FormMessage, null)));
                } }),
            React.createElement("button", { disabled: !body.trim().length || isSubmitting, type: "submit", className: "text-sky-500 text-sm font-semibold hover:text-sky-700 dark:hover:text-white disabled:cursor-not-allowed  dark:disabled:text-slate-500 disabled:text-sky-500/40 disabled:hover:text-sky-500/40 dark:disabled:hover:text-slate-500" }, "Post"))));
}
exports["default"] = CommentForm;
