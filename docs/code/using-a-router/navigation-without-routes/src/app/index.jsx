import React, { Component } from "react";
import { Home } from "../home";
import { Coffee } from "../coffee";
import { Beer } from "../beer";

export const app = {
  initialState: () => ({
    route: { id: "Home" }
  }),
  actions: update => Object.assign({}, {
    navigateTo: id => update({ route: { id } })
  })
};

const componentMap = {
  Home,
  Coffee,
  Beer
};

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = props.states();
  }

  componentDidMount() {
    this.props.states.map(state => {
      this.setState(state);
    });
  }

  render() {
    const state = this.state;
    const { actions } = this.props;

    const componentId = state.route.id;
    const Component = componentMap[componentId];
    const isActive = tab => tab === componentId ? "active" : "";

    return (
      <div>
        <nav className="navbar navbar-default">
          <ul className="nav navbar-nav">
            <li className={isActive("Home")}>
              <a href="#"
                onClick={() => actions.navigateTo("Home")}
              >Home</a>
            </li>
            <li className={isActive("Coffee")}>
              <a href="#"
                onClick={() => actions.navigateTo("Coffee")}
              >Coffee</a>
            </li>
            <li className={isActive("Beer")}>
              <a href="#"
                onClick={() => actions.navigateTo("Beer")}
              >Beer</a>
            </li>
            <li className="btn">
              <button className="btn btn-default"
                onClick={_evt => actions.navigateTo("Home")}>Home</button>
            </li>
            <li className="btn">
              <button className="btn btn-default"
                onClick={_evt => actions.navigateTo("Coffee")}>Coffee</button>
            </li>
            <li className="btn">
              <button className="btn btn-default"
                onClick={_evt => actions.navigateTo("Beer")}>Beer</button>
            </li>
          </ul>
        </nav>
        <Component state={state} actions={actions} />
        {/* Show or hide the Please Wait modal. See public/css/style.css */}
        <div style={{visibility: state.pleaseWait ? "visible" : "hidden"}}>
          <div className="modal">
            <div className="box">
              <p>Loading, please wait...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
