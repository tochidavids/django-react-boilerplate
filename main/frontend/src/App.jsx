import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Boards from "./pages/u/Boards";

function App() {

  return (
    <>test
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Boards />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
