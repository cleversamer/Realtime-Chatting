import { Routes, Route, Navigate } from "react-router-dom";

import Chat from "pages/Chat";
import NotFound from "pages/notFound";
import Register from "pages/Register";
import Login from "pages/Login";

import config from "config.json";

const App = () => {
  return (
    <Routes>
      <Route path={config.routes.client.register} element={<Register />} />
      <Route path={config.routes.client.login} element={<Login />} />
      <Route path={config.routes.client.notFound} element={<NotFound />} />
      <Route path={config.routes.client.home} element={<Chat />} />
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
