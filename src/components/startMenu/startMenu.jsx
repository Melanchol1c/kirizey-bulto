import React, { Component } from "react";
import "./startMenu.scss";
import Tilt from "react-tilt";

class StartMenu extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="start-menu__wrap">
          <section className="start-menu">
            <Tilt className="Tilt" options={{ max: 7, scale: 1 }}>
              <h1 className="start-menu__title">Kirizey Bulto</h1>
              <div className="start-menu__selection-block">
                <div className="selection-block__selection-item selection-block__selection-item--left">
                  <h2 className="selection-item__title">Task Manager</h2>
                  <p className="selection-item__description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Labore adipisci unde possimus dicta vero nobis voluptatum
                    consequuntur animi officiis pariatur?
                  </p>
                </div>
                <div className="selection-block__selection-item selection-block__selection-item--right">
                  <h2 className="selection-item__title">Budget Manager</h2>
                  <p className="selection-item__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae, ab quos adipisci nemo ducimus tenetur veniam?
                    Cumque nihil autem maxime.
                  </p>
                </div>
              </div>
            </Tilt>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default StartMenu;
