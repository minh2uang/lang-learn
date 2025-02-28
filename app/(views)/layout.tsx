"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import React from "react";
import ThemeContextProvider from "../setup/ThemeContextProvider";

type Props = {
  children: JSX.Element;
};

const reactQueryProvider = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});
const Layout = ({ children }: Props) => {
  return (
    <ThemeContextProvider>
      <QueryClientProvider client={reactQueryProvider}>
        {children}
      </QueryClientProvider>
    </ThemeContextProvider>
  );
};

export default Layout;
