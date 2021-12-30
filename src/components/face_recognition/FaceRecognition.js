import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="center" style={{ margin: "30px" }}>
      <img width={"700px"} alt="" src={imageUrl} />
    </div>
  );
};

export default FaceRecognition;
