// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import React, { useState } from "react";
import News from "./Components/News";
// import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setprogress] = useState(30);

  const setProgress = (progress) => {
    setprogress(progress);
  };

  let apiKey = "9790ddecdaac4643875baab207e3a25d";
  //"4d4de247914f4b219af6ae9969771ae1"
  //"842973678ff1498888fab7d182f17f96";
  let pageSize = "21";
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <LoadingBar
          color="#f11946"
          progress={progress}
          // onLoaderFinished={this.setProgress(100)}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="home"
                pageSize={pageSize}
                apiKey={apiKey}
                country="in"
                category="general"
              ></News>
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                pageSize={pageSize}
                apiKey={apiKey}
                country="in"
                category="business"
              ></News>
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                pageSize={pageSize}
                apiKey={apiKey}
                country="in"
                category="entertainment"
              ></News>
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                apiKey={apiKey}
                country="in"
                category="general"
              ></News>
            }
          />

          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key="health"
                pageSize={pageSize}
                apiKey={apiKey}
                country="in"
                category="health"
              ></News>
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                pageSize={pageSize}
                apiKey={apiKey}
                country="in"
                category="science"
              ></News>
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
                apiKey={apiKey}
                country="in"
                category="sports"
              ></News>
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                pageSize={pageSize}
                apiKey={apiKey}
                country="in"
                category="technology"
              ></News>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
