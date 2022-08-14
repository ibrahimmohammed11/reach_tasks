import React, { Fragment } from "react";
import { BallTriangle } from "react-loader-spinner";

export const Loading = () => {
  return (
    <Fragment>
      <div className="dFlex">
        <BallTriangle
          height="50"
          width="50"
          color="#606060"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    </Fragment>
  );
};
