import React from "react";
import { hot } from "react-hot-loader";
import styles from "./app.module";

function App() {
  return <h2 className={styles.red}>This is our React application!</h2>;
}

export default hot(module)(App);