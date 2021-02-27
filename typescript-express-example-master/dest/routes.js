"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const PostGetAllAction_1 = require("./controller/PostGetAllAction");
const PostGetByIdAction_1 = require("./controller/PostGetByIdAction");
const PostSaveAction_1 = require("./controller/PostSaveAction");
const ManagerSaveAction_1 = require("./controller/ManagerSaveAction");
const ManagersGetByIdAction_1 = require("./controller/ManagersGetByIdAction");
const ManagersAllAction_1 = require("./controller/ManagersAllAction");
/**
 * All application routes.
 */
exports.AppRoutes = [
    {
        path: "/posts",
        method: "get",
        action: PostGetAllAction_1.postGetAllAction
    },
    {
        path: "/posts/:id",
        method: "get",
        action: PostGetByIdAction_1.postGetByIdAction
    },
    {
        path: "/posts",
        method: "post",
        action: PostSaveAction_1.postSaveAction
    },
    {
        path: "/managers",
        method: "post",
        action: ManagerSaveAction_1.managerSaveAction
    },
    {
        path: "/managers",
        method: "get",
        action: ManagersAllAction_1.ManagersGetAllAction
    },
    {
        path: "/managers/:id",
        method: "get",
        action: ManagersGetByIdAction_1.ManagersGetByIdAction
    }
];
//# sourceMappingURL=routes.js.map