import React from "react";
import { BiFilter } from "react-icons/bi";

const SecondHeader = ({ videos }) => {
  return (
    <>
      {videos !== undefined && (
        <div className="secHead">
          <div>
            About <span>{videos.length}</span> results
          </div>
          <div>
            <BiFilter />
            &nbsp; FILTER
          </div>
        </div>
      )}
    </>
  );
};

export default SecondHeader;
