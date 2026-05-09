const { createContext } = require("react");

const UserContext = createContext({
    loggedInUser: "defaultUser"
});

export default UserContext;