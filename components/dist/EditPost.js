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
var Error_1 = require("@/components/Error");
var aspect_ratio_1 = require("@/components/ui/aspect-ratio");
var button_1 = require("@/components/ui/button");
var dialog_1 = require("@/components/ui/dialog");
var form_1 = require("@/components/ui/form");
var input_1 = require("@/components/ui/input");
var useMount_1 = require("@/hooks/useMount");
var actions_1 = require("@/lib/actions");
var schemas_1 = require("@/lib/schemas");
var zod_1 = require("@hookform/resolvers/zod");
var image_1 = require("next/image");
var navigation_1 = require("next/navigation");
var react_hook_form_1 = require("react-hook-form");
var sonner_1 = require("sonner");
function EditPost(_a) {
    var _this = this;
    var id = _a.id, post = _a.post;
    var mount = useMount_1["default"]();
    var pathname = navigation_1.usePathname();
    var isEditPage = pathname === "/dashboard/p/" + id + "/edit";
    var router = navigation_1.useRouter();
    var form = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(schemas_1.UpdatePost),
        defaultValues: {
            id: post.id,
            caption: post.caption || "",
            fileUrl: post.fileUrl
        }
    });
    var fileUrl = form.watch("fileUrl");
    if (!mount)
        return null;
    return (React.createElement(dialog_1.Dialog, { open: isEditPage, onOpenChange: function (open) { return !open && router.back(); } },
        React.createElement(dialog_1.DialogContent, null,
            React.createElement(dialog_1.DialogHeader, null,
                React.createElement(dialog_1.DialogTitle, null, "Edit info")),
            React.createElement(form_1.Form, __assign({}, form),
                React.createElement("form", { className: "space-y-4", onSubmit: form.handleSubmit(function (values) { return __awaiter(_this, void 0, void 0, function () {
                        var res;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, actions_1.updatePost(values)];
                                case 1:
                                    res = _a.sent();
                                    if (res) {
                                        return [2 /*return*/, sonner_1.toast.error(React.createElement(Error_1["default"], { res: res }))];
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); }) },
                    React.createElement("div", { className: "h-96 md:h-[450px] overflow-hidden rounded-md" },
                        React.createElement(aspect_ratio_1.AspectRatio, { ratio: 1 / 1, className: "relative h-full" },
                            React.createElement(image_1["default"], { src: fileUrl, alt: "Post preview", fill: true, className: "rounded-md object-cover" }))),
                    React.createElement(form_1.FormField, { control: form.control, name: "caption", render: function (_a) {
                            var field = _a.field;
                            return (React.createElement(form_1.FormItem, null,
                                React.createElement(form_1.FormLabel, { htmlFor: "caption" }, "Caption"),
                                React.createElement(form_1.FormControl, null,
                                    React.createElement(input_1.Input, __assign({ type: "caption", id: "caption", placeholder: "Write a caption..." }, field))),
                                React.createElement(form_1.FormMessage, null)));
                        } }),
                    React.createElement(button_1.Button, { type: "submit", disabled: form.formState.isSubmitting }, "Done"))))));
}
exports["default"] = EditPost;
