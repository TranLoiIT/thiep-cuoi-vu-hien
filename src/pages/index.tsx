/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { MutedOutlined, SoundOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import CalendarCom from "../components/Calendar";
import MapsCom from "../components/Maps";
import ModalCustom from "../components/Modal";

const location_trai =
  "https://www.google.com/maps/dir//20.8403879,105.8567249/@20.8403249,105.8564212,66m/data=!3m1!1e3?hl=vi-VN&entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D";
const location_gai =
  "https://www.google.com/maps/dir//20.855473,105.8345393/@20.8554689,105.834603,66m/data=!3m1!1e3?hl=vi-VN&entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D";

const Index = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [tooltip, setTooltip] = useState(true);
  const [location, setLocation] = useState("nam");
  const [modal, setModal] = useState<any>(null);
  const [qr, setQr] = useState<any>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    // console.log("11", 11);
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current
          .play()
          .catch((error) => console.log("Autoplay bị chặn:", error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleOpenTab = (location: string) => {
    window.open(location, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
      audioRef?.current?.play();
    }, 1000); // Hiệu ứng chạy trong 2 giây

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.addEventListener(
      "click",
      () => {
        togglePlay();
      },
      { once: true }
    );
    window.addEventListener(
      "scroll",
      () => {
        console.log("1 :>> ", 1);
        setTimeout(() => {
          console.log("2 :>> ", 2);
          setTooltip(false);
        }, 5 * 1000);
      },
      { once: true }
    );
  }, []);

  return (
    <div className="bg-[#fbeff6]">
      <audio ref={audioRef} loop>
        <source src="/music/Em-Dong-Y-I-Do-Duc-Phuc-911.mp3" type="audio/mp3" />
      </audio>

      {isAnimating ? (
        <div className="cloudContaine">
          <div className="cloud cloudLeft" />
          <div className="cloud cloudRight" />
        </div>
      ) : (
        <div>
          <div className="ping z-50">
            <div
              className="absolute z-50 flex justify-center items-center bg-pink-400 h-10 w-10 rounded-full"
              onClick={() => togglePlay()}
            >
              {!isPlaying ? (
                <MutedOutlined style={{ color: "#FFF" }} />
              ) : (
                <SoundOutlined style={{ color: "#FFF" }} />
              )}
            </div>
            {tooltip && (
              <div
                data-aos="fade-right"
                // data-aos-delay="10"
                className="h-10 w-[286px] text-[12px] bg-white border border-pink-400 rounded-full flex justify-end items-center pr-2"
              >
                Click vào đây nếu như bạn muốn phát nhạc!
              </div>
            )}
          </div>
          {/* banner */}
          <div className="h-screen relative py-5">
            <div
              className="text-center text-[48px] windsong"
              data-aos="fade-down"
              data-aos-delay="50"
              style={{ fontWeight: 500 }}
            >
              SaveTheDate
            </div>
            <div
              data-aos="fade-down"
              className="text-center text-[30px] ms-madi"
              data-aos-delay="100"
            >
              Trần Lợi & Thu Cúc
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="700"
              className="flex justify-center items-center mt-[42px]"
            >
              <img src="/images/11.jpg" alt="banner" className="w-[80%]" />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              className="flex flex-col justify-center items-center mt-2"
            >
              <div className="w-[80%] flex items-center px-6">
                <div className="px-2 text-[20px] leading-[24px] w-[35%] domine font-medium">
                  <div>17:00</div>
                  <div>Thứ 7</div>
                </div>
                <div className="border-r border-solid border-black h-[42px] opacity-70" />
                <div className="flex justify-end items-center w-[65%] gap-5">
                  <div className="text-[36px] domine font-medium">23.03</div>
                  <div className="text-[20px] leading-[24px] domine font-medium">
                    <div>20</div>
                    <div>25</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center mt-1 italic text-gray-700">
                (Ngày 23 Tháng 03 Năm Ất Tỵ )
              </div>
            </div>

            <img
              className="absolute right-0 -bottom-[32px] w-[250px]"
              src="/images/laveder.png"
              alt="hoa"
            />
            <img
              className="absolute left-0 -bottom-[32px] w-[15 0px]"
              src="/images/tulip2.png"
              alt="tulip"
            />
          </div>
          {/* content */}
          <div className="py-10">
            <div
              data-aos="fade-down"
              data-aos-delay="100"
              className="text-center text-[22px] ms-madi leading-[24px] mt-[72px]"
            >
              Hôn nhân là chuyện cả đời <br />
              Yêu người vừa ý, cưới người mình thương
            </div>
            <div className="mt-[56px] grid grid-cols-2 gap-x-3 gap-y-4 px-1">
              <div
                data-aos="fade-up"
                data-aos-delay="50"
                className="border-[4px] border-pink-200"
              >
                <img src="/images/1.jpg" alt="aa" />
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="flex flex-col items-center justify-center"
              >
                <div className="uppercase text-[16px] font-bold redditSansCondensed">
                  Nhà trai
                </div>
                <div className="uppercase text-[16px] font-bold redditSansCondensed">
                  Ông Trần Mạnh Thắng
                </div>
                <div className="uppercase text-[16px] font-bold redditSansCondensed">
                  Bà Tạ Thị Cơ
                </div>
                <div className="mt-5 text-center">
                  <p className="italic text-gray-700">Chú Rể</p>
                  <p className="text-[36px] ms-madi">Trần Lợi</p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="flex flex-col items-center justify-center"
              >
                <div className="uppercase text-[16px] font-bold redditSansCondensed">
                  Nhà gái
                </div>
                <div className="uppercase text-[16px] font-bold redditSansCondensed">
                  Ông Đàm Viết Phú
                </div>
                <div className="uppercase text-[16px] font-bold redditSansCondensed">
                  Bà Phạm Thị Yến
                </div>
                <div className="mt-5 text-center">
                  <p className="italic text-gray-700">Cô Dâu</p>
                  <p className="text-[36px] ms-madi">Thu Cúc</p>
                </div>
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="10"
                className="border-[4px] border-pink-200"
              >
                <img src="/images/9.jpg" />
              </div>
            </div>

            <div className="pt-5 pb-12">
              <div className="flex justify-center mt-1">
                <div className="w-2/5 border-t-[1.5px] border-t-black" />
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="10"
                className="text-center"
              >
                <div className="text-center text-[36px] leading-[40px] ms-madi mt-2 font-medium">
                  Thư Mời
                </div>
                <p className="uppercase text-[14px]">
                  Tham dự lễ thành hôn của Trần Lợi & Thu Cúc
                </p>
              </div>
              <div className="flex justify-start items-center gap-2 mt-5">
                <img
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="w-[30%]"
                  src="/images/8.jpg"
                />
                <img
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-delay="10"
                  data-aos-offset="0"
                  className="w-[36%]"
                  src="/images/19.jpg"
                />
                <img
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="w-[30%]"
                  src="/images/4.jpg"
                />
              </div>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-6">
                <div className="flex justify-center items-center redditSansCondensed">
                  <div
                    data-aos="zoom-in"
                    className="w-[90%] rounded-lg border-2 text-center p-3"
                  >
                    <div className="uppercase font-bold text-[20px]">
                      Tiệc cưới nhà Trai
                    </div>
                    <div className="text-gray-700">Chủ Nhật | 10H30</div>
                    <div className="font-medium text-[20px]">
                      2 3 . 0 3 . 2 0 2 5
                    </div>
                    <div className="text-gray-700 italic mb-4">
                      (Tức Ngày 24 Tháng 02 Năm Ất Tỵ)
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1">
                      <div
                        onClick={() => setModal("nam")}
                        className="bg-[#d9c9aa] rounded-lg w-4/5 py-[6px] text-sm font-medium cursor-pointer uppercase"
                      >
                        Xác nhận Tham Dự
                      </div>
                      <div
                        onClick={() => setQr("nam")}
                        className="bg-pink-300 rounded-lg w-2/5 py-[10px] text-sm font-medium cursor-pointer uppercase"
                      >
                        Gửi mời cưới
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center redditSansCondensed">
                  <div
                    data-aos="zoom-in"
                    className="w-[90%] rounded-lg border-2 text-center p-3"
                  >
                    <div className="uppercase font-bold text-[20px]">
                      Tiệc cưới nhà gái
                    </div>
                    <div className="text-gray-700">Chủ Nhật | 10H30</div>
                    <div className="font-medium text-[20px]">
                      2 3 . 0 3 . 2 0 2 5
                    </div>
                    <div className="text-gray-700 italic mb-4">
                      (Tức Ngày 24 Tháng 02 Năm Ất Tỵ)
                    </div>
                    <div className="flex flex-col justify-center items-center gap-1">
                      <div
                        onClick={() => setModal("nu")}
                        className="bg-[#d9c9aa] rounded-lg w-4/5 py-[6px] text-sm font-medium cursor-pointer uppercase"
                      >
                        Xác nhận Tham Dự
                      </div>
                      <div
                        onClick={() => setQr("nu")}
                        className="bg-pink-300 rounded-lg w-2/5 py-[10px] text-sm font-medium cursor-pointer uppercase"
                      >
                        Gửi mời cưới
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center redditSansCondensed">
                  <div
                    data-aos="fade-up"
                    data-aos-delay="10"
                    className="w-[90%] text-center"
                  >
                    <div
                      data-aos="fade-up"
                      data-aos-delay="100"
                      className="text-[20px] leading-[24px] domine font-medium uppercase"
                    >
                      Save the date
                    </div>
                    <div className="text-[16px] leading-[16px] domine font-medium uppercase">
                      Tháng 3 - 2025
                    </div>
                    {/* imgae lịch */}

                    <div className="w-full mt-2">
                      <CalendarCom />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-5 px-3 mt-10">
              <div className="bg-[#ffdee4] rounded-xl py-5 text-center shadow-md">
                <div
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="text-[30px] great-vibes"
                  style={{ fontWeight: 500 }}
                >
                  Địa điểm tổ chức
                </div>

                <div className="flex justify-center">
                  <div className="w-2/5 border-t-[1.5px] border-dashed border-t-black" />
                </div>

                <div className="flex justify-center items-center gap-5 mt-3">
                  <div
                    onClick={() => setLocation("nam")}
                    className={`py-1 w-[120px] ${
                      location === "nam"
                        ? "font-medium border-b border-solid border-black"
                        : ""
                    }`}
                  >
                    Tư gia nhà trai
                  </div>
                  <div
                    onClick={() => setLocation("nu")}
                    className={`py-1 w-[120px] ${
                      location === "nu"
                        ? "font-medium border-b border-solid border-black"
                        : ""
                    }`}
                  >
                    Tư gia nhà gái
                  </div>
                </div>

                <div className="mt-3 ">
                  <div className="flex justify-start items-center gap-[6px] px-2">
                    <img
                      className="w-[20px]"
                      src="/images/location.png"
                      alt="location"
                    />
                    <div className="text-start">
                      {/* <div className="uppercase font-medium bodoniModa">Tân Gia nhà trai</div> */}
                      <div className="text-[15px] font-normal">
                        {location === "nam"
                          ? "Gia Khánh- Nguyễn Trãi -Thường Tín - Hà Nội"
                          : "Ngọc Động - Tiền Phong -Thường Tín - Hà Nội"}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center my-4">
                    <div
                      data-aos="fade-up"
                      data-aos-delay="100"
                      onClick={() =>
                        handleOpenTab(
                          location === "nam" ? location_trai : location_gai
                        )
                      }
                      className="w-2/5 bg-white py-2 rounded-xl montserrat shadow-xl"
                    >
                      Xem chỉ đường
                    </div>
                  </div>
                  <div className="mb-3 px-3">
                    <MapsCom
                      center={
                        location === "nam"
                          ? { lat: 20.84041, lng: 105.85661 }
                          : { lat: 20.855473, lng: 105.834539 }
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <div className="flex justify-start items-center px-3">
                <div className="text-[36px] leading-[40px] alex-brush font-medium">
                  Album ảnh
                </div>
                <div className="flex flex-1 justify-center ">
                  <div className="w-full border-t-[1.5px] border-t-black mt-1" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* r */}
                <div className="flex flex-col gap-3">
                  <img
                    data-aos="fade-up"
                    data-aos-delay="100"
                    src="/images/14.jpg"
                    alt="1"
                  />
                  <img
                    data-aos="fade-up"
                    data-aos-delay="150"
                    src="/images/20.jpg"
                    alt="1"
                  />
                  <img
                    data-aos="fade-up"
                    data-aos-delay="200"
                    src="/images/3.jpg"
                    alt="1"
                  />
                  <img
                    data-aos="fade-up"
                    data-aos-delay="150"
                    src="/images/7.jpg"
                    alt="1"
                  />
                  <img
                    data-aos="fade-up"
                    data-aos-delay="300"
                    src="/images/15.JPG"
                    alt="1"
                  />
                </div>

                {/* l */}
                <div className="flex flex-col gap-3">
                  <img
                    className="mt-5"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    src="/images/5.jpg"
                    alt="1"
                  />
                  <div className="flex flex-col gap-3">
                    <img
                      data-aos="fade-up"
                      data-aos-delay="130"
                      className="w-full"
                      src="/images/13.jpg"
                      alt="1"
                    />
                    <img
                      data-aos="fade-up"
                      data-aos-delay="150"
                      className="w-full"
                      src="/images/17.jpg"
                      alt="1"
                    />
                  </div>
                  <img
                    className="mt-1"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    src="/images/12.jpg"
                    alt="1"
                  />
                  <img
                    data-aos="fade-up"
                    data-aos-delay="250"
                    src="/images/10.jpg"
                    alt="1"
                  />
                  <img
                    data-aos="fade-up"
                    data-aos-delay="300"
                    src="/images/2.jpg"
                    alt="1"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* thanks you */}
          <div className="relative h-[500px]">
            <img
              src="/images/18.jpg"
              className="h-[500px] object-cover w-full opacity-50"
            />
            <div className="absolute z-20 inset-x-0 inset-y-0 flex items-center">
              <div className="min-w-full text-center">
                <div
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="text-[64px] ms-madi"
                  style={{ fontWeight: 500 }}
                >
                  Thanks You.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {modal && <ModalCustom house={modal} onClose={() => setModal(null)} />}
      {qr && <ModalCustom house={qr} onClose={() => setQr(null)} showQR />}
    </div>
  );
};

export default Index;
