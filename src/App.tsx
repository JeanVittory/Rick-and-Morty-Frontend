import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { reduxStore } from "./redux/store";
import { Header } from "./components/Header.components";
import { AllCharactersContainer } from "./utilities/LazyComponents";
import { SingleCharacterContainer } from "./utilities/LazyComponents";
import { Suspense } from "react";
import { Spinner } from "./components/Spinner";

function App() {
  return (
    <div>
      <Provider store={reduxStore}>
        <Router>
          <Header />
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<AllCharactersContainer />} />
              <Route
                path="character/:id"
                element={<SingleCharacterContainer />}
              />
            </Routes>
          </Suspense>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
