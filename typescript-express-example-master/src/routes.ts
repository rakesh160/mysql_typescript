import {postGetAllAction} from "./controller/PostGetAllAction";
import {postGetByIdAction} from "./controller/PostGetByIdAction";
import {postSaveAction} from "./controller/PostSaveAction";
import {managerSaveAction} from "./controller/ManagerSaveAction";
import {ManagersGetByIdAction} from "./controller/ManagersGetByIdAction";
import {ManagersGetAllAction} from "./controller/ManagersAllAction";
/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/posts",
        method: "get",
        action: postGetAllAction
    },
    {
        path: "/posts/:id",
        method: "get",
        action: postGetByIdAction
    },
    {
        path: "/posts",
        method: "post",
        action: postSaveAction
    },
    {
        path: "/managers",
        method: "post",
        action: managerSaveAction
    },
    {
        path: "/managers",
        method: "get",
        action: ManagersGetAllAction
    },
    {
        path: "/managers/:id",
        method: "get",
        action: ManagersGetByIdAction
    }
];