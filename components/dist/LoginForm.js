"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("next-auth/react");
var react_dom_1 = require("react-dom");
var button_1 = require("./ui/button");
// import { calSans } from "@/app/fonts";
function LoginForm() {
    return (React.createElement("div", { className: "space-y-3" },
        React.createElement("div", { className: "flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8" },
            React.createElement("h1", { className: " mb-3 text-2xl dark:text-black" }, "Please log in to continue."),
            React.createElement(LoginButton, null))));
}
exports["default"] = LoginForm;
function LoginButton() {
    var pending = react_dom_1.useFormStatus().pending;
    return (React.createElement(button_1.Button, { className: "mt-4 w-full", variant: "secondary", "aria-disabled": pending, onClick: function () { return react_1.signIn("google", { callbackUrl: "/dashboard" }); } }, "Log in with Google"));
}
