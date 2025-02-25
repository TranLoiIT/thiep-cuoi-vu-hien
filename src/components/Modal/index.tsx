import { Button, Form, Input, Select } from "antd";
import { useEffect, useRef, useState } from "react";

const { TextArea } = Input;

export const guidGenerator = () => {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
};

const Class = "fixed inset-x-0 inset-y-0 z-30 flex justify-center items-center";
const ModalCustom = ({
  house = "nam",
  onClose = () => {},
  showQR = false,
}: {
  house: "nam" | "nu";
  onClose?: () => void;
  showQR?: boolean;
}) => {
  const modalRef = useRef<any>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (event.target.className === Class) {
        onClose(); // Call the close function
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onFinish = async (data: any) => {
    fetch("https://67bd3236321b883e790b868f.mockapi.io/api/wishes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        house,
        ...data,
      }),
    })
      .then((response) => response.json())
      .then((result: any) => {
        // console.log("Data saved:", result);
        if (result.id) {
          setSuccess(true);
        }
      })
      .catch((error) => console.error("Error saving data:", error));
  };

  return (
    <>
      <div className="fixed inset-x-0 inset-y-0 bg-black opacity-50" />
      <div className="fixed inset-x-0 inset-y-0 z-30 flex justify-center items-center">
        <div
          ref={modalRef}
          id="box-modal"
          className="bg-white rounded-2xl relative pb-5 px-5 pt-12"
          style={{ width: "90%", minHeight: "60%" }}
        >
          <div
            onClick={() => onClose()}
            className="absolute z-50 top-0 right-1 text-[18px] font-medium cursor-pointer p-3"
          >
            X
          </div>
          {showQR ? (
            <div className="absolute inset-x-0 inset-y-0">
              <img
                src={
                  house === "nam" ? "/images/qr-ck.jfif" : "/images/qr-vo.jfif"
                }
                className="h-full rounded-2xl object-cover w-full"
              />
            </div>
          ) : (
            <div>
              {success ? (
                <div className="absolute inset-x-0 inset-y-0">
                  <img
                    src="/images/18.jpg"
                    className="h-full rounded-2xl object-cover w-full opacity-50"
                  />
                  <div className="absolute z-20 inset-x-0 inset-y-0 flex items-center">
                    <div className="min-w-full  text-center">
                      <div
                        data-aos="fade-up"
                        data-aos-delay="300"
                        className="text-[64px] ms-madi"
                        style={{ fontWeight: 500 }}
                      >
                        Thanks You.
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="text-center ms-madi text-[32px] mb-4">
                    Gửi Lời chúc
                  </div>
                  <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item
                      label="Xác nhận tham gia"
                      name="type"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng xác nhận tham gia",
                        },
                      ]}
                    >
                      <Select
                        style={{ width: "100%" }}
                        placeholder="Xác nhận tham gia"
                        options={[
                          { value: "yes", label: "Có" },
                          { value: "no", label: "Không" },
                        ]}
                        allowClear
                      />
                    </Form.Item>
                    <Form.Item
                      label="Họ và Tên"
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập tên",
                        },
                      ]}
                    >
                      <Input placeholder="Nhập tên" allowClear />
                    </Form.Item>
                    <Form.Item
                      label="Gửi lời chúc"
                      name="desc"
                      rules={[
                        {
                          required: true,
                          message: "Vui lòng nhập lời chúc cho cô dâu & chú dể",
                        },
                      ]}
                    >
                      <TextArea
                        rows={4}
                        placeholder="Gửi lời chúc cho dâu & dể"
                        allowClear
                      />
                    </Form.Item>
                    <div className="mt-[52px] flex justify-end">
                      <Button htmlType="submit" type="primary">
                        Xác nhận
                      </Button>
                    </div>
                  </Form>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ModalCustom;
