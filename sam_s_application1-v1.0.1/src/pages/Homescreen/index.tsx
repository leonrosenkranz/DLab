import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import Header from "components/Header";

const HomescreenPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat flex font-sairacondensed h-[1024px] justify-end mx-auto relative w-full"
        style={{ backgroundImage: "url('images/img_homescreen.png')" }}
      >
        <div className="flex flex-col h-full items-start justify-start max-w-[1050px] mb-[73px] mt-auto mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
            <div className="md:h-[318px] h-[330px] relative w-[41%] md:w-full">
              <div className="absolute md:h-[318px] h-[324px] inset-[0] justify-center m-auto w-full">
                <div className="md:h-[318px] h-[324px] m-auto w-full">
                  <div className="absolute bg-gray-300_b2 flex flex-col h-full inset-[0] items-start justify-center m-auto pb-[17px] w-full">
                    <div className="bg-black-900 h-[39px] w-full"></div>
                    <div className="h-8 md:h-[63px] mt-[31px] relative w-[59%]">
                      <div className="absolute bg-black-900_bf bottom-[13%] h-[22px] inset-x-[0] mx-auto w-full"></div>
                      <Text
                        className="absolute h-full inset-y-[0] left-[9%] my-auto text-white-A700 text-xl"
                        size="txtSairaCondensedMedium20"
                      >
                        Was wir erreichen wollen:
                      </Text>
                    </div>
                    <div className="md:h-12 h-[22px] mt-[27px] relative w-[59%]">
                      <div className="absolute bg-gray-800_a0 h-[21px] inset-[0] justify-center m-auto w-full"></div>
                      <Text
                        className="absolute right-[0] text-[13px] text-green-A700 top-[0]"
                        size="txtSairaCondensedMedium13"
                      >
                        <span className="text-green-A700 font-sairacondensed text-left text-base font-medium">
                          Ziel 1 :
                        </span>
                        <span className="text-white-A700 font-sairacondensed text-left font-medium">
                          {" "}
                          Emissionen in der Produktion reduzieren
                        </span>
                      </Text>
                    </div>
                    <div className="md:h-12 h-[21px] mt-[27px] relative w-[59%]">
                      <div className="absolute bg-gray-900_77 h-[21px] inset-[0] justify-center m-auto w-full"></div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-[13px] text-black-900 w-max"
                        size="txtSairaCondensedMedium13Black900"
                      >
                        <span className="text-green-A700 font-sairacondensed text-left text-base font-medium">
                          Ziel 2 :
                        </span>
                        <span className="text-green-A700 font-sairacondensed text-left font-medium">
                          {" "}
                        </span>
                        <span className="text-white-A700 font-sairacondensed text-left font-medium">
                          Minimierung des Papierverbauchs
                        </span>
                      </Text>
                    </div>
                    <div className="md:h-12 h-[21px] mt-[27px] relative w-[59%]">
                      <div className="absolute bg-gray-800_a0 h-[21px] inset-[0] justify-center m-auto w-full"></div>
                      <Text
                        className="absolute bottom-[0] right-[2%] text-[13px] text-black-900"
                        size="txtSairaCondensedMedium13Black900"
                      >
                        <span className="text-green-A700 font-sairacondensed text-left text-base font-medium">
                          Ziel 3 :
                        </span>
                        <span className="text-black-900 font-sairacondensed text-left text-sm font-medium">
                          {" "}
                        </span>
                        <span className="text-white-A700 font-sairacondensed text-left text-sm font-medium">
                          Nutzung nachhaltiger Verkehrsmittel
                        </span>
                      </Text>
                    </div>
                    <div className="h-[25px] md:h-[55px] md:ml-[0] ml-[90px] mt-[31px] relative w-[59%]">
                      <div className="absolute bg-black-900 h-6 inset-[0] justify-center m-auto w-full"></div>
                      <Text
                        className="absolute bottom-[0] inset-x-[0] mx-auto text-[15px] text-center text-white-A700 w-max"
                        size="txtSairaCondensedSemiBold15"
                      >
                        Mehr
                      </Text>
                    </div>
                  </div>
                  <div className="absolute bg-gradient  h-[21px] right-[0] top-[40%] w-[38%]"></div>
                  <div className="absolute bg-gradient  bottom-[38%] h-[21px] right-[0] w-[38%]"></div>
                  <div className="absolute bg-gradient  bottom-[23%] h-[21px] right-[0] w-[38%]"></div>
                </div>
                <div className="absolute bg-black-900_bf h-[22px] right-[0] top-[23%] w-[38%]"></div>
              </div>
              <Text
                className="absolute inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 top-[0] w-max"
                size="txtSairaCondensedSemiBold30"
              >
                Unsere Ziele
              </Text>
              <div className="absolute flex flex-col gap-[22px] h-max inset-y-[0] items-center justify-start my-auto right-[11%] w-[15%]">
                <Text
                  className="text-center text-white-A700 text-xl"
                  size="txtSairaCondensedMedium20"
                >
                  Progress
                </Text>
                <div className="flex flex-col gap-[23px] items-start justify-start">
                  <Text
                    className="h-[26px] text-base text-black-900 text-center"
                    size="txtSairaCondensedMedium16"
                  >
                    40%
                  </Text>
                  <Text
                    className="ml-0.5 md:ml-[0] text-base text-black-900 text-center"
                    size="txtSairaCondensedMedium16"
                  >
                    75%
                  </Text>
                  <Text
                    className="text-base text-black-900 text-center"
                    size="txtSairaCondensedMedium16"
                  >
                    25%
                  </Text>
                </div>
              </div>
            </div>
            <div className="md:h-[329px] h-[331px] relative w-[43%] md:w-full">
              <div className="absolute md:h-[329px] h-[330px] inset-[0] justify-center m-auto w-full">
                <div className="absolute bg-gray-300_b2 flex flex-col h-full inset-[0] items-start justify-center m-auto pr-[19px] py-[19px] w-full">
                  <div className="flex flex-col gap-[21px] justify-start mt-[81px] w-[99%] md:w-full">
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex flex-col gap-[34px] items-center justify-start">
                        <Text
                          className="bg-black-900_bf h-8 justify-center pl-[25px] pr-[35px] pt-1 sm:px-5 text-base text-white-A700 w-[260px]"
                          size="txtSairaCondensedMedium16WhiteA700"
                        >
                          Zug Nutzung im Inland
                        </Text>
                        <Text
                          className="bg-black-900_bf h-8 justify-center pl-6 pr-[35px] pt-1 sm:px-5 text-base text-white-A700 w-[260px]"
                          size="txtSairaCondensedMedium16WhiteA700"
                        >
                          Keine Abrechnungen ausdrucken
                        </Text>
                        <Text
                          className="bg-black-900_bf h-8 justify-center pl-[25px] pr-[35px] pt-1 sm:px-5 text-base text-white-A700 w-[260px]"
                          size="txtSairaCondensedMedium16WhiteA700"
                        >
                          Ableitungswärme nutzen für Büros
                        </Text>
                      </div>
                      <Img
                        className="h-[164px]"
                        src="images/img_optionsnewideas.svg"
                        alt="optionsnewideas"
                      />
                    </div>
                    <div className="h-[25px] md:ml-[0] ml-[93px] relative w-[62%]">
                      <div
                        className="common-pointer absolute bg-black-900 h-[25px] inset-[0] justify-center m-auto w-full"
                        onClick={() => navigate("/ideasfeed")}
                      ></div>
                      <Text
                        className="absolute inset-x-[0] mx-auto text-[15px] text-center text-white-A700 top-[0] w-max"
                        size="txtSairaCondensedSemiBold15"
                      >
                        Mehr
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-black-900 h-12 inset-x-[0] mx-auto top-[0] w-full"></div>
              </div>
              <Text
                className="absolute inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 top-[0] w-max"
                size="txtSairaCondensedSemiBold30"
              >
                Neue Ideen
              </Text>
            </div>
          </div>
          <div className="md:h-[182px] h-[95px] md:ml-[0] ml-[15px] mt-[87px] relative w-[89%] md:w-full">
            <div className="absolute bg-black-900_bf h-[85px] inset-x-[0] mx-auto top-[0] w-full"></div>
            <Text
              className="absolute capitalize h-full inset-[0] justify-center m-auto md:text-5xl text-6xl text-center text-white-A700 w-max"
              size="txtSairaCondensedBold60"
            >
              Ritto + Fuchs GmbH X SustainChallenge
            </Text>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[129px] w-full">
            <div className="md:h-40 h-[191px] relative w-[42%] md:w-full">
              <div className="absolute bg-gray-300_b2 h-[191px] md:h-[19px] inset-[0] justify-center m-auto p-[7px] w-full">
                <div className="absolute bg-black-900 bottom-[4%] h-4 inset-x-[0] mx-auto w-[59%]"></div>
                <Text
                  className="absolute bottom-[4%] inset-x-[0] mx-auto text-center text-white-A700 text-xs w-max"
                  size="txtSairaCondensedSemiBold12"
                >
                  Mehr
                </Text>
              </div>
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                <Button className="bg-black-900 cursor-pointer font-semibold leading-[normal] min-w-[430px] sm:min-w-full py-[3px] text-center text-white-A700 text-xl">
                  {" "}
                  ESG News
                </Button>
                <div className="h-5 md:h-[39px] mt-[19px] relative w-full">
                  <div className="absolute bg-gray-900_77 h-5 inset-[0] justify-center m-auto w-full"></div>
                  <Text
                    className="absolute bottom-[0] left-[5%] text-[10px] text-white-A700"
                    size="txtSairaCondensedSemiBold10"
                  >
                    <span className="text-green-A700_01 font-sairacondensed text-left text-[15px] font-semibold">
                      News 1 :{" "}
                    </span>
                    <span className="text-green-A700_01 font-sairacondensed text-left font-semibold">
                      {" "}
                    </span>
                    <span className="text-white-A700 font-sairacondensed text-left text-xs font-semibold">
                      Google CEO spendet 10 mio. € für den Kampf gegen
                      Klimawandel
                    </span>
                  </Text>
                </div>
                <div className="md:h-12 h-8 mt-4 relative w-full">
                  <div className="absolute bg-gray-900_77 h-5 inset-x-[0] mx-auto top-[13%] w-full"></div>
                  <Text
                    className="absolute h-full inset-y-[0] left-[5%] my-auto text-black-900 text-xl"
                    size="txtSairaCondensedSemiBold20"
                  >
                    <span className="text-green-A700_01 font-sairacondensed text-left text-[15px] font-semibold">
                      News 2 :
                    </span>
                    <span className="text-white-A700 font-sairacondensed text-left text-xs font-semibold">
                      {" "}
                      Elon Musk
                    </span>
                    <span className="text-green-A700_01 font-sairacondensed text-left font-semibold">
                      {" "}
                    </span>
                    <span className="text-white-A700 font-sairacondensed text-left text-xs font-semibold">
                      baut neuen Solarpark vor Nairobi
                    </span>
                  </Text>
                </div>
                <div className="h-6 md:h-[34px] mt-2.5 relative w-full">
                  <div className="absolute bg-gray-900_77 h-5 inset-x-[0] mx-auto top-[0] w-full"></div>
                  <Text
                    className="absolute h-full inset-y-[0] left-[5%] my-auto text-[15px] text-green-A700_01"
                    size="txtSairaCondensedSemiBold15GreenA70001"
                  >
                    <span className="text-green-A700_01 font-sairacondensed text-left font-semibold">
                      News 3 :{" "}
                    </span>
                    <span className="text-white-A700 font-sairacondensed text-left text-xs font-semibold">
                      Nobelpreis geht an Klimaforscher
                    </span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="h-48 md:h-[190px] relative w-[43%] md:w-full">
              <div className="h-48 md:h-[190px] m-auto w-full">
                <div className="absolute bg-gray-300_b2 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[9px] w-full">
                  <div className="h-6 md:h-[172px] mt-[148px] relative w-[61%]">
                    <div
                      className="common-pointer absolute bg-black-900 h-6 inset-[0] justify-center m-auto w-full"
                      onClick={() => navigate("/newideasheet")}
                    ></div>
                    <Text
                      className="absolute h-full inset-[0] justify-center m-auto text-[15px] text-center text-white-A700 w-max"
                      size="txtSairaCondensedSemiBold15"
                    >
                      Neue Idee
                    </Text>
                  </div>
                </div>
                <Button className="absolute bg-black-900 cursor-pointer font-semibold inset-x-[0] leading-[normal] min-w-[447px] sm:min-w-full mx-auto py-1 text-center text-white-A700 text-xl top-[0]">
                  Deine Ideen
                </Button>
                <div className="absolute bg-gray-900_77 bottom-[28%] h-5 md:h-[19px] inset-x-[0] mx-auto md:px-10 sm:px-5 px-[95px] w-full">
                  <div className="absolute bg-black-900_bf h-[13px] right-full top-[15%] w-[15%]"></div>
                  <Text
                    className="absolute right-[24%] text-center text-white-A700 text-xs top-[0]"
                    size="txtSairaCondensedSemiBold12"
                  >
                    bearbeiten
                  </Text>
                </div>
              </div>
              <div className="absolute bottom-[26%] flex flex-row inset-x-[0] items-start justify-between mx-auto w-[93%]">
                <Text
                  className="text-[15px] text-black-900"
                  size="txtSairaCondensedSemiBold15Black900"
                >
                  <span className="text-green-A700_01 font-sairacondensed text-left font-semibold">
                    Idee 2 :
                  </span>
                  <span className="text-black-900 font-sairacondensed text-left font-semibold">
                    {" "}
                  </span>
                  <span className="text-white-A700 font-sairacondensed text-left text-xs font-semibold">
                    Keine Klimaanlage mehr
                  </span>
                </Text>
                <div className="h-[19px] relative w-[16%]">
                  <div className="absolute bg-black-900_bf bottom-[11%] h-[13px] inset-x-[0] mx-auto w-full"></div>
                  <Text
                    className="absolute h-full inset-y-[0] my-auto right-[20%] text-center text-white-A700 text-xs"
                    size="txtSairaCondensedSemiBold12"
                  >
                    löschen
                  </Text>
                </div>
              </div>
              <div className="absolute h-6 inset-x-[0] mx-auto top-[40%] w-full">
                <div className="absolute bg-gray-900_77 flex flex-row gap-[23px] inset-x-[0] items-start justify-end mx-auto px-1.5 top-[0] w-full">
                  <div className="h-[19px] relative w-[15%]">
                    <div className="absolute bg-black-900_bf h-[13px] inset-[0] justify-center m-auto w-full"></div>
                    <Text
                      className="absolute h-full inset-y-[0] left-[11%] my-auto text-center text-white-A700 text-xs"
                      size="txtSairaCondensedSemiBold12"
                    >
                      bearbeiten
                    </Text>
                  </div>
                  <div className="h-[19px] relative w-[15%]">
                    <div className="absolute bg-black-900_bf h-[13px] inset-[0] justify-center m-auto w-full"></div>
                    <Text
                      className="absolute h-full inset-y-[0] my-auto right-[20%] text-center text-white-A700 text-xs"
                      size="txtSairaCondensedSemiBold12"
                    >
                      löschen
                    </Text>
                  </div>
                </div>
                <Text
                  className="absolute h-full inset-y-[0] left-[6%] my-auto text-[15px] text-white-A700"
                  size="txtSairaCondensedSemiBold15"
                >
                  <span className="text-green-A700_01 font-sairacondensed text-left font-semibold">
                    Idee 1 :
                  </span>
                  <span className="text-white-A700 font-sairacondensed text-left font-semibold">
                    {" "}
                  </span>
                  <span className="text-white-A700 font-sairacondensed text-left text-xs font-semibold">
                    Kein Einwegplastik auf Events.
                  </span>
                  <span className="text-white-A700 font-sairacondensed text-left text-xs font-semibold">
                    {" "}
                  </span>
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <Header className="bg-gray-900_bc flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
              <div className="flex flex-row md:gap-10 items-start justify-between max-w-[1227px] mx-auto md:px-5 w-full">
                <div className="bg-gray-900_bc flex flex-col gap-[37px] items-center justify-start pb-3.5 px-3.5">
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
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <Img
                  className="h-8 mt-[229px]"
                  src="images/img_optionsnewideas2.svg"
                  alt="optionsnewideas_One"
                />
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
      </div>
    </>
  );
};

export default HomescreenPage;
