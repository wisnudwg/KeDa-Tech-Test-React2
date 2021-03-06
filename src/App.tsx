import React from 'react';
import logo from './logo.svg';
import './App.css';
import RadioButton from './components/radio-button/radio-button';

class App extends React.Component {

  // variables related to RadioButton component props //
  public radioButtonStringLabel = "RadioButtonStringLabel";

  public radioButtonNumberLabel = 3.14;
  
  public radioButtonSubComponents = 
    <div>
      RadioButtonSubComponent 1<br />
      RadioButtonSubComponent 2
    </div>;
  
  public radioButtonChildren = 
    <div>
      <p>This is the direct child of this RadioButton component</p>
      <RadioButton name="choose-layer">
        <p>This is the child of the first nested RadioButton component</p>
        <form className="inner-form">
          <label>Date of admission&nbsp;: </label>
          <input type="date" name="date-of-admission" />
        </form>
        <RadioButton name="choose-layer">
          <p>This is the child of the second nested RadioButton component</p>
          <form className="inner-form">
            <label>Username&nbsp;: </label>
            <input type="text" placeholder="username" name="username" />
          </form>
        </RadioButton>
      </RadioButton>
    </div>
    //////////////////////////////////////////////////////////////////////////

  componentDidMount() {
    console.log("App Component is rendered!");
  }

  componentWillUnmount() {
    console.log("App Component is torn down!");
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <p>The default <code>React</code> template is kept for now just because I like it</p>
        <br />
        {<img src={logo} className="App-logo" alt="logo" />}
        <br />
        <div className="radio-button-info">
          <p><i>Note :</i></p> 
          <ol>
            <li>
              this <code>RadioButton</code> component inherits attributes of <code>{'{'}input type="radio"{'}'}</code>
            </li>
            <li>
              just as with <code>{'{'}input type="radio" name="..."{'}'}</code>, assigning identical <code>name</code> attribute to a group of <code>RadioButton</code>s results in identical <i>auto-switch</i> behavior of its' predecessor 
            </li>
            <li>
              therefore, no additional libraries are added to facilitate the development of this <code>RadioButton</code> component
            </li>
            <li>
              current version of the <code>RadioButton</code> component does not involve any custom <i>state manipulation</i> logic
            </li>
          </ol>
        </div>
        <br />
        <div className="radio-button-group">
          <p><i>Demo :</i></p>
          <ol>
            <li>The 3 options below share the same <code>name</code> property</li>
            <li>Both nested inner radio buttons of option 3 share the same <code>name</code> property</li>
          </ol>
          <RadioButton label={this.radioButtonNumberLabel} name="radio-group"/>
          <RadioButton label={this.radioButtonStringLabel} name="radio-group"/>
          <RadioButton subComponents={this.radioButtonChildren} name="radio-group"/>
        </div>
        <p>
          Edit <i>src/App.tsx</i> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
      </header>
    </div>
  );
  }
}

export default App;
