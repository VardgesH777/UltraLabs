import Users from "./pages/Users";
import IndividualItem from "./pages/User";

export const Routes = [
    {
        path: "/",
        isExact: true,
        component: Users
    },
    {
        path: "/users/:id",
        component: IndividualItem
    },
];
