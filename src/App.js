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
import { constants } from "http";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ""
    };
  }

  getPhrases = () => {
    const phrases = [
      "a quarter of a century",
      "buckle up for safety",
      "call for more details",
      "communicate through email",
      "did you have a good time",
      "do not drink too much",
      "do not squander your time",
      "for your information only",
      "goldilocks and the three bears",
      "hands on experience with a job",
      "have a good weekend",
      "head shoulders knees and toes",
      "just in time for the party",
      "mom made her a turtleneck",
      "no exchange without a bill",
      "our fax number has changed",
      "popularity is desired by all",
      "reading week is just about here",
      "space is a high priority",
      "starlight and dewdrop",
      "take a coffee break",
      "thank you for your help",
      "that is very unfortunate",
      "the assignment is due today",
      "the back yard of our house",
      "the early bird gets the worm",
      "the living is easy",
      "the music is better than it sounds",
      "the postal service is very slow",
      "the store will close at ten",
      "this is a very good idea",
      "this is too much to handle",
      "this watch is too expensive",
      "video camera with a zoom lens",
      "we are subjects and must obey",
      "we went grocery shopping",
      "what a monkey sees a monkey will do",
      "what you see is what you get",
      "you are a wonderful example"
    ];
    return phrases.sort(() => Math.random() - 0.5);
  };
  randomizeTrials = id => {
    // TODO: randomize stff
    // 38 mm --> 0.2405
    const scale38 = 0.2405;
    const scale42 = 0.269;
    const reps = 3;

    const a = {
      type: "normal",
      scale: scale38
    };

    const b = {
      type: "normal",
      scale: scale42
    };

    const c = {
      type: "zoom",
      scale: scale38
    };

    const d = {
      type: "zoom",
      scale: scale42
    };

    const participant1 = Array(reps)
      .fill(a)
      .concat(Array(reps).fill(b))
      .concat(Array(reps).fill(c))
      .concat(Array(reps).fill(d));
    const participant2 = Array(reps)
      .fill(b)
      .concat(Array(reps).fill(d))
      .concat(Array(reps).fill(a))
      .concat(Array(reps).fill(c));
    const participant3 = Array(reps)
      .fill(d)
      .concat(Array(reps).fill(c))
      .concat(Array(reps).fill(b))
      .concat(Array(reps).fill(a));
    const participant4 = Array(reps)
      .fill(c)
      .concat(Array(reps).fill(a))
      .concat(Array(reps).fill(d))
      .concat(Array(reps).fill(b));

    if (id === 1) {
      return participant1;
    } else if (id === 2) {
      return participant2;
    } else if (id === 3) {
      return participant3;
    } else if (id === 4) {
      return participant4;
    } else {
      return participant1;
    }
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
              <input type="text" name="id" required="true" />
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
              <Watch
                {...props}
                trials={this.randomizeTrials(id)}
                id={id}
                phrases={this.getPhrases()}
              />
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
