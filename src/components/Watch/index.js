/***************************************************
 * CSC428/2514 - St. George, Fall 2019
 *
 * File: watch.js
 * Summary: Watch Component
 *
 * The code is commented, and the comments provide information
 * about what each js file is doing.
 *
 ****************************************************/

/**
 * Libraries
 */
import React from "react";
import "../../index.css";
import KeyboardNormal from "../../keyboard.normal";
import KeyboardZoom from "../../keyboard.wip";

/**
 * Functions
 */

/**
 * @Deprecated.
 * Calculate watch size (width and height) in pixels.
 * 	if you decide to use exact AppleWatch size, use this function to get width and height.
 * @param: ppi , your device independent pixel per inch. Can be acheived from the web.
 * @param: watchSize, default apple watch size, 38mm or 42mm.
 * 			other size value will be return zero in size.
 */
const deviceIndependenceSize = (ppi, watchSize) => {
  var width, height, deviceWidthInPixel, deviceHeightInPixel;
  if (watchSize === 42) {
    // AppleWatch Series 3 + size 42mm has a resolution of 312x390 px, 302 ppi
    //	DeviceSize: {Width:33.3, Height: 38.6mm}
    //	ScreenSize: {Width: 26mm , Height: 33mm}
    width = 26;
    height = 33;
    deviceWidthInPixel = (width / 25.4) * ppi;
    deviceHeightInPixel = (height / 25.4) * ppi;
    return { width: deviceWidthInPixel, height: deviceHeightInPixel };
  } else if (watchSize === 38) {
    // AppleWatch Series 3 + size 38mm has a resolution of 272x340 px, 290 ppi
    // 	DeviceSize: {Width: 33.3mm, Height:42.5mm}
    //	ScreenSize: {Width: 24mm, Height: 30mm}
    width = 24;
    height = 30;
    deviceWidthInPixel = (width / 25.4) * ppi;
    deviceHeightInPixel = (height / 25.4) * ppi;
    return { width: deviceWidthInPixel, height: deviceHeightInPixel };
  } else {
    return { width: 0, height: 0 };
  }
};

/**
 * Download user typed content and target phrases
 * you can and should add more measurements
 * that you recorded in your study into the text parameter
 * so that you can save them into a file
 * @param {*} text:
 * @param {*} name:
 * @param {*} type:
 */
function download(text, name, type) {
  // console.log(JSON.parse(text));
  var a = document.createElement("a");
  var file = new Blob([text], { type: type });
  a.href = URL.createObjectURL(file);
  a.download = name;
  a.click();
}

/**
 * Watch Class
 * This class extends React.Component
 */
class Watch extends React.Component {
  /**
   * Constructor
   * @param {} props: a paramater which enables you to access
   * 			values passed from parent Componenet(or Node).
   * 			e.g., if you pass 'value' as 5 in Watch component
   * 				<Watch value={5}/>
   * 				you can access by calling 'this.props.value'
   * 				props are immutable.
   */
  constructor(props) {
    super(props);

    //Your URL parameter can be accessed with following syntax.
    this.type = props.types || props.match.params.type;

    const updatedTrials = [...props.trials];
    updatedTrials.forEach((trial, index) => {
      if (!trial.scale) {
        updatedTrials[index].scale = props.match.params.scaleVal;
      }
    });
    this.trials = updatedTrials;

    // React Component States.
    // inputPhrase: a variable containing all characters typed by users.
    // if 'inputPhrase' value has changed by onKeyCharReceived(),
    // Watch Component will re-render the interface if the state has changed by calling
    // 	setState({});
    this.state = {
      inputPhrase: "",
      keyPressedTimes: 0,
      inputText: "",
      trialIndex: 0,
      time: 0,
	  timer: null,
	  deleteTimes: 0,
    };

    //add the target phrases here or load them from external files
    this.sessionIndex = 0;

    // For Debug, uncomment only if you want to measure exact width and height in pixels.
    // Following codes won't be affected on any of your code.

    // var size42 = deviceIndependenceSize(112,42);
    // console.log("AppleWatch 42mm => "+size42.width +"/"+size42.height);
    // var size38 = deviceIndependenceSize(112,38);
    // console.log("AppleWatch 38mm => "+size38.width +"/"+size38.height);
  }

