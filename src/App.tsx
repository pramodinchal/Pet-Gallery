import { BrowserRouter, Routes, Route } from "react-router-dom";
import { theme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import { SelectionProvider } from "./context/SelectionContext";
import { FilterProvider } from "./context/FilterContext";
import { ToastProvider } from "./context/ToastContext";
import { ToastContainer } from "./components/ToastContainer";
import { GalleryPage } from "./pages/GalleryPage";
import { PetDetailPage } from "./pages/PetDetailPage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { AboutPage } from "./pages/AboutPage";
import { Header } from "./components/Headers";
import { ThemeProvider } from "styled-components";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <ToastProvider>
          <SelectionProvider>
            <FilterProvider>
              <Header/>
              <Routes>
                <Route path="/" element={<GalleryPage />} />
                <Route path="/pets/:id" element={<PetDetailPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/about" element={<AboutPage />} />
              </Routes>
              <ToastContainer />
            </FilterProvider>
          </SelectionProvider>
        </ToastProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
