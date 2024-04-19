import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.scss";
import Layout from "./layout/layout";
import Main from "./pages/main/main";
import PlayListPage from "./pages/playList";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="playlist/:id" element={<PlayListPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
