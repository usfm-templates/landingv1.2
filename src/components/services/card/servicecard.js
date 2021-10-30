import { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      image: props.image,
      desc: props.desc,
      link: props.link,
    };
  }
  render() {
    return (
      <div className="bg-tranparent border-2 hover:bg-gray-200 border-gray-600 m-12 heropattern">
        <h2 className="text-2xl m-5">{this.state.title}</h2>
        <img className="inline" src={this.state.image} />
        <h3>{this.state.desc}</h3>

        <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded m-5">
          More Info
        </button>
      </div>
    );
  }
}
