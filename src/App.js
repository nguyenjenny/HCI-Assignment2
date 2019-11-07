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
      "what a monkey sees a monkey will do",
      "a yard is almost as long as a meter",
      "bank transaction was not registered",
      "the presidential suite is very busy",
      "the punishment should fit the crime",
      "keep receipts for all your expenses",
      "where did you get such a silly idea",
      "our housekeeper does a thorough job",
      "granite is the hardest of all rocks",
      "every saturday he folds the laundry",
      "suburbs are sprawling up everywhere",
      "dolphins leap high out of the water",
      "an injustice is committed every day",
      "look in the syllabus for the course",
      "rectangular objects have four sides",
      "a tumor is ok provided it is benign",
      "everybody looses in custody battles",
      "the picket line gives me the chills",
      "neither a borrower nor a lender be",
      "the music is better than it sounds",
      "my car always breaks in the winter",
      "universally understood to be wrong",
      "the protesters blocked all traffic",
      "stiff penalty for staying out late",
      "the pen is mightier than the sword",
      "beautiful paintings in the gallery",
      "this camera takes nice photographs",
      "a security force of eight thousand",
      "interactions between men and women",
      "would you like to come to my house",
      "a feeling of complete exasperation",
      "the cat has a pleasant temperament",
      "he underwent triple bypass surgery",
      "careless driving results in a fine",
      "that sticker needs to be validated",
      "the fire raged for an entire month",
      "labour unions know how to organize",
      "i like baroque and classical music",
      "an inefficient way to heat a house",
      "one hour is allotted for questions",
      "good jobs for those with education",
      "taking the train is usually faster",
      "tell a lie and your nose will grow",
      "staying up all night is a bad idea",
      "motivational seminars make me sick",
      "rejection letters are discouraging",
      "never too rich and never too thin",
      "my favorite subject is psychology",
      "please provide your date of birth",
      "coming up with killer sound bites",
      "soon we will return from the city",
      "i am allergic to bees and peanuts",
      "this is a non profit organization",
      "this mission statement is baloney",
      "sharp cheese keeps the mind sharp",
      "historic meeting without a result",
      "a good joke deserves a good laugh",
      "a dog is the best friend of a man",
      "vote according to your conscience",
      "the rationale behind the decision",
      "electric cars need big fuel cells",
      "shivering is one way to keep warm",
      "try to enjoy your maternity leave",
      "prescription drugs require a note",
      "our life expectancy has increased",
      "raindrops keep falling on my head",
      "do you get nervous when you speak",
      "parking tickets can be challenged",
      "everyone wants to win the lottery",
      "watch out for low flying objects",
      "correct your diction immediately",
      "an occasional taste of chocolate",
      "the acceptance speech was boring",
      "a little encouragement is needed",
      "coalition governments never work",
      "this phenomenon will never occur",
      "this equation is too complicated",
      "the treasury department is broke",
      "the bathroom is good for reading",
      "interesting observation was made",
      "our silver anniversary is coming",
      "good at addition and subtraction",
      "the collapse of the roman empire",
      "traveling requires a lot of fuel",
      "my favourite sport is racketball",
      "the algorithm is too complicated",
      "the plug does not fit the socket",
      "a correction had to be published",
      "the ventilation system is broken",
      "the coronation was very exciting",
      "so you think you deserve a raise",
      "what to do when the oil runs dry",
      "a rattle snake is very poisonous",
      "only an idiot would lie in court",
      "put garbage in an abandoned mine",
      "the opposing team is over there",
      "i am wearing a tie and a jacket",
      "my preferred treat is chocolate",
      "the king sends you to the tower",
      "reading week is just about here",
      "the postal service is very slow",
      "i skimmed through your proposal",
      "quick there is someone knocking",
      "not quite so smart as you think",
      "in sharp contrast to your words",
      "this leather jacket is too warm",
      "acutely aware of her good looks",
      "a glance in the right direction",
      "an airport is a very busy place",
      "is there any indication of this",
      "valid until the end of the year",
      "a good response to the question",
      "prepare for the exam in advance",
      "house with new electrical panel",
      "the registration period is over",
      "a very traditional way to dress",
      "never mix religion and politics",
      "players must know all the rules",
      "your presentation was inspiring",
      "her majesty visited our country",
      "the hopes of a new organization",
      "important for political parties",
      "an excellent way to communicate",
      "arguing with the boss is futile",
      "presidents drive expensive cars",
      "traveling to conferences is fun",
      "the first time he tried to swim",
      "physics and chemistry are hard",
      "circumstances are unacceptable",
      "if at first you do not succeed",
      "prayer in schools offends some",
      "great disturbance in the force",
      "question that must be answered",
      "double double toil and trouble",
      "i took the rover from the shop",
      "there will be some fog tonight",
      "goldilocks and the three bears",
      "hands on experience with a job",
      "take it to the recycling depot",
      "win first prize in the contest",
      "they love to yap about nothing",
      "he played a pimp in that movie",
      "seasoned golfers love the game",
      "i can still feel your presence",
      "i spilled coffee on the carpet",
      "the largest of the five oceans",
      "shall we play a round of cards",
      "sprawling subdivisions are bad",
      "a lot of chlorine in the water",
      "universities are too expensive",
      "go out for some pizza and beer",
      "exceed the maximum speed limit",
      "destruction of the rain forest",
      "file all complaints in writing",
      "a touchdown in the last minute",
      "your etiquette needs some work",
      "pay off a mortgage for a house",
      "the gun discharged by accident",
      "rapidly running short on words",
      "it is difficult to concentrate",
      "give me one spoonful of coffee",
      "get aboard the ship is leaving",
      "bring the offenders to justice",
      "a subject one can really enjoy",
      "the proprietor was unavailable",
      "be discreet about your meeting",
      "the chancellor was very boring",
      "jumping right out of the water",
      "why do you ask silly questions",
      "prevailing wind from the east",
      "i can see the rings on saturn",
      "he is just like everyone else",
      "can i skate with sister today",
      "movie about a nutty professor",
      "wear a crown with many jewels",
      "the dow jones index has risen",
      "we are subjects and must obey",
      "head shoulders knees and toes",
      "video camera with a zoom lens",
      "i do not fully agree with you",
      "parking lot is full of trucks",
      "a duck quacks to ask for food",
      "limited warranty of two years",
      "no more war no more bloodshed",
      "i listen to the tape everyday",
      "do you like to shop on sunday",
      "flashing red light means stop",
      "public transit is much faster",
      "the imagination of the nation",
      "listen to five hours of opera",
      "work hard to reach the summit",
      "the fourth edition was better",
      "i just cannot figure this out",
      "obligations must be met first",
      "a picture is worth many words",
      "express delivery is very fast",
      "the generation gap gets wider",
      "the objective of the exercise",
      "medieval times were very hard",
      "please keep this confidential",
      "these barracks are big enough",
      "sing the gospel and the blues",
      "the water was monitored daily",
      "a big scratch on the tabletop",
      "meet tomorrow in the lavatory",
      "the insulation is not working",
      "please take a bath this month",
      "they watched the entire movie",
      "faster than a speeding bullet",
      "be persistent to win a strike",
      "exercise is good for the mind",
      "lie detector tests never work",
      "experience is hard to come by",
      "my bank account is overdrawn",
      "elections bring out the best",
      "elephants are afraid of mice",
      "three two one zero blast off",
      "popularity is desired by all",
      "i am going to a music lesson",
      "all together in one big pile",
      "what you see is what you get",
      "the early bird gets the worm",
      "healthy food is good for you",
      "travel at the speed of light",
      "earth quakes are predictable",
      "sent this by registered mail",
      "a fox is a very smart animal",
      "i do not care if you do that",
      "he cooled off after she left",
      "these cookies are so amazing",
      "my mother makes good cookies",
      "where did i leave my glasses",
      "victims deserve more redress",
      "consequences of a wrong turn",
      "machinery is too complicated",
      "please follow the guidelines",
      "six daughters and seven sons",
      "there are winners and losers",
      "get your priorities in order",
      "longer than a football field",
      "a psychiatrist will help you",
      "you should visit to a doctor",
      "you must make an appointment",
      "do not feel too bad about it",
      "we must redouble our efforts",
      "peering through a small hole",
      "just like it says on the can",
      "people blow their horn a lot",
      "the high waves will swamp us",
      "nothing wrong with his style",
      "learn to walk before you run",
      "apartments are too expensive",
      "just what the doctor ordered",
      "you are a wonderful example",
      "drove my chevy to the levee",
      "the assignment is due today",
      "the store will close at ten",
      "the laser printer is jammed",
      "all good boys deserve fudge",
      "world population is growing",
      "the library is closed today",
      "teaching services will help",
      "this watch is too expensive",
      "get rid of that immediately",
      "he was wearing a sweatshirt",
      "effort is what it will take",
      "every apple from every tree",
      "chemical spill took forever",
      "relations are very strained",
      "the aspirations of a nation",
      "the assault took six months",
      "the union will go on strike",
      "it should be sunny tomorrow",
      "this library has many books",
      "that is a very odd question",
      "the fire blazed all weekend",
      "two or three cups of coffee",
      "companies announce a merger",
      "we dine out on the weekends",
      "fine but only in moderation",
      "completely sold out of that",
      "luckily my wallet was found",
      "sit at the front of the bus",
      "do you prefer a window seat",
      "the food at this restaurant",
      "what goes up must come down",
      "do not lie in court or else",
      "most judges are very honest",
      "my watch fell in the water",
      "my favorite place to visit",
      "we run the risk of failure",
      "an offer you cannot refuse",
      "valium in the economy size",
      "the quick brown fox jumped",
      "vanilla flavored ice cream",
      "frequently asked questions",
      "the second largest country",
      "just in time for the party",
      "the back yard of our house",
      "our fax number has changed",
      "no exchange without a bill",
      "this is too much to handle",
      "gas bills are sent monthly",
      "fall is my favorite season",
      "the four seasons will come",
      "i can play much better now",
      "always cover all the bases",
      "superman never wore a mask",
      "where did you get that tie",
      "olympic athletes use drugs",
      "make up a few more phrases",
      "where can my little dog be",
      "are you sure you want this",
      "mystery of the lost lagoon",
      "tickets are very expensive",
      "well connected with people",
      "we better investigate this",
      "the minimum amount of time",
      "one of the poorest nations",
      "if diplomacy does not work",
      "he watched in astonishment",
      "a coupon for a free sample",
      "the cream rises to the top",
      "the trains are always late",
      "spill coffee on the carpet",
      "find a nearby parking spot",
      "a problem with the engine",
      "do not squander your time",
      "mom made her a turtleneck",
      "for your information only",
      "information super highway",
      "we accept personal checks",
      "communicate through email",
      "the capital of our nation",
      "the kids are very excited",
      "the sun rises in the east",
      "want to join us for lunch",
      "she wears too much makeup",
      "can we play cards tonight",
      "i watched blazing saddles",
      "do a good deed to someone",
      "on the way to the cottage",
      "if you were not so stupid",
      "do you like to go camping",
      "this person is a disaster",
      "you will loose your voice",
      "you want to eat your cake",
      "the voters turfed him out",
      "the fax machine is broken",
      "february has an extra day",
      "no kissing in the library",
      "the most beautiful sunset",
      "the location of the crime",
      "the stock exchange dipped"
    ];
    return phrases.sort(() => Math.random() - 0.5);
  };
  randomizeTrials = id => {
    // TODO: randomize stff
    // 38 mm --> 0.2405
    const scale38 = 0.2405;
    const scale42 = 0.269;
    const reps = 16;

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
    const test = Array(1)
        .fill(a)
        .concat(Array(1).fill(b))
        .concat(Array(1).fill(c))
        .concat(Array(1).fill(d));
      

    if (id === 1) {
      return participant1;
    } else if (id == 2) {
      return participant2;
    } else if (id == 3) {
      return participant3;
    } else if (id == 4) {
      return participant4;
    } else if (id === 'test') {
        return test;  
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
