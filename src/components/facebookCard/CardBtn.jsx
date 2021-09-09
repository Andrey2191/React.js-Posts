import React from "react";

export class CardBtn extends React.Component {
  render() {
    const { color, description } = this.props;

    return (
      <div style={{ marginRight: 5, color: color }}>
        <p>{description}</p>
      </div>
    );
  }
}
