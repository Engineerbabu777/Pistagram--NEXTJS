"use strict";
exports.__esModule = true;
var lucide_react_1 = require("lucide-react");
var link_1 = require("next/link");
var button_1 = require("./ui/button");
// import { calSans } from "@/app/fonts";
function Logo() {
    return (React.createElement(link_1["default"], { href: "/dashboard", className: button_1.buttonVariants({
            className: "hidden md:flex navLink !mb-10 lg:hover:bg-transparent lg:!p-0",
            variant: "ghost",
            size: "lg"
        }) },
        React.createElement(lucide_react_1.SwitchCamera, { className: "h-6 w-6 shrink-0 lg:hidden" }),
        React.createElement("p", { className: "font-semibold text-xl hidden lg:block \n         " }, "Pistagram")));
}
exports["default"] = Logo;
