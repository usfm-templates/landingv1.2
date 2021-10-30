import { Component } from "react";
import { Link } from "react-router-dom";

export default class DesktopItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="inline-block mx-8 pt-2">
        <Link to={this.props.pagelink} >
        {this.props.pagetitle}
        </Link>
      </div>
    );
  }
}
