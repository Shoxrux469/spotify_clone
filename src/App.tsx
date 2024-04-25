import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/styles/index.scss";
import Layout from "./layout/layout";
import Main from "./pages/main/main";
import PlayListPage from "./pages/playList/playList";
import Search from "./pages/search/search";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="playlist/:id" element={<PlayListPage />} />
          <Route path="search" element={<Search />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
