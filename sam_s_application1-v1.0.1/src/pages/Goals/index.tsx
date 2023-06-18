import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, List, Text } from "components";

const GoalsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat border border-black-900 border-solid flex flex-col font-sairacondensed sm:gap-10 md:gap-10 gap-16 h-[1024px] items-center justify-start mx-auto p-[70px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_goals.png')" }}
      >
        <div className="md:h-[87px] h-[90px] max-w-[930px] mx-auto relative w-full">
          <div className="absolute bg-black-900_bf h-[85px] inset-x-[0] mx-auto top-[0] w-full"></div>
          <Text
            className="absolute bottom-[0] capitalize inset-x-[0] mx-auto sm:text-[41px] md:text-[47px] text-[55px] text-center text-white-A700 w-max"
            size="txtSairaCondensedBold55"
          >
            Ritto + Fuchs GmbH X SustainChallenge Ziele
          </Text>
        </div>
        <div className="bg-gray-300_b2 flex flex-col items-center justify-start max-w-[925px] mb-[121px] mx-auto pb-[35px] md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="bg-black-900 flex flex-col items-center justify-start p-1.5 w-full">
              <Text
                className="mb-[5px] sm:text-[31px] md:text-[33px] text-[35px] text-center text-white-A700"
                size="txtSairaCondensedSemiBold35"
              >
                Unsere Ziele
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[68px] w-full">
              <Text
                className="bg-black-900_bf h-[42px] justify-center sm:px-5 px-[35px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700 w-[539px]"
                size="txtSairaCondensedMedium25"
              >
                Was wir erreichen wollen:
              </Text>
              <div className="md:h-[42px] h-[43px] relative w-[38%] md:w-full">
                <div className="absolute bg-black-900_bf h-[42px] inset-[0] justify-center m-auto w-full"></div>
                <Text
                  className="absolute bottom-[0] inset-x-[0] mx-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 w-max"
                  size="txtSairaCondensedMedium25"
                >
                  Progress
                </Text>
              </div>
            </div>
            <List
              className="flex flex-col gap-[51px] items-center mt-[57px] w-full"
              orientation="vertical"
            >
              <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="bg-gray-800_a0 flex md:flex-1 flex-row sm:gap-10 items-center justify-between p-[9px] w-[59%] md:w-full">
                  <Text
                    className="ml-[41px] text-[13px] text-green-A700"
                    size="txtSairaCondensedMedium13"
                  >
                    <span className="text-green-A700 font-sairacondensed text-left text-lg font-medium">
                      Ziel 1 :
                    </span>
                    <span className="text-white-A700 font-sairacondensed text-left text-[15px] font-medium">
                      {" "}
                      Emissionen in der Produktion reduzieren
                    </span>
                  </Text>
                  <div className="h-[19px] mr-3.5 relative w-[13%]">
                    <div className="absolute bg-black-900_bf h-[15px] inset-[0] justify-center m-auto w-full"></div>
                    <Text
                      className="absolute h-full inset-[0] justify-center m-auto text-center text-white-A700 text-xs w-max"
                      size="txtSairaCondensedSemiBold12"
                    >
                      mehr infos
                    </Text>
                  </div>
                </div>
                <Button className="bg-gradient  cursor-pointer font-medium leading-[normal] min-w-[345px] py-[7px] text-base text-black-900 text-center">
                  40%
                </Button>
              </div>
              <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="bg-gray-900_77 flex md:flex-1 flex-row sm:gap-10 items-start justify-between p-2 w-[59%] md:w-full">
                  <Text
                    className="ml-[42px] mt-[3px] text-[13px] text-black-900"
                    size="txtSairaCondensedMedium13Black900"
                  >
                    <span className="text-green-A700 font-sairacondensed text-left text-lg font-medium">
                      Ziel 2 :
                    </span>
                    <span className="text-green-A700 font-sairacondensed text-left font-medium">
                      {" "}
                    </span>
                    <span className="text-white-A700 font-sairacondensed text-left text-[15px] font-medium">
                      Minimierung des Papierverbrauchs
                    </span>
                  </Text>
                  <div className="h-[19px] mr-[15px] relative w-[13%]">
                    <div className="absolute bg-black-900_bf h-[15px] inset-[0] justify-center m-auto w-full"></div>
                    <Text
                      className="absolute h-full inset-[0] justify-center m-auto text-center text-white-A700 text-xs w-max"
                      size="txtSairaCondensedSemiBold12"
                    >
                      mehr infos
                    </Text>
                  </div>
                </div>
                <Button className="bg-gradient  cursor-pointer font-medium leading-[normal] min-w-[345px] py-[7px] text-base text-black-900 text-center">
                  75%
                </Button>
              </div>
              <div className="flex flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="bg-gray-800_a0 flex md:flex-1 flex-row sm:gap-10 items-center justify-between p-2 w-[59%] md:w-full">
                  <Text
                    className="ml-[42px] mt-[3px] text-[13px] text-black-900"
                    size="txtSairaCondensedMedium13Black900"
                  >
                    <span className="text-green-A700 font-sairacondensed text-left text-lg font-medium">
                      Ziel 3 :
                    </span>
                    <span className="text-black-900 font-sairacondensed text-left text-sm font-medium">
                      {" "}
                    </span>
                    <span className="text-white-A700 font-sairacondensed text-left text-[15px] font-medium">
                      Nutzung nachhaltiger Verkehrsmittel
                    </span>
                  </Text>
                  <div
                    className="common-pointer h-[19px] mr-[15px] relative w-[13%]"
                    onClick={() => navigate("/moreinfoaboutgoal")}
                  >
                    <div className="absolute bg-black-900_bf h-[15px] inset-[0] justify-center m-auto w-full"></div>
                    <Text
                      className="absolute h-full inset-[0] justify-center m-auto text-center text-white-A700 text-xs w-max"
                      size="txtSairaCondensedSemiBold12"
                    >
                      mehr infos
                    </Text>
                  </div>
                </div>
                <Button className="bg-gradient  cursor-pointer font-medium leading-[normal] min-w-[345px] py-[7px] text-base text-black-900 text-center">
                  25%
                </Button>
              </div>
            </List>
            <Button className="bg-black-900 cursor-pointer font-semibold leading-[normal] min-w-[539px] sm:min-w-full mt-[58px] py-2 text-center text-lg text-white-A700">
              Mehr
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoalsPage;
