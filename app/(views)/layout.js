"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_query_1 = require("@tanstack/react-query");
const react_1 = __importDefault(require("react"));
const ThemeContextProvider_1 = __importDefault(require("../setup/ThemeContextProvider"));
const reactQueryProvider = new react_query_1.QueryClient({
    defaultOptions: {
        queries: {
            suspense: true,
        },
    },
});
const Layout = ({ children }) => {
    return (<ThemeContextProvider_1.default>
      <react_query_1.QueryClientProvider client={reactQueryProvider}>
        {children}
      </react_query_1.QueryClientProvider>
    </ThemeContextProvider_1.default>);
};
exports.default = Layout;
