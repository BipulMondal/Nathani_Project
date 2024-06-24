import React from "react";
import { FidgetSpinner } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <span
        style={{
          display: "grid",
          position: "fixed",
          zIndex: "1000",
          left: "0",
          top: "0",
          right: "0",
          margin: "0 auto",
          background: "rgb(0 0 0 / 60%)",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
        }}
      >
        <div className="main_contpreload">
          <div className="" style={{ color: "#FFF", fontSize: "20px" }}>
            Processing. Please wait...
          </div>
          {/* <ThreeCircles
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        /> */}

          <FidgetSpinner
            visible={true}
            height="80"
            width="80"
            ariaLabel="fidget-spinner-loading"
            wrapperStyle={{}}
            wrapperClass="fidget-spinner-wrapper"
          />
        </div>
      </span>
    </>
  );
};

export default Loader;
