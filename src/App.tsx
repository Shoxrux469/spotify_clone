import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.scss";
import Layout from "./layout/layout";
import Main from "./pages/main/main";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
