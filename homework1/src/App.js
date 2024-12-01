
import './App.css';
import { Provider} from "react-redux";
import store from "./redux/Store";
import Counter from "./counter/Counter";

function App() {
  return (
      <Provider store={store}>
        <Counter/>
      </Provider>
  );
}

export default App;
