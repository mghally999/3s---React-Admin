import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Layout from "./components/Layout";
import GridPage from "./pages/GridPage";
import LargeDataGrid from "./pages/LargeDataGrid";
import MultiTabForm from "./pages/MultiTabForm";
import ViewEditPage from "./pages/ViewEditPage";
import "./i18n";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<GridPage />} />
            <Route path="/large-data" element={<LargeDataGrid />} />
            <Route path="/multi-tab-form" element={<MultiTabForm />} />
            <Route path="/view/:id" element={<ViewEditPage />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
