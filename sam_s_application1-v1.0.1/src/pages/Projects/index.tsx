import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";
import Header from "components/Header";

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat flex font-sairacondensed h-[1024px] justify-end mx-auto relative w-full"
        style={{ backgroundImage: "url('images/img_projects.png')" }}
      >
        <div className="bg-blue_gray-100_b2 flex flex-col gap-[42px] h-full items-center justify-center max-w-[1255px] mb-[98px] mt-auto mx-auto p-[11px] md:px-5 w-full">
          <div className="flex flex-col items-center justify-start mt-[37px] w-full">
            <div className="bg-black-900_bf flex sm:flex-col flex-row sm:gap-5 items-start justify-start p-2.5 w-full">
              <Text
                className="sm:ml-[0] ml-[5px] sm:mt-0 mt-4 sm:text-4xl md:text-[38px] text-[40px] text-white-A700_cc"
                size="txtSairaCondensedBold40"
              >
                Zug Nutzung im Inland{" "}
              </Text>
              <Text
                className="sm:ml-[0] ml-[348px] sm:mt-0 mt-[17px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700_cc"
                size="txtSairaCondensedMedium32"
              >
                -Management Staff{" "}
              </Text>
              <Img
                className="common-pointer h-8 sm:ml-[0] ml-[220px] sm:mt-0 mt-[23px]"
                src="images/img_arrowdown_gray_500.svg"
                alt="arrowdown"
                onClick={() => navigate("/projectsone")}
              />
            </div>
          </div>
          <div className="bg-black-900_bf flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-4 w-full">
            <Text
              className="sm:mt-0 my-0.5 sm:text-4xl md:text-[38px] text-[40px] text-white-A700_cc"
              size="txtSairaCondensedBold40"
            >
              Keine Abrechnungen ausdrucken{" "}
            </Text>
            <Text
              className="sm:ml-[0] ml-[205px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700_cc"
              size="txtSairaCondensedMedium32"
            >
              -Office Staff{" "}
            </Text>
            <Img
              className="h-8 sm:ml-[0] ml-[303px]"
              src="images/img_arrowdown_gray_500.svg"
              alt="arrowdown_One"
            />
          </div>
          <div className="bg-black-900_bf flex sm:flex-col flex-row sm:gap-5 items-center justify-start mb-[275px] p-4 w-full">
            <Text
              className="sm:mt-0 my-0.5 sm:text-4xl md:text-[38px] text-[40px] text-white-A700_cc"
              size="txtSairaCondensedBold40"
            >
              Ableitungswärme für Büros nutzen
            </Text>
            <Text
              className="sm:ml-[0] ml-[172px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700_cc"
              size="txtSairaCondensedMedium32"
            >
              -Production Staff{" "}
            </Text>
            <Img
              className="h-8 sm:ml-[0] ml-[248px]"
              src="images/img_arrowdown_gray_500.svg"
              alt="arrowdown_Two"
            />
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
                    className="absolute h-[30px] inset-x-[0] mx-auto top-[0] w-[30px]"
                    src="images/img_folder.svg"
                    alt="folder"
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
                  className="common-pointer absolute h-[30px] inset-x-[0] mx-auto top-[0] w-[30px]"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                  onClick={() => navigate("/scoreboard")}
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

export default ProjectsPage;
