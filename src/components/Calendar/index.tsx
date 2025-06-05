/* eslint-disable @next/next/no-img-element */
const CalendarCom = () => {
    const thu = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"]
    const DAY_WEEK = [
        "", "1", "2", "3", "4", "5", "6",
        "7", "8", "9", "10", "11", "12", "13",
        "14", "15", "16", "17", "18", "19", "20",
        "21", "22", "23", "24", "25", "26", "27",
        "28", "29", "30", "31", "", "", "",
    ]
    const DAY_ACTIVE = "20"
    return (
        <div className="relative">
            <div className="grid grid-cols-7">
                {
                    thu.map((t, idx: number) => <div
                        key={`thu_id-t__${idx+1}`}
                        className="text-center bg-pink-500 py-2 font-bold"
                    >{t}</div>)
                }
                {
                    DAY_WEEK.map((d, idx: number) => <div
                        key={`ngay_id-d__${idx+1}`}
                        className="text-center border border-gray-400 py-3 relative"
                    >
                        <div className={`${DAY_ACTIVE === d ? "text-pink-500 font-bold" : ""} italic`}>{d}</div>
                        {
                            DAY_ACTIVE === d && <img
                                data-aos="zoom-in"
                                data-aos-delay="300"
                                src="/images/tim-1.png"
                                className="absolute top-1/2 left-1/2 w-[52px]"
                                alt="aaaa"
                                style={{ transform: "translate(-50%, -50%)" }}
                            />
                        }
                    </div>)
                }
            </div>
            
            <img
                data-aos="fade-right"
                src="/images/tim-3.png"
                className="absolute -right-[18px] -bottom-[120px] w-[200px]"
                alt=""
            />
        </div>
        
    );
}
 
export default CalendarCom;