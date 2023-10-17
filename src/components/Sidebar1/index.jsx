import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

import { Button, Img, Text } from "components";

const Sidebar1 = (props) => {
  return (
    <>
      <Sidebar className={props.className}>
        <div className="flex flex-row items-start justify-start ml-7 md:ml-[0] mr-[61px] mt-[35px] w-[71%]">
          <div className="flex flex-row gap-2 items-center justify-start w-[90%]">
            <Img
              className="h-[37px] w-[37px]"
              src="images/img_setting1.svg"
              alt="settingOne"
            />
            <Text
              className="md:text-2xl sm:text-[22px] text-[26px] text-black-900 tracking-[0.26px]"
              size="txtPoppinsSemiBold26"
            >
              Dashboard
            </Text>
          </div>
          <Text
            className="ml-1 mt-[17px] text-[10px] text-gray-600 tracking-[-0.10px]"
            size="txtPoppinsMedium10"
          >
          </Text>
        </div>
        <Menu
          menuItemStyles={{
            button: {
              padding: "8px",
              width: "100%",
              gap: "14px",
              color: "#9197b3",
              fontSize: "14px",
              fontFamily: "Poppins",
              borderRadius: "8px",
              [`&:hover, &.ps-active`]: {
                color: "#ffffff",
                fontWeight: "400 !important",
                backgroundColor: "#5932eaff !important",
              },
            },
          }}
          renderExpandIcon={() => (
            <Img
              className="h-4 w-4"
              src="images/img_arrowright.svg"
              alt="arrowright"
            />
          )}
          className="flex flex-col items-center justify-start mt-[51px] sm:px-5 px-7 w-[82%]"
        >
          <MenuItem
            icon={
              <Img
                className="h-6 mt-0.5 w-6"
                src="images/img_icon24outline.svg"
                alt="icon24outline"
              />
            }
            active={window.location.pathname === "/dashboard"}
          >
            <Text className="tracking-[-0.14px]">Dashboard</Text>
          </MenuItem>
          <SubMenu
            icon={
              <Img
                className="h-6 my-0.5 w-6"
                src="images/img_3dsquare1.svg"
                alt="3dsquareOne"
              />
            }
            label={<Text className="tracking-[-0.14px]">Product</Text>}
          >
            <MenuItem>Submenu Item</MenuItem>
          </SubMenu>
          <SubMenu
            icon={
              <Img
                className="h-6 my-0.5 w-6"
                src="images/img_usersquare1.svg"
                alt="usersquareOne"
              />
            }
            label={<Text className="tracking-[-0.14px]">Customers</Text>}
          >
            <MenuItem>Submenu Item</MenuItem>
          </SubMenu>
          <SubMenu
            icon={
              <Img
                className="h-6 my-0.5 w-6"
                src="images/img_walletmoney2.svg"
                alt="walletmoneyTwo"
              />
            }
            label={<Text className="tracking-[-0.14px]">Income</Text>}
          >
            <MenuItem>Submenu Item</MenuItem>
          </SubMenu>
          <SubMenu
            icon={
              <Img
                className="h-6 my-0.5 w-6"
                src="images/img_discountshape1.svg"
                alt="discountshapeOne"
              />
            }
            label={<Text className="tracking-[-0.14px]">Promote</Text>}
          >
            <MenuItem>Submenu Item</MenuItem>
          </SubMenu>
          <SubMenu
            icon={
              <Img
                className="h-6 mb-1 w-6"
                src="images/img_messagequestion.svg"
                alt="messagequestion"
              />
            }
            label={<Text className="mt-1 tracking-[-0.14px]">Help</Text>}
          >
            <MenuItem>Submenu Item</MenuItem>
          </SubMenu>
        <div className="flex flex-row items-center justify-start mb-[76px] mt-[68px] mx-auto w-[82%]">
          <Img
            className="h-[42px] md:h-auto rounded-[50%] w-[42px]"
            src="images/82101987.jpeg"
            alt="ellipseEight"
          />
          <div className="flex flex-col items-start justify-start ml-3">
            <Text
              className="text-black-900 text-sm tracking-[0.14px]"
              size="txtPoppinsMedium14Black900"
            >
              Ganesh Karthik
            </Text>
            <Text
              className="text-gray-600_01 text-xs tracking-[0.12px]"
              size="txtPoppinsRegular12Gray60001"
            >
             Web Dev
            </Text>
          </div>
          <Img
            className="h-5 w-10"
            src="images/img_arrowdown_gray_600_01.svg"
            alt="arrowdown"
          />
        </div>
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
