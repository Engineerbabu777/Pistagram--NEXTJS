"use strict";
exports.__esModule = true;
function Error(_a) {
    var _b = _a.res, errors = _b.errors, message = _b.message;
    return (React.createElement("div", null,
        errors &&
            Object.entries(errors).map(function (_a) {
                var key = _a[0], value = _a[1];
                return (React.createElement("div", { key: key, id: key + "-error", "aria-live": "polite" },
                    React.createElement("strong", { className: "capitalize" },
                        key,
                        ": "),
                    React.createElement("span", { className: "text-sm font-medium" }, value)));
            }),
        React.createElement("div", null,
            React.createElement("span", { className: "text-sm font-medium" }, message))));
}
exports["default"] = Error;
