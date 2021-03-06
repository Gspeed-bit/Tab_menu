import "./App.css";
import { useEffect, useState } from "react";
import { Loading } from "./components/Loading";
import ReactLoading from "react-loading";
import Tabs from "./components/Tabs";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About } from "./components/route/About";
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true); // for the Loading section
  const [tabs, setTabs] = useState([]); // the data fetched will be passed in tabs

  const TabAPIgetter = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setTabs(data); //the result gotten from the API is passed into the setTabs
      setLoading(false); // we need to set the setLoading to false so that it will run the <Tours /> instead of  <Loading />
  
    } catch (err) {
      //here catch is responsible for the error gotten from the API
      setLoading(false);
      console.log(err);
    }
  };

  // component did mount was used here

  useEffect(() => {
    setTimeout(() => {
      TabAPIgetter();
    }, 500);
  }, []);

  // if the loading is true the below condition will be excuted
  if (loading) {
    return (
     
        <div  className=" title loading">
          <Loading className="" />
          <ReactLoading
          className="icon"
          color={"hsl(360, 67%, 44%)"}
            type={"spin"}
          
          />
        </div>
       );
  }

  return (
    <section className="section">
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <main>
              <div>
                <Tabs tabs={tabs} />
              </div>
            </main>
          </div>
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
    </section>
  );
}

export default App;
