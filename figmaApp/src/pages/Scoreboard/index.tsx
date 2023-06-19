import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, List, Text } from "components";
import Header from "components/Header";

const ScoreboardPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat font-sairacondensed h-[1024px] mx-auto relative w-full"
        style={{ backgroundImage: "url('images/img_scoreboard.png')" }}
      >
        <Img
          className="absolute h-[72px] right-[14%] top-[8%]"
          src="images/img_sustainchallengexgoldman.svg"
          alt="sustainchalleng"
        />
        <div className="absolute flex flex-col gap-[23px] h-max inset-[0] justify-center m-auto max-w-[1288px] md:px-5 w-full">
          <Text
            className="capitalize md:ml-[0] ml-[563px] sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
            size="txtSairaCondensedBold50"
          >
            Leaderboard
          </Text>
          <div className="bg-gradient1  flex flex-col items-center justify-start pb-4 rounded-[16px] w-full">
            <div className="flex flex-col gap-8 justify-start w-full">
              <div className="sm:h-[179px] h-[187px] md:h-[343px] relative w-full">
                <div className="absolute bg-gradient1  flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-start mx-auto p-[42px] md:px-10 sm:px-5 rounded-[16px] top-[0] w-full">
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[31px] md:mt-0 mt-2.5">
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                      size="txtRobotoRegular40"
                    >
                      <span className="text-green-A700_01 font-sairacondensed text-left font-normal">
                        Ziel 1:
                      </span>
                      <span className="text-white-A700 font-sairacondensed text-left font-normal">
                        {" "}
                        Emissionen in der Produktion reduzieren
                      </span>
                    </Text>
                    <Text
                      className="text-2xl md:text-[22px] text-gray-900_bc sm:text-xl"
                      size="txtSairaCondensedRegular24"
                    >
                      Verbleibende Zeit: 45 Tage, 3 Stunden, 45 min, 32 sec
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[351px] sm:text-4xl md:text-[38px] text-[40px] text-green-A700_01"
                    size="txtSairaCondensedRegular40"
                  >
                    Ziel 1
                  </Text>
                  <Img
                    className="h-6 ml-6 md:ml-[0] w-6"
                    src="images/img_eparrowdownbold.svg"
                    alt="eparrowdownbold"
                  />
                </div>
                <div className="absolute bottom-[0] flex md:flex-col flex-row md:gap-5 items-start justify-start right-[8%] w-[55%]">
                  <Text
                    className="text-black-900 text-center text-xl tracking-[-0.40px]"
                    size="txtSairaCondensedSemiBold20"
                  >
                    Abteilung
                  </Text>
                  <Text
                    className="mb-1 md:ml-[0] ml-[86px] text-black-900 text-center text-xl tracking-[-0.40px]"
                    size="txtSairaCondensedSemiBold20"
                  >
                    innovation
                  </Text>
                  <Img
                    className="h-[13px] md:ml-[0] ml-[13px] md:mt-0 mt-[9px]"
                    src="images/img_arrowdown_black_900.svg"
                    alt="arrowdown"
                  />
                  <Text
                    className="md:ml-[0] ml-[65px] text-black-900 text-center text-xl tracking-[-0.40px]"
                    size="txtSairaCondensedSemiBold20"
                  >
                    strategisch
                  </Text>
                  <Img
                    className="h-[13px] ml-0.5 md:ml-[0] md:mt-0 mt-[9px]"
                    src="images/img_arrowdown_black_900.svg"
                    alt="arrowdown_One"
                  />
                  <Text
                    className="md:ml-[0] ml-[90px] md:mt-0 mt-1 text-black-900 text-center text-xl tracking-[-0.40px]"
                    size="txtSairaCondensedSemiBold20"
                  >
                    esg
                  </Text>
                  <Img
                    className="h-[13px] md:ml-[0] ml-[11px] md:mt-0 mt-[9px]"
                    src="images/img_arrowdown_black_900.svg"
                    alt="arrowdown_Two"
                  />
                  <Text
                    className="md:ml-[0] ml-[93px] text-center text-green-A700_01 text-xl tracking-[-0.40px]"
                    size="txtSairaCondensedSemiBold20GreenA70001"
                  >
                    gesamt
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[34px] items-start justify-start md:ml-[0] ml-[86px] w-[92%] md:w-full">
                <List
                  className="flex flex-col gap-6 items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-end my-0 w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-green-A700_01 sm:text-xl"
                      size="txtSairaCondensedRegular24GreenA70001"
                    >
                      1
                    </Text>
                    <Img
                      className="h-12 md:h-auto ml-14 md:ml-[0] rounded-[50%] w-12"
                      src="images/img_user1.png"
                      alt="userOne"
                    />
                    <Text
                      className="ml-16 md:ml-[0] text-green-A700_01 text-lg tracking-[-0.36px]"
                      size="txtSairaCondensedRegular18"
                    >
                      Steffen Strese
                    </Text>
                    <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[158px] w-[57%] md:w-full">
                      <Text
                        className="text-center text-green-A700_01 text-lg tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18"
                      >
                        F&E
                      </Text>
                      <Text
                        className="text-center text-green-A700_01 text-lg tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18"
                      >
                        96%
                      </Text>
                      <Text
                        className="text-center text-green-A700_01 text-lg tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18"
                      >
                        45%
                      </Text>
                      <Text
                        className="text-center text-green-A700_01 text-lg tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18"
                      >
                        78%
                      </Text>
                      <Text
                        className="text-center text-green-A700_01 text-lg tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18"
                      >
                        73%
                      </Text>
                    </div>
                    <div className="h-[19px] md:ml-[0] ml-[45px] relative w-[4%] md:w-full">
                      <div className="absolute bg-black-900_a0 h-[18px] inset-x-[0] mx-auto top-[0] w-full"></div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-center text-white-A700 text-xs tracking-[-0.24px] w-max"
                        size="txtSairaCondensedRegular12"
                      >
                        info
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-end my-0 w-full">
                    <Text
                      className="md:mt-0 mt-[5px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                      size="txtSairaCondensedRegular24WhiteA700"
                    >
                      2
                    </Text>
                    <Img
                      className="h-12 md:h-auto ml-14 md:ml-[0] rounded-[50%] w-12"
                      src="images/img_user1.png"
                      alt="userTwo"
                    />
                    <Text
                      className="ml-16 md:ml-[0] md:mt-0 mt-2.5 text-lg text-white-A700 tracking-[-0.36px]"
                      size="txtSairaCondensedRegular18WhiteA700"
                    >
                      Tim Tegeder
                    </Text>
                    <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[153px] md:mt-0 mt-2.5 w-[59%] md:w-full">
                      <Text
                        className="text-center text-lg text-white-A700 tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18WhiteA700"
                      >
                        Beratung
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[113px] text-center text-lg text-white-A700 tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18WhiteA700"
                      >
                        85%
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[140px] text-center text-lg text-white-A700 tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18WhiteA700"
                      >
                        56%
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[132px] text-center text-lg text-white-A700 tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18WhiteA700"
                      >
                        71%
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[133px] text-center text-lg text-white-A700 tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18WhiteA700"
                      >
                        70%
                      </Text>
                    </div>
                    <div className="h-[19px] ml-11 md:ml-[0] md:mt-0 mt-4 relative w-[4%] md:w-full">
                      <div className="absolute bg-black-900 h-[18px] inset-x-[0] mx-auto top-[0] w-full"></div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-center text-white-A700 text-xs tracking-[-0.24px] w-max"
                        size="txtSairaCondensedRegular12"
                      >
                        info
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-end my-0 w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                      size="txtSairaCondensedRegular24WhiteA700"
                    >
                      3
                    </Text>
                    <Img
                      className="h-12 md:h-auto ml-14 md:ml-[0] rounded-[50%] w-12"
                      src="images/img_user1.png"
                      alt="userThree"
                    />
                    <Text
                      className="ml-16 md:ml-[0] text-lg text-white-A700 tracking-[-0.36px]"
                      size="txtSairaCondensedRegular18WhiteA700"
                    >
                      Darius Abel
                    </Text>
                    <div className="flex md:flex-1 md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[165px] w-[58%] md:w-full">
                      <Text
                        className="text-center text-lg text-white-A700 tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18WhiteA700"
                      >
                        Logistik
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[118px] text-center text-lg text-white-A700 tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18WhiteA700"
                      >
                        77%
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[141px] text-center text-lg text-white-A700 tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18WhiteA700"
                      >
                        35%
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[131px] text-center text-lg text-white-A700 tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18WhiteA700"
                      >
                        86%
                      </Text>
                      <Text
                        className="md:ml-[0] ml-[130px] text-center text-lg text-white-A700 tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18WhiteA700"
                      >
                        66%
                      </Text>
                    </div>
                    <div className="h-[19px] ml-11 md:ml-[0] relative w-[4%] md:w-full">
                      <div className="absolute bg-black-900_a0 h-[18px] inset-x-[0] mx-auto top-[0] w-full"></div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-center text-white-A700 text-xs tracking-[-0.24px] w-max"
                        size="txtSairaCondensedRegular12"
                      >
                        info
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-end my-0 w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                      size="txtSairaCondensedRegular24WhiteA700"
                    >
                      4
                    </Text>
                    <Img
                      className="h-12 md:h-auto md:ml-[0] ml-[55px] rounded-[50%] w-12"
                      src="images/img_user1.png"
                      alt="userFour"
                    />
                    <Text
                      className="ml-16 md:ml-[0] text-lg text-white-A700 tracking-[-0.36px]"
                      size="txtSairaCondensedRegular18WhiteA700"
                    >
                      Lars Moesezahl
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[135px] text-center text-lg text-white-A700 tracking-[-0.36px]"
                      size="txtSairaCondensedRegular18WhiteA700"
                    >
                      Finanzen
                    </Text>
                    <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[114px] w-[44%] md:w-full">
                      <Text
                        className="text-center text-lg text-white-A700 tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18WhiteA700"
                      >
                        23%
                      </Text>
                      <Text
                        className="text-center text-lg text-white-A700 tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18WhiteA700"
                      >
                        98%
                      </Text>
                      <Text
                        className="text-center text-lg text-white-A700 tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18WhiteA700"
                      >
                        65%
                      </Text>
                      <Text
                        className="text-center text-lg text-white-A700 tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18WhiteA700"
                      >
                        62%
                      </Text>
                    </div>
                    <div className="h-[19px] ml-11 md:ml-[0] relative w-[4%] md:w-full">
                      <div className="absolute bg-black-900_a0 h-[18px] inset-x-[0] mx-auto top-[0] w-full"></div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-center text-white-A700 text-xs tracking-[-0.24px] w-max"
                        size="txtSairaCondensedRegular12"
                      >
                        info
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-end my-0 w-full">
                    <Text
                      className="md:mt-0 mt-[5px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                      size="txtSairaCondensedRegular24WhiteA700"
                    >
                      5
                    </Text>
                    <Img
                      className="h-12 md:h-auto ml-14 md:ml-[0] rounded-[50%] w-12"
                      src="images/img_user1.png"
                      alt="userFive"
                    />
                    <Text
                      className="ml-16 md:ml-[0] md:mt-0 mt-2.5 text-lg text-white-A700 tracking-[-0.36px]"
                      size="txtSairaCondensedRegular18WhiteA700"
                    >
                      Fabian Klaps
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[155px] md:mt-0 mt-1 text-center text-lg text-white-A700 tracking-[-0.36px]"
                      size="txtSairaCondensedRegular18WhiteA700"
                    >
                      Verkauf
                    </Text>
                    <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[117px] md:mt-0 mt-2.5 w-[44%] md:w-full">
                      <Text
                        className="text-center text-lg text-white-A700 tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18WhiteA700"
                      >
                        43%
                      </Text>
                      <Text
                        className="text-center text-lg text-white-A700 tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18WhiteA700"
                      >
                        67%
                      </Text>
                      <Text
                        className="text-center text-lg text-white-A700 tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18WhiteA700"
                      >
                        54%
                      </Text>
                      <Text
                        className="text-center text-lg text-white-A700 tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18WhiteA700"
                      >
                        55%
                      </Text>
                    </div>
                    <div className="h-[19px] ml-11 md:ml-[0] md:mt-0 mt-4 relative w-[4%] md:w-full">
                      <div className="absolute bg-black-900_a0 h-[18px] inset-x-[0] mx-auto top-[0] w-full"></div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-center text-white-A700 text-xs tracking-[-0.24px] w-max"
                        size="txtSairaCondensedRegular12"
                      >
                        info
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-end my-0 w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                      size="txtSairaCondensedRegular24WhiteA700"
                    >
                      6
                    </Text>
                    <Img
                      className="h-12 md:h-auto md:ml-[0] ml-[55px] rounded-[50%] w-12"
                      src="images/img_user1.png"
                      alt="userSix"
                    />
                    <Text
                      className="ml-16 md:ml-[0] text-lg text-white-A700 tracking-[-0.36px]"
                      size="txtSairaCondensedRegular18WhiteA700"
                    >
                      Sam Gende
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[181px] text-center text-lg text-white-A700 tracking-[-0.36px]"
                      size="txtSairaCondensedRegular18WhiteA700"
                    >
                      IT
                    </Text>
                    <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[134px] w-[44%] md:w-full">
                      <Text
                        className="text-center text-lg text-white-A700 tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18WhiteA700"
                      >
                        49%
                      </Text>
                      <Text
                        className="text-center text-lg text-white-A700 tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18WhiteA700"
                      >
                        52%
                      </Text>
                      <Text
                        className="text-center text-lg text-white-A700 tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18WhiteA700"
                      >
                        33%
                      </Text>
                      <Text
                        className="text-center text-lg text-white-A700 tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18WhiteA700"
                      >
                        45%
                      </Text>
                    </div>
                    <div className="h-[19px] ml-11 md:ml-[0] relative w-[4%] md:w-full">
                      <div className="absolute bg-black-900_a0 h-[18px] inset-x-[0] mx-auto top-[0] w-full"></div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-center text-white-A700 text-xs tracking-[-0.24px] w-max"
                        size="txtSairaCondensedRegular12"
                      >
                        info
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-end my-0 w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                      size="txtSairaCondensedRegular24WhiteA700"
                    >
                      7
                    </Text>
                    <Img
                      className="h-12 md:h-auto ml-14 md:ml-[0] rounded-[50%] w-12"
                      src="images/img_user1.png"
                      alt="userSeven"
                    />
                    <Text
                      className="ml-16 md:ml-[0] text-lg text-white-A700 tracking-[-0.36px]"
                      size="txtSairaCondensedRegular18WhiteA700"
                    >
                      Leon Rosenkranz
                    </Text>
                    <Text
                      className="ml-32 md:ml-[0] text-center text-lg text-white-A700 tracking-[-0.36px]"
                      size="txtSairaCondensedRegular18WhiteA700"
                    >
                      Technik
                    </Text>
                    <div className="flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[118px] w-[44%] md:w-full">
                      <Text
                        className="text-center text-lg text-white-A700 tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18WhiteA700"
                      >
                        18%
                      </Text>
                      <Text
                        className="text-center text-lg text-white-A700 tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18WhiteA700"
                      >
                        28%
                      </Text>
                      <Text
                        className="text-center text-lg text-white-A700 tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18WhiteA700"
                      >
                        57%
                      </Text>
                      <Text
                        className="text-center text-lg text-white-A700 tracking-[-0.36px]"
                        size="txtSairaCondensedRegular18WhiteA700"
                      >
                        34%
                      </Text>
                    </div>
                    <div className="h-[19px] ml-11 md:ml-[0] relative w-[4%] md:w-full">
                      <div className="absolute bg-black-900_a0 h-[18px] inset-x-[0] mx-auto top-[0] w-full"></div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-center text-white-A700 text-xs tracking-[-0.24px] w-max"
                        size="txtSairaCondensedRegular12"
                      >
                        info
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="flex flex-row gap-[21px] items-center justify-start w-[9%] md:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowleft.svg"
                    alt="arrowleft"
                  />
                  <Text
                    className="text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtSairaCondensedRegular24WhiteA700"
                  >
                    zurück
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Header className="bg-gray-900_bc flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
            <div className="bg-gray-900_bc flex flex-col gap-[37px] items-center justify-start pb-3.5 px-3.5 md:px-5 w-[6%] md:w-full">
              <div className="flex flex-col gap-[41px] items-center justify-start w-[72%] md:w-full">
                <div className="flex flex-col relative w-[91%]">
                  <Img
                    className="h-[30px] mx-auto w-[30px]"
                    src="images/img_home.svg"
                    alt="home"
                  />
                  <Text
                    className="capitalize mt-[-4.74px] mx-auto text-[11px] text-center text-white-A700 z-[1]"
                    size="txtSairaCondensedSemiBold11"
                  >
                    Home
                  </Text>
                </div>
                <div className="flex flex-col relative w-[91%]">
                  <Img
                    className="common-pointer h-[30px] mx-auto w-[30px]"
                    src="images/img_music.svg"
                    alt="music"
                    onClick={() => navigate("/goals")}
                  />
                  <Text
                    className="capitalize mt-[-5.04px] mx-auto text-[11px] text-center text-white-A700 z-[1]"
                    size="txtSairaCondensedSemiBold11"
                  >
                    Ziele
                  </Text>
                </div>
                <div className="md:h-[30px] h-[43px] relative w-full">
                  <Img
                    className="common-pointer absolute h-[30px] inset-x-[0] mx-auto top-[0] w-[30px]"
                    src="images/img_folder.svg"
                    alt="folder"
                    onClick={() => navigate("/projects")}
                  />
                  <Text
                    className="absolute bottom-[0] capitalize inset-x-[0] mx-auto text-[11px] text-center text-white-A700 w-max"
                    size="txtSairaCondensedSemiBold11"
                  >
                    Projekte
                  </Text>
                </div>
              </div>
              <div className="md:h-[30px] h-[42px] relative w-[96%]">
                <Img
                  className="absolute h-[30px] inset-x-[0] mx-auto top-[0] w-[30px]"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                />
                <Text
                  className="absolute bottom-[0] capitalize inset-x-[0] mx-auto text-[11px] text-center text-white-A700 w-max"
                  size="txtSairaCondensedSemiBold11"
                >
                  Scoreboard
                </Text>
              </div>
              <div className="h-11 md:h-[576px] mb-[546px] relative w-[66%]">
                <Text
                  className="absolute bottom-[0] capitalize inset-x-[0] mx-auto text-[11px] text-center text-white-A700 w-max"
                  size="txtSairaCondensedSemiBold11"
                >
                  Bildung
                </Text>
                <Img
                  className="absolute h-[30px] inset-x-[0] mx-auto top-[0] w-[30px]"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown_Three"
                />
              </div>
            </div>
            <div className="bg-gray-900_bf flex md:flex-col flex-row md:gap-5 items-end justify-start p-[5px] w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[173px] md:mt-0 my-[5px] md:px-5 w-[2%] md:w-full">
                <Img className="h-3.5" src="images/img_mail.svg" alt="mail" />
              </div>
              <Text
                className="lowercase ml-1.5 md:ml-[0] md:mt-0 mt-[5px] text-center text-white-A700 text-xs"
                size="txtSairaCondensedRegular12"
              >
                support@sustainchallenge.com
              </Text>
              <Text
                className="common-pointer lowercase mb-1.5 md:ml-[0] ml-[498px] text-center text-white-A700 text-xs"
                size="txtSairaCondensedRegular12"
                onClick={() => navigate("/furtherinformation")}
              >
                weitere informationen
              </Text>
              <Text
                className="lowercase mb-[5px] md:ml-[0] ml-[81px] text-center text-white-A700 text-xs"
                size="txtSairaCondensedRegular12"
              >
                Impressum
              </Text>
              <Text
                className="lowercase mb-1.5 md:ml-[0] ml-[147px] text-center text-white-A700 text-xs"
                size="txtSairaCondensedRegular12"
              >
                Datenschutz
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreboardPage;
