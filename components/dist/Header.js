"use strict";
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
var link_1 = require("next/link");
var button_1 = require("./ui/button");
// import { calSans } from "@/app/fonts";
function Header() {
    return (React.createElement("header", { className: "fixed md:hidden bg-white top-0 flex items-center justify-between dark:bg-neutral-950 w-full z-50 border-b border-zinc-300 dark:border-neutral-700 px-3 py-2 sm:-ml-6" },
        React.createElement(link_1["default"], { href: "/dashboard" },
            React.createElement("p", { className: "font-semibold text-xl \n        " }, "Pixelgram")),
        React.createElement("div", { className: "flex items-center space-x-2" },
            React.createElement("div", { className: "flex items-center text-neutral-600 dark:text-neutral-400 bg-zinc-100 dark:bg-neutral-800 gap-x-2 rounded-md px-3.5 py-1.5" },
                React.createElement(lucide_react_1.Search, { className: "h-4 w-4" }),
                React.createElement("input", { type: "text", placeholder: "Search", className: "bg-transparent placeholder:text-neutral-600 dark:placeholder:text-neutral-400 flex-1 outline-none" })),
            React.createElement(button_1.Button, { size: "icon", variant: "ghost" },
                React.createElement(lucide_react_1.Heart, null)))));
}
exports["default"] = Header;
