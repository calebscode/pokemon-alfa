import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Pokemon from "./pages/pokemon/Pokemon";
import Trainer from "./pages/trainer/Trainer";
import Bag from "./pages/bag/Bag";
import Pokedex from "./pages/pokedex/Pokedex";
import Map from "./pages/map/Map";
import Layout from "./util/Layout";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Pokemon />} />
            <Route exact path="/trainer" element={<Trainer />} />
            <Route exact path="/bag" element={<Bag />} />
            <Route exact path="/pokedex" element={<Pokedex />} />
            <Route exact path="/map" element={<Map />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}
