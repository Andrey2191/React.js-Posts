import React from "react";

export class OnlinerCard extends React.Component {
  render() {
    const { theme, comment, description } = this.props;

    return (
      <div>
        <h1>Onliner</h1>
        <div className="onlinerCard">
          <div className="onlinerCardHeader">
            <div className="theme">{theme}</div>
            <div className="comment">{comment}</div>
          </div>
          <div className="onlinerCardDescription">{description}</div>
        </div>
      </div>
    );
  }
}
