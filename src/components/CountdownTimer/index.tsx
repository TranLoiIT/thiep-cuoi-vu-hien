/* eslint-disable @next/next/no-img-element */
import moment from "moment";
import { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }: {targetDate: string}) => {
  const calculateTimeLeft = () => {
    const now = moment();
    const target = moment(targetDate);
    const duration = moment.duration(target.diff(now));

    return {
      days: Math.floor(duration.asDays()),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  };

  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
        className="mt-5 h-[320px] w-full relative"
    >
        <img src="/images/15.jpg" className="h-full object-cover w-full" alt="a" />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 z-10">
            <div className="h-full w-full flex flex-col justify-center items-center gap-4 text-white">
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="uppercase text-[18px]"
                >Cùng nhau đếm ngược thời gian</div>
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="text-[32px] leading-[36px] mb-4 domine font-bold uppercase"
                >SAVE THE DATE</div>
                <div className="flex justify-center items-center gap-4">
                    {["days", "hours", "minutes", "seconds"].map((unit, index) => (
                        <div
                          data-aos="fade-up"
                          data-aos-delay={100 * index + 200}
                          key={index}
                          className="w-20 h-24 flex flex-col items-center justify-center border border-white rounded-lg p-4"
                        >
                            <span className="text-3xl font-bold opacity-100">{String(timeLeft[unit]).padStart(2, "0")}</span>
                            <span className="text-sm uppercase opacity-100">{unit === "days" ? "Ngày" : unit === "hours" ? "Giờ" : unit === "minutes" ? "Phút" : "Giây"}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default CountdownTimer;