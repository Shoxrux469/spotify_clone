import { Route, Routes } from "react-router";
import "./index.scss";
import Layout from "./layout/layout";
import Main from "./pages/main/main";
import LogIn from "./components/common/logIn";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="login" element={<LogIn />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Layout>
  );
}

export default App;

// {
/* <Layout>
  <Routes>
    <Route path="login" element={<LogIn />} />
    <Route path="/" element={<Main />} />
  </Routes>
</Layout>; */
// }
