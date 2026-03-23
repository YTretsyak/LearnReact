import { UserContext } from "./userContext";

export const UserProvider = ({ children, store }) => {
    return <UserContext value={store}>{children}</UserContext>;
};