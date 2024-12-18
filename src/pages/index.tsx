import { useEffect, useState } from "react";

const Index = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // const timer = setTimeout(() => setIsAnimating(false), 2000); // Hiệu ứng chạy trong 2 giây
    // return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isAnimating && (
        <div className="cloudContaine">
          <div className="cloud cloudLeft" />
          <div className="cloud cloudRight" />
        </div>
      )}
      <div className={`content ${!isAnimating ? "visible" : ""}`}>
        {/* {children} */}
        asdasqweqwe qweqwe asda weq
      </div>
    </>
  );
};

export default Index;
