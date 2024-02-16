"use strict";
exports.__esModule = true;
exports.SinglePostSkeleton = exports.ViewPostSkeleton = exports.EditPostSkeleton = exports.PostsSkeleton = exports.PostSkeleton = void 0;
var aspect_ratio_1 = require("@/components/ui/aspect-ratio");
var dialog_1 = require("@/components/ui/dialog");
var skeleton_1 = require("@/components/ui/skeleton");
var card_1 = require("./ui/card");
function PostSkeleton() {
    return (React.createElement("div", { className: "space-y-3" },
        React.createElement("div", { className: "flex items-center space-x-4" },
            React.createElement(skeleton_1.Skeleton, { className: "h-12 w-12 rounded-full" }),
            React.createElement("div", { className: "space-y-2" },
                React.createElement(skeleton_1.Skeleton, { className: "h-4 w-[250px]" }),
                React.createElement(skeleton_1.Skeleton, { className: "h-4 w-[200px]" }))),
        React.createElement(skeleton_1.Skeleton, { className: "h-[450px]" })));
}
exports.PostSkeleton = PostSkeleton;
function PostsSkeleton() {
    return (React.createElement(React.Fragment, null,
        React.createElement(PostSkeleton, null),
        React.createElement(PostSkeleton, null),
        React.createElement(PostSkeleton, null),
        React.createElement(PostSkeleton, null)));
}
exports.PostsSkeleton = PostsSkeleton;
function EditPostSkeleton() {
    return (React.createElement(dialog_1.Dialog, { open: true },
        React.createElement(dialog_1.DialogContent, null,
            React.createElement(dialog_1.DialogHeader, null,
                React.createElement(dialog_1.DialogTitle, null, "Edit info")),
            React.createElement(aspect_ratio_1.AspectRatio, { ratio: 1 / 1, className: "relative h-full" },
                React.createElement(skeleton_1.Skeleton, { className: "h-full w-full" })),
            React.createElement(skeleton_1.Skeleton, { className: "h-10 w-full" }))));
}
exports.EditPostSkeleton = EditPostSkeleton;
function ViewPostSkeleton() {
    return (React.createElement(dialog_1.Dialog, { open: true },
        React.createElement(dialog_1.DialogContent, { className: "flex gap-0 flex-col md:flex-row items-start p-0 md:max-w-3xl lg:max-w-5xl xl:max-w-6xl h-full max-h-[500px] lg:max-h-[700px] xl:max-h-[800px]" },
            React.createElement(skeleton_1.Skeleton, { className: "relative overflow-hidden h-96 md:h-[500px] lg:h-[700px] xl:h-[800px] max-w-3xl w-full rounded-r-none" }),
            React.createElement("div", { className: "flex flex-col h-full py-4 pl-3.5 pr-6 flex-1" },
                React.createElement("div", { className: "flex items-center space-x-4" },
                    React.createElement(skeleton_1.Skeleton, { className: "h-12 w-12 rounded-full" }),
                    React.createElement("div", { className: "space-y-2" },
                        React.createElement(skeleton_1.Skeleton, { className: "h-4 w-[250px]" }),
                        React.createElement(skeleton_1.Skeleton, { className: "h-4 w-[200px]" }))),
                React.createElement(skeleton_1.Skeleton, { className: "flex-1 my-4" }),
                React.createElement("div", { className: "flex items-center w-full space-x-4" },
                    React.createElement("div", { className: "space-y-2 w-full" },
                        React.createElement(skeleton_1.Skeleton, { className: "h-4 w-full flex-1" }),
                        React.createElement(skeleton_1.Skeleton, { className: "h-4 w-[300px]" }),
                        React.createElement(skeleton_1.Skeleton, { className: "h-4 w-[300px]" })))))));
}
exports.ViewPostSkeleton = ViewPostSkeleton;
function UserAvatarSkeleton() {
    return (React.createElement("div", { className: "flex items-center space-x-2" },
        React.createElement(skeleton_1.Skeleton, { className: "h-12 w-12 rounded-full" }),
        React.createElement("div", { className: "space-y-2" },
            React.createElement(skeleton_1.Skeleton, { className: "h-4 w-[250px]" }),
            React.createElement(skeleton_1.Skeleton, { className: "h-4 w-[200px]" }))));
}
function SinglePostSkeleton() {
    return (React.createElement(card_1.Card, { className: "max-w-3xl lg:max-w-4xl mx-auto hidden md:flex" },
        React.createElement("div", { className: "relative overflow-hidden h-[450px] max-w-sm lg:max-w-lg  w-full" },
            React.createElement(skeleton_1.Skeleton, { className: "h-full w-full" })),
        React.createElement("div", { className: "flex max-w-sm flex-col flex-1" },
            React.createElement("div", { className: "flex items-center justify-between border-b px-5 py-3" },
                React.createElement("div", { className: "flex items-center space-x-2" },
                    React.createElement(skeleton_1.Skeleton, { className: "h-12 w-12 rounded-full" }),
                    React.createElement("div", { className: "space-y-2" },
                        React.createElement(skeleton_1.Skeleton, { className: "h-4 w-[250px]" })))),
            React.createElement("div", { className: "px-5 space-y-3 mt-8" },
                React.createElement(UserAvatarSkeleton, null),
                React.createElement(UserAvatarSkeleton, null),
                React.createElement(UserAvatarSkeleton, null),
                React.createElement(UserAvatarSkeleton, null)))));
}
exports.SinglePostSkeleton = SinglePostSkeleton;
