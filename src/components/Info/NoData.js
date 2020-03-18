import React from "react";
import { FaRegSadTear } from "react-icons/fa";

const NoData = () => {
  return (
    <>
    <FaRegSadTear
      style={{ paddingTop: "2em", width: "10em", height: "10em" }}
    />
    <h2 className="no-data--text">Brak danych</h2>
    </>
  )
};

export default NoData;