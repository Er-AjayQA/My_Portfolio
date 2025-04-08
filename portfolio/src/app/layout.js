"use client";

import { Footer } from "./Components/Footer";
import "../../public/css/globals.css";
import { Provider } from "react-redux";
import { store } from "./ReduxToolkit/ReduxStore";
import { Header } from "./Components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen md:flex-row">
        <Provider store={store}>
          {/* Sidebar - fixed on left for desktop */}
          <div className="md:w-64 md:fixed md:top-0 md:left-0 md:h-full md:overflow-y-auto">
            <Header /> {/* This replaces your Header component */}
          </div>

          {/* Main content - offset for sidebar on desktop */}
          <main className="flex-grow md:ml-64">
            <div className="container mx-auto px-4 md:px-6 min-h-screen flex flex-col">
              <div className="flex-grow">{children}</div>
              <Footer />
            </div>
          </main>
        </Provider>
      </body>
    </html>
  );
}
