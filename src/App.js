//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import char from "./char.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    char,
    clickedChar: [],
    score: 0,
    hiscore: 0
  };

//when you click on a card ... the char is taken out of the array
  imageClick = event => {
    const currentChar = event.target.alt;
    const CharAlreadyClicked =
      this.state.clickedChar.indexOf(currentChar) > -1;

//if you click on a char that has already been selected, the game is reset and cards reordered
    if (CharAlreadyClicked) {
      this.setState({
        char: this.state.char.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedChar: [],
        score: 0
      });
        alert("You lose");

//if you click on an available char, your score is increased and cards reordered
    } else {
      this.setState(
        {
          char: this.state.char.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedChar: this.state.clickedChar.concat(
            currentChar
          ),
          score: this.state.score + 1
        },
//if you get all 12 characters correct you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("You Win!");
            this.setState({
              char: this.state.char.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedChar: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
          hiscore={this.state.hiscore}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.char.map(char => (
            <FriendCard
              imageClick={this.imageClick}
              id={char.id}
              key={char.id}
              image={char.image}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;