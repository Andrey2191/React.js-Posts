import React from "react";
import { JobsCardBtn } from "./JobsCardBtn";

export class JobsCard extends React.Component {
  render() {
    const { title, company, city, description, titleDescription, date } =
      this.props;

    return (
      <div>
        <h1>rabotaTUT.by</h1>
        <div className="jobsCard">
          <div className="jobsHeader">
            <div className="jobsTitle">
              <a href="">{title}</a>
            </div>
            <div className="jobsCompany">{company}</div>
            <div className="jobsCity">{city}</div>
            <div className="titleDescription">{titleDescription}</div>
            <div className="jobsDescription">{description}</div>
          </div>
          <div className="jobsFooter">
            <JobsCardBtn description={"Откликнуться"} />
            <div className="jobsDate">{date}</div>
          </div>
        </div>
      </div>
    );
  }
}
