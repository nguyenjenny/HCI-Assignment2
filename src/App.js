/***********************************************
 * CSC428/2514 - St. George, Fall 2019
 *
 * File: App.js
 * Summary: Routing details are implemented here.
 *
 **********************************************/
/**
 * Libraries
 */
import React from "react";
import { Route } from "react-router-dom";
import Watch from "./components/Watch";
import MetaTags from "react-meta-tags";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
    };
  }
  randomizeTrials = () => {
    // TODO: randomize shit here
    return [
      {
        type: "normal",
        scale: 0.112,
        targetPhrase: "my watch fell in the water"
      },
      {
        type: "zoom",
        scale: 0.103,
        targetPhrase: "breathing is difficult"
      },
      {
        type: "normal",
        scale: 0.103,
        targetPhrase: "a problem with the engine"
      },
    ];
  };

  onSubmit = event => {
    event.preventDefault();
    const { currentTarget } = event;
    this.setState({ id: currentTarget.id.value });
  };
  /**
   * Routing rules will be describing here.
   * You can set your own Routing rules. In current settings,
   * You can access a Watch interface with 'type' and 'scaleVal'
   * e.g. : http://{ADDRESS}:{PORT}/{TYPE}/{SCALE_VALUE}
   * Type : This property will determine which version of text entry system
   *         you are going to use.
   *          'normal': baseline condition, normal keyboard
   *          'zoom'  : A keyboard has a zoom function.
   * ScaleValue: This property will determine your watch screen size.
   *          In previous Starter code, we define a screen size either 'size', 'devicePPI' or
   *          'originalScale' values. Here, you have to use only scale value.
   *          For example, you can use 0.112 for AppleWatch size 42mm and
   *                      0.103 for AppleWatch size 38mm.
   *          default value is 0.15
   */
  render() {
    // With the following rules,
    // You have three routes, (assuming you are running on localhost with 3000 port)
    // 1. localhost:3000
    // 2. localhost:3000/type/scaleVal. > e.g. http://localhost:3000/normal/0.15
    // You can add more rules.
    const { id } = this.state;
    return (
      <div className="wrapper">
        {id.length === 0 && (
          <form onSubmit={this.onSubmit}>
            <label>
              Participant ID:
              <input type="text" name="id" required="true"  />
            </label>
            <input type="submit" value="Submit" />
          </form>
        )}
        <MetaTags>
          <meta
            name="viewport"
            content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
          ></meta>
        </MetaTags>
        {id && (
          <Route
            exact
            path="/"
            render={props => (
              <Watch {...props} trials={this.randomizeTrials()} id={id} />
            )}
          />
        )}
        {id && (
          <Route exact path="/:type/:scaleVal" component={Watch} id={id} />
        )}
      </div>
    );
  }
}

export default App;