  /**
   * Callback for input character changes.
   * @param {} c: changed character
   *
   * This callback will be passed to child (Keyboard components, in our case).
   * when the input character received, it changes inputPhrase state.
   */
  onKeyCharReceived = c => {
    const { time } = this.state;
    if (time === 0) {
      const timer = setInterval(() => {
        this.setState(prevState => {
          return { time: prevState.time + 1 };
        });
      }, 1);
      this.setState({ timer });
    }

    this.setState(prevState => {
      const { inputPhrase, keyPressedTimes, inputText, deleteTimes } = prevState;
      return {
        inputPhrase: inputPhrase + c,
        keyPressedTimes: keyPressedTimes + 1,
        inputText:
          c === "-delete-"
            ? inputText.substring(0, inputText.length - 1)
			: inputText + c,
		deleteTimes:
			c === "-delete-"
			? deleteTimes + 1
			: deleteTimes 

      };
    });
  };

  //log data to files
  //this sample code only logs the target phrase and the user's input phrases
  //TODO: you need to log other measurements, such as the time when a user inputs each char, user id, etc.
  saveData = () => {
    let log_file = JSON.stringify({
	  id: this.props.id,	
      trial: this.trials[this.state.trialIndex],
	  inputPhrase: this.state.inputPhrase,
	  inputText: this.state.inputText,
      keyPressedTimes: this.state.keyPressedTimes,
	  time: this.state.time,
	  deleteTimes: this.state.deleteTimes
    });


    clearInterval(this.state.timer);

    var fileName = "participant_" +  this.props.id + "_trial_" + (this.state.trialIndex + 1) + ".txt";
    download(log_file, fileName, "text/plain"); // here I using sessionIndex to set the file name, as this is a one time parameters, it can be a temp local variables here.

    //After download, Reset variables here
    const isLastTrial = this.state.trialIndex === this.trials.length - 1;

    if (!isLastTrial) {
      this.setState(prevState => {
        const { trialIndex } = prevState;
        return {
          inputPhrase: "",
          keyPressedTimes: 0, // new variable within the this.state
          inputText: "",
          trialIndex: trialIndex + 1,
          timer: null,
		  time: 0,
		  deleteTimes: 0
        };
      });
      this.sessionIndex += 1; // update the sessionIndex here
    }
  };

  onTextClear = () => {
    this.setState({
      inputPhrase: ""
    });
    // console.log('Text Area cleared', this.state.text)
  };

  /**
   * Render function()
   * This function will return UI of the system.
   *	It will return different text-entry system, depending on which
   *	type property you did pass from index.js
   */
  render() {
    const { id } = this.props;
    const { trialIndex } = this.state;
	const { scale, targetPhrase, type } = this.trials[trialIndex];
    // style={{}} is an inline styling with calculated screen size
    if (type) {
      return (
		<>  
		<h2> The phrase is</h2>
		
        <div className="watch">
		<label>
            {targetPhrase}
        </label>
          <div className="typed">{this.state.inputText}</div>
          {type === "normal" ? (
            <KeyboardNormal
              originalScale={scale}
              onKeyCharReceived={this.onKeyCharReceived}
            />
          ) : (
            <KeyboardZoom
              originalScale={scale}
              onKeyCharReceived={this.onKeyCharReceived}
            />
          )}
          <button onClick={this.saveData}>SAVE</button>
		  <p><b>Participant ID: {id}</b></p>
        </div>
		</>
      );
    } else {
      // exception
      return (
        <p>
          [Rendering Failed] You have got wrong parameters. Check your 'type'
          property
        </p>
      );
    }
  }
}

export default Watch;
