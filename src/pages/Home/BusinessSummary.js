import React from "react";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSackDollar,
  faCommentDots,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

const BusinessSummary = () => {
  return (
    <div className="mt-32">
      <h3 className="text-5xl font-bold text-center mb-12">Business Summary</h3>
      <div className="w-11/12 mx-auto stats shadow flex justify-center">
        <div className="stat">
          <div className="stat-figure text-primary">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="stat-title">Total Customers</div>
          <div className="stat-value text-primary">
            <CountUp start={0} duration={1.5} end={100} />+
          </div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FontAwesomeIcon icon={faSackDollar} />
          </div>
          <div className="stat-title">Annual Revenue</div>
          <div className="stat-value text-secondary">
            <CountUp start={0} duration={1.2} end={5} />M
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-primary">
            <FontAwesomeIcon icon={faCommentDots} />
          </div>
          <div className="stat-title">Reviews</div>
          <div className="stat-value text-primary">
            <CountUp start={0} duration={1.5} end={12} />
            K+
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FontAwesomeIcon icon={faScrewdriverWrench} />
          </div>
          <div className="stat-title">Tools</div>
          <div className="stat-value text-secondary">
            <CountUp start={0} duration={1.5} end={250} />+
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
