import React, { Component } from "react";

import Swipeable from "react-swipy";
import "./style/app.css";
import Card from "./components/Card";
import Button from "./components/Button";

class Deck extends Component {
  state = {
    cards: "",
    video: false,
    loaded: false
  };
  constructor() {
    super();
    this.a = [];
    this.dates = [];
  }

  acceptOrReject = dir => {
    if (dir === "right") {
      this.a.push(this.state.cards);
      var newdate = new Date();

      this.dates.push(newdate.getTime());

      localStorage.setItem("session", JSON.stringify(this.a));
      localStorage.setItem("startDate", JSON.stringify(this.dates));
    }
  };

  checkIfVideo = (url) => {
    var index = url.lastIndexOf(".") + 1;
    var extension = url.substring(index)
    if(extension === "mp4" || extension === "ogg" || extension === "webm"){
      return true;
    }
    return false;
  }

  componentDidMount() {
    fetch("https://random.dog/woof.json?ref=apilist.fun")
      .then(res => res.json())
      .then(json => {
        this.setState({
          cards: json.url,
          video : this.checkIfVideo(json.url),
          loaded: true
        });
      });
      if (localStorage.getItem("session") != null) {
        this.a = JSON.parse(localStorage.getItem("session"));
        this.dates = JSON.parse(localStorage.getItem("startDate"));
      }
  }

  remove = () => {
    this.setState({
      cards: "",
      loaded: false
    });

    fetch("https://random.dog/woof.json?ref=apilist.fun")
      .then(res => res.json())
      .then(json => {
        this.setState({
          cards: json.url,
          video : this.checkIfVideo(json.url),
          loaded: true
        });
      });
  };
  render() {
    const { cards, video, loaded } = this.state;

    return (
      <div className="appStyles">
        <div className="cardImageContainer wrapperStyles">
          {cards.length > 0 && loaded && (
            <div  className="cardImage wrapperStyles">
              <Swipeable
                buttons={({ right, left }) => (
                  <div className="actionsStyles">
                    <Button onClick={left}>Reject</Button>
                    <Button onClick={right}>Accept</Button>
                  </div>
                )}
                onSwipe={dir => this.acceptOrReject(dir)}
                onAfterSwipe={this.remove}
              >
                <Card>
                {video ? (
        <video width="250" height="290" controls>
        <source src={cards} type="video/mp4" />
        <source src={cards} type="video/ogg" />
        <source src={cards} type="video/webm" />
      Your browser does not support the video tag.
      </video>
      ) : (
        <img
        src={cards}
        alt="profilePicture"
      />
      )}
                </Card>
              </Swipeable>
              {cards.length > 1 && (
                <Card zIndex={-1}>
                  {video ? (
        <video width="250" height="290" controls>
        <source src={cards} type="video/mp4" />
        <source src={cards} type="video/ogg" />
        <source src={cards} type="video/webm" />
      Your browser does not support the video tag.
      </video>
      ) : (
        <img
        src={cards}
        alt="profilePicture"
      />
      )}
                </Card>
              )}
            </div>
          )}
          {cards.length <= 1 && <Card zIndex={-2}>Loading...</Card>}
        </div>
      </div>
    );
  }
}
export default Deck;