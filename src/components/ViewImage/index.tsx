import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

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

const ViewImage = () => {
  return (
    <div className="fixed inset-0 bg-black opacity-50 z-[999999999]">
      <div className="absolute inset-y-[50%] left-1">
        <ArrowLeft2 size="24" color="#FFF" />
      </div>
      <div className="absolute inset-y-[50%] right-1">
        <ArrowRight2 size="24" color="#FFF" />
      </div>
    </div>
  );
};

export default ViewImage;
