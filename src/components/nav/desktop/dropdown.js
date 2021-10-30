import { Component } from "react";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";


export default class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isopen: false,
    };
    this.handleclick = this.handleclick.bind(this);
    this.handleblur = this.handleblur.bind(this);
  }
  handleclick() {
    this.setState({ isopen: !this.state.isopen });
  }

  handleblur() {
    this.setState({ isopen: false });
  }
  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      this.handleclick();
    }
  };

  render() {
    if (this.state.isopen === true) {
      var stylehyde = "flow-root bg-white text-center ";
    } else {
      var stylehyde = "hidden";
    }

    return (
      <div
        onKeyPress={this.handleKeyPress}
        tabIndex="0"
        onBlur={this.handleblur}
        className="flex-1 text-center"
      >
        <Link to={this.props.pagelink} >
          <h2>{this.props.pagetitle}</h2>
        </Link>
        <svg
          onClick={this.handleclick}
          fill="currentColor"
          viewBox="0 0 20 20"
          className="inline w-4 h-4 ml-1 transition-transform duration-200 transform md:-mt-1"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>

        <div className={stylehyde}>
          {this.props.globaldata.subpages.map((dropdowns, index) => {
            return (
              <Link to={dropdowns.link} key={index} >
                <h3 className="hover:bg-gray-100">{dropdowns.name}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
