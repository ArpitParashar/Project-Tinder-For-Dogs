import React, { Component } from "react";
import "../style/Liked.css";

export class Liked extends Component {
  state = { b: [], time : [] };
  constructor() {
    super();
    this.b = [];
    this.dates = [];
    this.time = [];
  }

  checkIfVideo = (url) => {
    var index = url.lastIndexOf(".") + 1;
    var extension = url.substring(index)
    if(extension === "mp4" || extension === "ogg" || extension === "webm"){
      return true;
    }
    return false;
  }

  componentDidMount() {
    if (localStorage.getItem("session") != null) {
      this.b = JSON.parse(localStorage.getItem("session"));
      this.dates = JSON.parse(localStorage.getItem("startDate"));
      let startDate = this.dates;

      this.time = startDate.map(startdat => {
        var endDate = new Date();
        var returnTime;
        if ((endDate.getTime() - startdat) / 1000 < 60) {
            returnTime =  Math.round((endDate.getTime() - startdat) / 1000) + " secs ago";
        }
        if ((endDate.getTime() - startdat) / 1000 === 60) {
          returnTime =  " 1 sec ago";
        }
        if ((endDate.getTime() - startdat) / 1000 > 60) {
            returnTime =   Math.round((endDate.getTime() - startdat) / 60000) + " mins ago"
          }
        return returnTime;
      });
    }
    this.setState({
      b: this.b,
      time: this.time
    });
  }

  
  render() {
    if (this.state.b.length) {
      return (
        <div className="container1">
          <h1>Liked Profiles</h1>
          {this.state.b.map((person, index) => (
            <div className="container cardImageContainerList" key={index}>
              
              {this.checkIfVideo(person) ? (
        <video key={person} controls>
        <source src={person}  type="video/mp4" />
        <source src={person} type="video/ogg" />
        <source src={person} type="video/webm" />
      Your browser does not support the video tag.
      </video>
      ) : (
        <img
                src={person}
                key={person}
                alt = "profile pic"
              />
      )}

              <div>
                
                  <p key={person.pics}>Liked: {this.state.time[index]} </p>
                
              </div>
              <br></br>
            </div>
          ))}
        </div>
      );
    } else {
      return (<div className="containerEmpty"><h1>There are no LIKES!</h1></div>);
    }
  }
}

export default Liked;