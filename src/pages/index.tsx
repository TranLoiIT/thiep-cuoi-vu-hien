import { useEffect, useState } from "react";

const Index = () => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 1000); // Hiệu ứng chạy trong 2 giây
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isAnimating && (
        <div className="cloudContaine">
          <div className="cloud cloudLeft" />
          <div className="cloud cloudRight" />
        </div>
      )}
      <div className="h-screen bg-pink-200 py-12">
        <div
          data-aos="fade-down"
          className="text-center text-[40px] windsong"
          style={{ fontWeight: 500 }}
        >Save The Date</div>
        <div
          data-aos="fade-down"
          className="text-center text-[30px] ms-madi"
        >Trần Lợi & Thu Cúc</div>
      </div>
    </>
  );
};

export default Index;
