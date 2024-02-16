"use client";
"use strict";
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
var link_1 = require("next/link");
var button_1 = require("./ui/button");
var navigation_1 = require("next/navigation");
var utils_1 = require("@/lib/utils");
var links = [
    { name: "Home", href: "/dashboard", icon: lucide_react_1.Home },
    {
        name: "Search",
        href: "/dashboard/search",
        icon: lucide_react_1.Search,
        hideOnMobile: true
    },
    { name: "Explore", href: "/dashboard/explore", icon: lucide_react_1.Compass },
    {
        name: "Reels",
        href: "/dashboard/reels",
        icon: lucide_react_1.Clapperboard
    },
    {
        name: "Messages",
        href: "/dashboard/messages",
        icon: lucide_react_1.MessageCircle
    },
    {
        name: "Notifications",
        href: "/dashboard/notifications",
        icon: lucide_react_1.Heart,
        hideOnMobile: true
    },
    {
        name: "Create",
        href: "/dashboard/create",
        icon: lucide_react_1.PlusSquare
    },
];
function NavLinks() {
    var pathname = navigation_1.usePathname();
    return (React.createElement(React.Fragment, null, links.map(function (link) {
        var LinkIcon = link.icon;
        var isActive = pathname === link.href;
        return (React.createElement(link_1["default"], { key: link.name, href: link.href, className: button_1.buttonVariants({
                variant: isActive ? "secondary" : "ghost",
                className: utils_1.cn("navLink", { "hidden md:flex": link.hideOnMobile }),
                size: "lg"
            }) },
            React.createElement(LinkIcon, { className: "w-6" }),
            React.createElement("p", { className: "" + utils_1.cn("hidden lg:block", {
                    "font-extrabold": isActive
                }) }, link.name)));
    })));
}
exports["default"] = NavLinks;
