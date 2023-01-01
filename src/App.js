import "./App.css";
import { store } from "./store";
import { Provider } from "react-redux";
import AppRoutes from "./routes";
function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
