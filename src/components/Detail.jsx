import React from "react";

export default function Detail(props) {
  const generateDataItems = () => {
    // This method takes data and generates HTML elements containing data.
    let dataList = []; // List of HTML elements with data.
    if (props.starData) {
      Object.entries(props.starData).forEach(([key, value]) => {
        dataList.push(
          <div className="detail mb-10 flex">
            <div className="text-red-500 text-center border-r-2 w-44">
              {key}
            </div>
            <div className="text-center w-44">{value}</div>
          </div>
        );
      });
      return dataList;
    }
    // If no item is selected from sidebar.
    else return <h1 className="">Select an item from the sidebar</h1>;
  };
  return (
    <>
      <h1 className="text-xl underline underline-offset-4 decoration-red-500">
        {props.starData.englishName}
      </h1>
      <div className="container_details pt-10 flex flex-wrap justify-start">
        {generateDataItems()}
      </div>
    </>
  );
}
