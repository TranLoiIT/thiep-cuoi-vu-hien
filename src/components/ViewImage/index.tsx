/* eslint-disable @next/next/no-img-element */
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { useEffect, useState } from "react";

const DATA_IMG = [
  { id: 1, url: "/images/1.jpg" },
  { id: 2, url: "/images/2.jpg" },
  { id: 3, url: "/images/3.jpg" },
  { id: 4, url: "/images/4.jpg" },
  { id: 5, url: "/images/5.jpg" },
  { id: 6, url: "/images/6.jpg" },
  { id: 7, url: "/images/7.jpg" },
  { id: 7, url: "/images/7.jpg" },
  { id: 9, url: "/images/9.jpg" },
  { id: 10, url: "/images/10.jpg" },
  { id: 11, url: "/images/11.jpg" },
  { id: 12, url: "/images/12.jpg" },
  { id: 13, url: "/images/13.JPG" },
  { id: 14, url: "/images/14.jpg" },
  { id: 15, url: "/images/15.jpg" },
  { id: 16, url: "/images/16.jpg" },
  { id: 17, url: "/images/17.jpg" },
  { id: 18, url: "/images/18.jpg" },
  { id: 19, url: "/images/19.jpg" },
  { id: 20, url: "/images/20.jpg" },
];

const ViewImage = ({ initialIndex, _onClose = () => {} }: {initialIndex: number, _onClose?: () => void}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  let touchStartX = 0;
  let touchEndX = 0;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : DATA_IMG.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < DATA_IMG.length - 1 ? prev + 1 : 0));
  };

  // Bắt đầu vuốt
  const handleTouchStart = (e: any) => {
    touchStartX = e.touches[0].clientX;
  };

  // Kết thúc vuốt
  const handleTouchEnd = (e: any) => {
    touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) {
      // Vuốt trái -> ảnh kế tiếp
      handleNext();
    } else if (diff < -50) {
      // Vuốt phải -> ảnh trước đó
      handlePrev();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    });

    return () => {
      document.removeEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
      });
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[999999999]"
    >
      <div
        className="relative w-full h-full flex justify-center items-center"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={DATA_IMG[currentIndex].url}
          alt="Preview"
          className="2xl:w-[30%] xl:w-[35%] lg:w-1/2 sm:w-3/5 w-[95%] rounded-lg shadow-lg"
        />
        <div
          className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black rounded-full opacity-50 text-white bg-none p-2"
          onClick={handlePrev}
        >
          <ArrowLeft2 size="24" color="#FFF" />
        </div>
        <div
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black rounded-full opacity-50 text-white bg-none p-2"
          onClick={handleNext}
        >
          <ArrowRight2 size="24" color="#FFF" />
        </div>
        <div className="absolute top-2 right-3 text-white z-10 text-[20px]" onClick={() => _onClose()}>X</div>
      </div>
    </div>
  );
};

export default ViewImage;
