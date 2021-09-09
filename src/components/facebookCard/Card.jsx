import React from "react";
import { CardBtn } from "./CardBtn";

export class Card extends React.Component {
  render() {
    const { name, surname, education, post, avatarUrl, date } = this.props;

    return (
      <div>
        <h1>Facebook</h1>
        <div className="card">
          <div>
            <img className="avatar" src={avatarUrl} />
          </div>
          <div>
            <div className="cardTitle">
              <p>{`${name} ${surname}`}</p>
              <p>{`${education}`}</p>
            </div>
            <div className="cardDescription">{post}</div>
            <div className="cardFooter">
              <a href="#">
                <CardBtn color="blue" description={"Like"} />
              </a>
              <a href="#">
                <CardBtn color="blue" description={"Reply"} />
              </a>
              <div
                className="footerDate"
                style={{ display: "flex", alignItems: "center" }}
              >
                {date}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
