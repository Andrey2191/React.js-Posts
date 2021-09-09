import React from "react";

export class JobsCardBtn extends React.Component {
  render() {
    const { description } = this.props;

    return <button className="jobsBtn">{description}</button>;
  }
}
