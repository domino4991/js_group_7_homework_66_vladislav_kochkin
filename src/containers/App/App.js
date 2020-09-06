import React from 'react';
import './App.css';
import Layout from "../../components/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import AboutPage from "../AboutPage/AboutPage";
import ContactsPage from "../ContactsPage/ContactsPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contacts" component={ContactsPage} />
        <Route render={() => <h1>404 not found</h1>} />
      </Switch>
    </Layout>
  );
}

export default App;
