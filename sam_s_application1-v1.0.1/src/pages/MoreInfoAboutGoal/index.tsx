import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import MoreInfoAboutGoalRahmen from "components/MoreInfoAboutGoalRahmen";

const MoreInfoAboutGoalPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat font-sairacondensed h-[1024px] mx-auto relative w-full"
        style={{ backgroundImage: "url('images/img_moreinfoabout.png')" }}
      >
        <div className="flex flex-col gap-5 h-full items-center justify-start m-auto max-w-[930px] md:px-5 w-full">
          <div className="h-[26px] relative w-full">
            <div className="absolute bg-gradient  h-[23px] inset-[0] justify-center m-auto w-full"></div>
            <Text
              className="absolute h-full inset-[0] justify-center m-auto text-base text-black-900 text-center w-max"
              size="txtSairaCondensedMedium16"
            >
              25%
            </Text>
          </div>
          <div className="bg-gray-300_b2 flex flex-col items-center justify-start pb-[149px] w-full">
            <div className="flex flex-col gap-[31px] items-center justify-start w-full">
              <div className="bg-black-900 flex flex-col items-center justify-start p-0.5 w-full">
                <Text
                  className="mb-1 sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700"
                  size="txtSairaCondensedSemiBold40"
                >
                  Das Ziel
                </Text>
              </div>
              <div className="flex md:flex-col flex-row md:gap-12 items-start justify-between w-[97%] md:w-full">
                <div className="flex flex-col items-center justify-start w-[63%] md:w-full">
                  <div className="bg-black-900_bf flex flex-col items-end justify-start sm:pl-5 pl-[22px] py-[22px] w-full">
                    <Text
                      className="mb-[18px] text-white-A700 text-xl w-[96%] sm:w-full"
                      size="txtSairaCondensedMedium20"
                    >
                      Motivation: Treibhausgase sind eine der führenden Treiber
                      hinter dem Klimawandel. Eine Reduktion der Emissionen hat
                      somit einen positiven Einfluss.
                    </Text>
                  </div>
                  <Text
                    className="bg-black-900 h-[65px] justify-center mt-[18px] pb-1.5 pt-2.5 sm:px-5 px-[35px] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 w-[557px]"
                    size="txtSairaCondensedSemiBold30"
                  >
                    Verwandte Projekte
                  </Text>
                  <div className="bg-gray-800_a0 flex flex-row sm:gap-10 items-center justify-between mt-[39px] p-1.5 w-full">
                    <Text
                      className="ml-[21px] mt-0.5 text-base text-white-A700"
                      size="txtSairaCondensedMedium16WhiteA700"
                    >
                      Zug Nutzung im Inland{" "}
                    </Text>
                    <Button
                      className="common-pointer bg-black-900 cursor-pointer font-medium leading-[normal] min-w-[86px] mr-[13px] my-1 text-[10px] text-center text-white-A700"
                      onClick={() => navigate("/projectsone")}
                    >
                      Zum Project
                    </Button>
                  </div>
                </div>
                <div className="md:h-[351px] h-[355px] relative w-[33%] md:w-full">
                  <div className="absolute bg-gray-300_b2 flex flex-col h-full inset-[0] items-center justify-center m-auto pr-[9px] py-[9px] w-full">
                    <div className="flex flex-col gap-6 items-center justify-start mb-2.5 mt-[97px] w-full">
                      <div className="flex flex-row gap-[19px] items-center justify-between w-full">
                        <div className="flex flex-col gap-[37px] items-center justify-start">
                          <Text
                            className="bg-black-900_bf h-[34px] justify-center pl-[15px] sm:pr-5 pr-[35px] py-[9px] text-[10px] text-white-A700 w-[169px]"
                            size="txtSairaCondensedMedium10"
                          >
                            Bahncard für das Management
                          </Text>
                          <Text
                            className="bg-black-900_bf h-[34px] justify-center pl-[15px] sm:pr-5 pr-[35px] py-[9px] text-[10px] text-white-A700 w-[169px]"
                            size="txtSairaCondensedMedium10"
                          >
                            Keine Unterstützung für Flüge
                          </Text>
                          <Text
                            className="bg-black-900_bf h-[34px] justify-center pl-[17px] sm:pr-5 pr-[35px] py-[9px] text-[10px] text-white-A700 w-[169px]"
                            size="txtSairaCondensedMedium10"
                          >
                            Nutzung Jobrad{" "}
                          </Text>
                        </div>
                        <Img
                          className="h-[174px]"
                          src="images/img_optionsideasjet.svg"
                          alt="optionsideasjet"
                        />
                      </div>
                      <Text
                        className="bg-black-900 h-[26px] justify-center sm:px-5 px-[35px] text-[15px] text-center text-white-A700 w-[169px]"
                        size="txtSairaCondensedSemiBold15"
                      >
                        Mehr
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="absolute bg-black-900 h-[51px] inset-x-[0] justify-center mx-auto sm:px-5 px-[35px] text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 top-[0] w-max"
                    size="txtSairaCondensedSemiBold30"
                  >
                    Neue Ideen
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MoreInfoAboutGoalRahmen
          className="absolute border border-black-900 border-solid flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
          searchforgoals={
            <Text className="capitalize font-light md:ml-[0] ml-[30px] text-black-900_bf text-xs">
              <span className="text-black-900_bf font-sairacondensed text-left">
                Suche
              </span>
              <span className="text-black-900_bf font-sairacondensed text-left">
                {" "}
              </span>
              <span className="text-black-900_bf font-sairacondensed lowercase text-left">
                nach
              </span>
              <span className="text-black-900_bf font-sairacondensed lowercase text-left">
                {" "}
                ziele, ideen, projekte and mehr
              </span>
            </Text>
          }
          mustergmbhproje="Emissionen in der Produnktion reduzieren"
          furtherinformat="Weitere informationen"
          termsconditions="impressum"
        />
      </div>
    </>
  );
};

export default MoreInfoAboutGoalPage;
