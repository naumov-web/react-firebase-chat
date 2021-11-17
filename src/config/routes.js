import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/constants";
import LoginPage from "../components/pages/LoginPage";
import ChatPage from "../components/pages/ChatPage";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        component: LoginPage
    }
];

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        component: ChatPage
    }
];