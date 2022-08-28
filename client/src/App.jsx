import { Routes, Route, Navigate } from "react-router-dom";

import Home from "pages/home";
import NotFound from "pages/notFound";

import config from "config.json";

const App = () => {
  return (
    <Routes>
      <Route path={config.routes.client.notFound} element={<NotFound />} />
      <Route path={config.routes.client.home} element={<Home />} />
      <Route
        path="/"
        element={<Navigate to={config.routes.client.home} replace />}
      />
      <Route
        path="*"
        element={<Navigate to={config.routes.client.notFound} replace />}
      />
    </Routes>
  );
};

export default App;
