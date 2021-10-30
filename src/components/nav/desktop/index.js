import { Component } from "react";
import DropDown from "./dropdown";
import DesktopItem from "./desktoplink";

import { BrowserRouter as Router } from "react-router-dom";

export default class DesktopNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="w-full h-12 sticky bg-blue-200 flex">
        {this.props.navstate.pages.map((pagelink, index) => {
          if (pagelink.subpages) {
            return (
              <DropDown
                globaldata={pagelink}
                pagetitle={pagelink.name}
                pagelink={pagelink.link}
              />
            );
          } else {
            return (
              <DesktopItem pagetitle={pagelink.name} pagelink={pagelink.link} />
            );
          }
        })}
      </div>
    );
  }
}
