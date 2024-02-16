"use client";
"use strict";
exports.__esModule = true;
var dropdown_menu_1 = require("@/components/ui/dropdown-menu");
var utils_1 = require("@/lib/utils");
var lucide_react_1 = require("lucide-react");
var react_1 = require("next-auth/react");
var next_themes_1 = require("next-themes");
var react_2 = require("react");
var button_1 = require("./ui/button");
var label_1 = require("./ui/label");
var switch_1 = require("./ui/switch");
function MoreDropdown() {
    var _a = react_2.useState(false), showModeToggle = _a[0], setShowModeToggle = _a[1];
    var _b = react_2.useState(false), open = _b[0], setOpen = _b[1];
    var ref = react_2.useRef(null);
    var _c = next_themes_1.useTheme(), theme = _c.theme, setTheme = _c.setTheme;
    react_2.useEffect(function () {
        // Close the dropdown when the user clicks outside
        function handleOutsideClick(event) {
            if (!event.target)
                return;
            if (ref.current && !ref.current.contains(event.target)) {
                setShowModeToggle(false);
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleOutsideClick);
        return function () {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [ref]);
    return (React.createElement(dropdown_menu_1.DropdownMenu, { open: open },
        React.createElement(dropdown_menu_1.DropdownMenuTrigger, { asChild: true },
            React.createElement(button_1.Button, { onClick: function () { return setOpen(!open); }, variant: "ghost", size: "lg", className: "md:w-full !justify-start space-x-2 !px-3" },
                React.createElement(lucide_react_1.Menu, null),
                React.createElement("div", { className: "hidden lg:block" }, "More"))),
        React.createElement(dropdown_menu_1.DropdownMenuContent, { ref: ref, className: utils_1.cn("dark:bg-neutral-800 w-64 !rounded-xl !p-0 transition-opacity", !open && "opacity-0"), align: "end", alignOffset: -40 },
            !showModeToggle && (React.createElement(React.Fragment, null,
                React.createElement(dropdown_menu_1.DropdownMenuItem, { className: "menuItem" },
                    React.createElement(lucide_react_1.Settings, { size: 20 }),
                    React.createElement("p", null, "Settings")),
                React.createElement(dropdown_menu_1.DropdownMenuItem, { className: "menuItem" },
                    React.createElement(lucide_react_1.Activity, { size: 20 }),
                    React.createElement("p", null, "Your activity")),
                React.createElement(dropdown_menu_1.DropdownMenuItem, { className: "menuItem" },
                    React.createElement(lucide_react_1.Bookmark, { size: 20 }),
                    React.createElement("p", null, "Saved")),
                React.createElement(dropdown_menu_1.DropdownMenuItem, { className: "menuItem", onClick: function () { return setShowModeToggle(true); } },
                    React.createElement(lucide_react_1.Moon, { size: 20 }),
                    React.createElement("p", null, "Switch appearance")),
                React.createElement(dropdown_menu_1.DropdownMenuItem, { className: "menuItem", onClick: function () { return react_1.signOut(); } },
                    React.createElement(lucide_react_1.LogOut, { size: 20 }),
                    React.createElement("p", null, "Log out")))),
            showModeToggle && (React.createElement(React.Fragment, null,
                React.createElement("div", { className: "flex items-center border-b border-gray-200 dark:border-neutral-700 py-3.5 px-2.5" },
                    React.createElement(lucide_react_1.ChevronLeft, { size: 18, onClick: function () { return setShowModeToggle(false); } }),
                    React.createElement("p", { className: "font-bold ml-1" }, "Switch appearance"),
                    theme === "dark" ? (React.createElement(lucide_react_1.Moon, { size: 20, className: "ml-auto" })) : (React.createElement(lucide_react_1.Sun, { size: 20, className: "ml-auto" }))),
                React.createElement(label_1.Label, { htmlFor: "dark-mode", className: "menuItem" },
                    "Dark Mode",
                    React.createElement(dropdown_menu_1.DropdownMenuItem, { className: "ml-auto !p-0" },
                        React.createElement(switch_1.Switch, { id: "dark-mode", className: "ml-auto", checked: theme === "dark", onCheckedChange: function (checked) {
                                setTheme(checked ? "dark" : "light");
                            } }))))))));
}
exports["default"] = MoreDropdown;
