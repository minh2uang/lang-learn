"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetUser = void 0;
const react_1 = __importStar(require("react"));
const navigation_1 = require("next/navigation");
const getCurrent_1 = __importDefault(require("../services/users/getCurrent"));
const UserContext = (0, react_1.createContext)({ email: "" });
const useGetUser = () => (0, react_1.useContext)(UserContext);
exports.useGetUser = useGetUser;
const UserContextProvider = ({ children }) => {
    const [loginStatus, setLoginStatus] = (0, react_1.useState)("loading");
    const [user, setUser] = (0, react_1.useState)(null);
    const router = (0, navigation_1.useRouter)();
    (0, react_1.useEffect)(() => {
        const doGetSession = async () => {
            const user = await (0, getCurrent_1.default)({});
            if (user === null) {
                setLoginStatus("notAuthenticated");
                return;
            }
            setLoginStatus("authenticated");
            setUser(user);
            return;
        };
        void doGetSession();
    }, []);
    switch (loginStatus) {
        case "loading":
            return <>Trying to verify your identity</>;
        case "notAuthenticated":
            router.push("/api/auth/signin");
            return <>Redirecting</>;
        case "authenticated":
            return (<UserContext.Provider value={user}>
          {children}
        </UserContext.Provider>);
    }
};
exports.default = UserContextProvider;
