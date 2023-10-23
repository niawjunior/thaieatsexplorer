import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import ContactPage from "./pages/Contact.tsx"
import "./index.css"

import { BrowserRouter, Route, Routes } from "react-router-dom"
import MenusPage from "./pages/Menus.tsx"

const root = createRoot(document.getElementById("root")!)

root.render(
  <BrowserRouter>
    {
      <React.StrictMode>
        <Routes>
          <Route index element={<App />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/menus" element={<MenusPage />} />
        </Routes>
      </React.StrictMode>
    }
  </BrowserRouter>
)
