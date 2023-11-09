import { useEffect } from "react";

const Shimmer = () => {
  console.log("Hey there im from shimmer functional component")
  useEffect(()=>{
    console.log("useEffect from Shimmer")
  },[])
  return (
    <div className="shimmer-container">
      <div className="shimmer-card">
        <div className="image-container"></div>
      </div>
      <div className="shimmer-card">
        <div className="image-container"></div>
      </div>
      <div className="shimmer-card">
        <div className="image-container"></div>
      </div>
      <div className="shimmer-card">
        <div className="image-container"></div>
      </div>
      <div className="shimmer-card">
        <div className="image-container"></div>
      </div>
      <div className="shimmer-card">
        <div className="image-container"></div>
      </div>
      <div className="shimmer-card">
        <div className="image-container"></div>
      </div>
      <div className="shimmer-card">
        <div className="image-container"></div>
      </div>
      <div className="shimmer-card">
        <div className="image-container"></div>
      </div>
      <div className="shimmer-card">
        <div className="image-container"></div>
      </div>
      <div className="shimmer-card">
        <div className="image-container"></div>
      </div>
      <div className="shimmer-card">
        <div className="image-container"></div>
      </div>
    </div>
  );
};

export default Shimmer;
