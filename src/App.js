import "App.css";
import { Provider } from "react-redux";
import Root from "routes";
import store from "store";
import "style/index.scss";
import PrerenderTailwind from "views/prerender/PrerenderTailwind";

function App() {
  return (
    <Provider store={store}>
      <PrerenderTailwind />
      <Root />
    </Provider>
  );
}

export default App;
