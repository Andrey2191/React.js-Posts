import React from "react";
import { VkBtn } from "./VkBtn";

export class VkCard extends React.Component {
  render() {
    const { avatarUrl, name, surname, post, date, likeCount, commentCount } =
      this.props;

    return (
      <div>
        <h1>VK</h1>
        <div className="vkCard">
          <div className="vkHeader">
            <div className="vkAvatar">
              <img className="vkUserAvatar" src={avatarUrl} />
            </div>
            <div className="vkTitle">
              <div className="vkName">{`${name} ${surname}`}</div>
              <div className="vkDate">{date}</div>
            </div>
          </div>
          <div className="vkBody">{post}</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: 17,
              alignШtems: "center",
            }}
          >
            <VkBtn count={likeCount} description={"Likes 👍"} color={"red"} />
            <VkBtn
              count={commentCount}
              description={"Comments  ✉"}
              color={"gray"}
            />
          </div>
        </div>
      </div>
    );
  }
}
