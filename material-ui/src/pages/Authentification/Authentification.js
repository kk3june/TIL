import React from "react";
import BasicCard from "../../components/BasicCard/BasicCard";
import SearchBar from "../../components/SearchBar/SearchBar";

const Authentication = () => {
  return (
    <div>
      This is Authentication
      <BasicCard header={<SearchBar />} />
    </div>
  );
};

export default Authentication;
