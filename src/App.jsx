import "./App.css";
import AppRoutes from "./routes";
import { store } from "./store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { ConfigProvider } from "./contexts/config-context";
import Locales from "./utils/locales";

library.add(fas, far);

const queryClient = new QueryClient();
function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider>
          <Locales>
            <AppRoutes />
          </Locales>
        </ConfigProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
