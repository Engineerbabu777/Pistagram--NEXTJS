"use strict";
exports.__esModule = true;
var actions_1 = require("@/lib/actions");
var SubmitButton_1 = require("./SubmitButton");
var button_1 = require("./ui/button");
var utils_1 = require("@/lib/utils");
function FollowButton(_a) {
    var profileId = _a.profileId, isFollowing = _a.isFollowing, className = _a.className, buttonClassName = _a.buttonClassName;
    return (React.createElement("form", { action: actions_1.followUser, className: className },
        React.createElement("input", { type: "hidden", value: profileId, name: "id" }),
        React.createElement(SubmitButton_1["default"], { className: button_1.buttonVariants({
                variant: isFollowing ? "secondary" : "default",
                className: utils_1.cn("!font-bold w-full", buttonClassName),
                size: "sm"
            }) }, isFollowing ? "Unfollow" : "Follow")));
}
exports["default"] = FollowButton;
