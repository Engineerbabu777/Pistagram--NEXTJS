"use client";
"use strict";
exports.__esModule = true;
var utils_1 = require("@/lib/utils");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var button_1 = require("./ui/button");
var UserAvatar_1 = require("./UserAvatar");
function ProfileLink(_a) {
    var user = _a.user;
    var pathname = navigation_1.usePathname();
    var href = "/dashboard/" + user.username;
    var isActive = pathname === href;
    return (React.createElement(link_1["default"], { href: href, className: button_1.buttonVariants({
            variant: isActive ? "secondary" : "ghost",
            className: "navLink",
            size: "lg"
        }) },
        React.createElement(UserAvatar_1["default"], { user: user, className: "h-6 w-6 " + (isActive && "border-2 border-white") }),
        React.createElement("p", { className: "" + utils_1.cn("hidden lg:block", {
                "font-extrabold": isActive
            }) }, "Profile")));
}
exports["default"] = ProfileLink;
