import "./App.css";
import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";
import CounterFeature from "./features/Counter";
import { Route, Switch } from "react-router-dom";
import Header from "components/Header";
import ProductFeature from "features/Product";

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Switch>
        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/products" component={ProductFeature} />
      </Switch>
    </div>
  );
}

export default App;
