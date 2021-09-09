import React from "react";

export class VkBtn extends React.Component {
  render() {
    const { count, description, color } = this.props;

    return (
      <div style={{ display: "flex", color: color }}>
        <p>{description}: </p>
        <p>{count}</p>
      </div>
    );
  }
}
