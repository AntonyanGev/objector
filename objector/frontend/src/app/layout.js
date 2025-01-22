"use client";
import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";
import { ApolloProvider } from "@apollo/client";
import client from "./lib/apolloClient";
import { ModalProvider } from "../components/context/context";

export default function RootLayout({ children }) {
  return (
    <ApolloProvider client={client}>
      <ModalProvider>
        <html lang="en">
          <body>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </body>
        </html>
      </ModalProvider>
    </ApolloProvider>
  );
}
