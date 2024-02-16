"use client";
"use strict";
exports.__esModule = true;
var CommentOptions_1 = require("@/components/CommentOptions");
var UserAvatar_1 = require("@/components/UserAvatar");
var react_1 = require("next-auth/react");
var link_1 = require("next/link");
var Timestamp_1 = require("./Timestamp");
function Comment(_a) {
    var comment = _a.comment, inputRef = _a.inputRef;
    var session = react_1.useSession().data;
    var username = comment.user.username;
    var href = "/dashboard/" + username;
    return (React.createElement("div", { className: "group p-3 px-3.5  flex items-start space-x-2.5" },
        React.createElement(link_1["default"], { href: href },
            React.createElement(UserAvatar_1["default"], { user: comment.user })),
        React.createElement("div", { className: "space-y-1.5" },
            React.createElement("div", { className: "flex items-center space-x-1.5 leading-none text-sm" },
                React.createElement(link_1["default"], { href: href, className: "font-semibold" }, username),
                React.createElement("p", { className: "font-medium" }, comment.body)),
            React.createElement("div", { className: "flex h-5 items-center space-x-2.5" },
                React.createElement(Timestamp_1["default"], { createdAt: comment.createdAt }),
                React.createElement("button", { className: "text-xs font-semibold text-neutral-500", onClick: function () { var _a; return (_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.focus(); } }, "Reply"),
                comment.userId === (session === null || session === void 0 ? void 0 : session.user.id) && (React.createElement(CommentOptions_1["default"], { comment: comment }))))));
}
exports["default"] = Comment;
