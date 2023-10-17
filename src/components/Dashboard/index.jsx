import React from "react";

import { Img, Text } from "components";

const Dashboard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-5 items-center justify-between w-full">
          <div className="bg-gradient  flex flex-col h-[84px] items-center justify-end p-[19px] rounded-[50%] w-[84px]">
            <Img
              className="h-[42px] mt-0.5 w-[42px]"
              src="images/img_moneyrecive1.svg"
              alt="moneyreciveOne"
            />
          </div>
          <div className="flex flex-col items-start justify-start w-[55%]">
            <Text
              className="text-gray-500 text-sm tracking-[-0.14px]"
              size="txtPoppinsRegular14"
            >
              Earning
            </Text>
            <div className="md:h-[45px] h-[63px] relative w-full">
              <Text
                className="absolute left-[0] md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900 top-[0] tracking-[-0.32px]"
                size="txtPoppinsSemiBold32"
              >
                $198k
              </Text>
              <div className="absolute bottom-[0] flex flex-row inset-x-[0] items-start justify-evenly mx-auto w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_arrowup.svg"
                  alt="arrowup"
                />
                <Text
                  className="text-blue_gray-900_01 text-xs tracking-[-0.12px]"
                  size="txtPoppinsRegular12"
                >
                  <span className="text-green-A700 font-poppins text-left font-bold">
                    37.8%
                  </span>
                  <span className="text-blue_gray-900_01 font-poppins text-left font-normal">
                    {" "}
                    this{" "}
                  </span>
                  <span className="text-blue_gray-900_01 font-poppins text-left font-normal">
                    month
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Dashboard.defaultProps = {};

export default Dashboard;
