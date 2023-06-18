import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, List, Text } from "components";

const NewIdeaSheetPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat font-sairacondensed h-[1024px] mx-auto pr-0.5 relative w-full"
        style={{ backgroundImage: "url('images/img_newideasheet.png')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[139px] h-full items-center justify-start m-auto max-w-[1120px] md:px-5 w-full">
          <div className="md:h-[431px] h-[443px] relative w-full">
            <div className="absolute bg-gray-300_b2 flex flex-col gap-6 h-full inset-[0] items-center justify-center m-auto pb-[33px] w-full">
              <div className="bg-black-900 h-12 w-full"></div>
              <div className="h-10 md:h-[38px] relative w-full">
                <div className="absolute bg-gray-900_77 h-[38px] inset-x-[0] mx-auto top-[0] w-full"></div>
                <Text
                  className="absolute bottom-[0] right-[0] text-[10px] text-white-A700 w-[94%] sm:w-full"
                  size="txtSairaCondensedSemiBold10"
                >
                  <span className="text-green-A700_01 font-sairacondensed text-left text-xl font-semibold">
                    Welches Problem wollen wir lösen :{" "}
                  </span>
                  <span className="text-green-A700_01 font-sairacondensed text-left font-semibold">
                    {" "}
                  </span>
                  <span className="text-white-A700 font-sairacondensed text-left text-[15px] font-semibold">
                    Reduzierung des Papierverbrauchs
                  </span>
                </Text>
              </div>
              <div className="h-10 md:h-[38px] relative w-full">
                <div className="absolute bg-gray-900_77 h-[38px] inset-x-[0] mx-auto top-[0] w-full"></div>
                <Text
                  className="absolute bottom-[0] right-[0] text-[10px] text-white-A700 w-[94%] sm:w-full"
                  size="txtSairaCondensedSemiBold10"
                >
                  <span className="text-green-A700_01 font-sairacondensed text-left text-xl font-semibold">
                    Ideengeber:{" "}
                  </span>
                  <span className="text-green-A700_01 font-sairacondensed text-left font-semibold">
                    {" "}
                  </span>
                  <span className="text-white-A700 font-sairacondensed text-left text-[15px] font-semibold">
                    Lars Moesezahl; Sam Gende
                  </span>
                </Text>
              </div>
              <div className="h-10 md:h-[38px] relative w-full">
                <div className="absolute bg-gray-900_77 h-[38px] inset-x-[0] mx-auto top-[0] w-full"></div>
                <Text
                  className="absolute bottom-[0] inset-x-[0] mx-auto text-[10px] text-white-A700 w-[88%] sm:w-full"
                  size="txtSairaCondensedSemiBold10"
                >
                  <span className="text-green-A700_01 font-sairacondensed text-left text-xl font-semibold">
                    Welche Abteilungen sind betroffen :{" "}
                  </span>
                  <span className="text-green-A700_01 font-sairacondensed text-left font-semibold">
                    {" "}
                  </span>
                  <span className="text-white-A700 font-sairacondensed text-left text-[15px] font-semibold">
                    {" "}
                    Verwaltung; Gebäude Management
                  </span>
                </Text>
              </div>
              <div className="bg-gray-900_77 flex flex-col items-end justify-start pl-[7px] py-[7px] w-full">
                <Text
                  className="text-[10px] text-white-A700"
                  size="txtSairaCondensedSemiBold10"
                >
                  <span className="text-green-A700_01 font-sairacondensed text-left text-xl font-semibold">
                    Beschreibung :
                  </span>
                  <span className="text-white-A700 font-sairacondensed text-left text-xs font-semibold">
                    <>
                      {" "}
                      <br />
                    </>
                  </span>
                  <span className="text-white-A700 font-sairacondensed text-left text-[15px] font-semibold">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </span>
                </Text>
              </div>
            </div>
            <Text
              className="absolute capitalize inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 top-[0] w-max"
              size="txtSairaCondensedBold30"
            >
              Neue Idee
            </Text>
          </div>
          <div className="flex md:flex-col flex-row gap-[21px] items-center justify-between w-full">
            <List
              className="md:flex-1 sm:flex-col flex-row gap-5 grid md:grid-cols-1 grid-cols-2 w-[66%] md:w-full"
              orientation="horizontal"
            >
              <div className="md:h-[190px] h-[191px] sm:ml-[0] relative w-full">
                <div className="absolute bg-gray-300_b2 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[5px] w-full">
                  <div className="md:h-[180px] h-[21px] mt-[159px] relative w-1/4">
                    <div className="absolute bg-black-900 h-[17px] inset-[0] justify-center m-auto w-full"></div>
                    <Text
                      className="absolute h-full inset-[0] justify-center m-auto text-[13px] text-center text-white-A700 w-max"
                      size="txtSairaCondensedSemiBold13"
                    >
                      Mehr
                    </Text>
                  </div>
                </div>
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                  <Text
                    className="bg-black-900 h-[39px] justify-center sm:px-5 px-[35px] py-[3px] text-center text-white-A700 text-xl w-[358px]"
                    size="txtSairaCondensedSemiBold20WhiteA700"
                  >
                    Eigenschaften einer guten Idee
                  </Text>
                  <Text
                    className="bg-gray-900_77 h-5 justify-center mt-[19px] pl-[19px] sm:pr-5 pr-[35px] py-0.5 text-[10px] text-white-A700 w-[358px]"
                    size="txtSairaCondensedSemiBold10"
                  >
                    <span className="text-green-A700_01 font-sairacondensed text-left text-[15px] font-semibold">
                      Eigenschaft 1 :{" "}
                    </span>
                    <span className="text-green-A700_01 font-sairacondensed text-left font-semibold">
                      {" "}
                    </span>
                    <span className="text-white-A700 font-sairacondensed text-left text-xs font-semibold">
                      Umsetzbar
                    </span>
                  </Text>
                  <div className="md:h-12 h-8 mt-4 relative w-full">
                    <div className="absolute bg-gray-900_77 h-5 inset-x-[0] mx-auto top-[13%] w-full"></div>
                    <Text
                      className="absolute h-full inset-y-[0] left-[5%] my-auto text-black-900 text-xl"
                      size="txtSairaCondensedSemiBold20"
                    >
                      <span className="text-green-A700_01 font-sairacondensed text-left text-[15px] font-semibold">
                        Eigenschaft 2 :
                      </span>
                      <span className="text-green-A700_01 font-sairacondensed text-left font-semibold">
                        {" "}
                      </span>
                      <span className="text-white-A700 font-sairacondensed text-left text-xs font-semibold">
                        Ökonomisch sinnvoll
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
                        Eigenschaft 3 :
                      </span>
                      <span className="text-white-A700 font-sairacondensed text-left text-xs font-semibold">
                        {" "}
                        Fokussiert
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="md:h-[190px] h-[191px] sm:ml-[0] relative w-full">
                <div className="absolute bg-gray-300_b2 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[5px] w-full">
                  <div
                    className="common-pointer md:h-[180px] h-[21px] mt-[159px] relative w-1/4"
                    onClick={() => navigate("/goals")}
                  >
                    <div className="absolute bg-black-900 h-[17px] inset-[0] justify-center m-auto w-full"></div>
                    <Text
                      className="absolute h-full inset-[0] justify-center m-auto text-[13px] text-center text-white-A700 w-max"
                      size="txtSairaCondensedSemiBold13"
                    >
                      Mehr
                    </Text>
                  </div>
                </div>
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                  <Text
                    className="bg-black-900 h-[39px] justify-center sm:px-5 px-[35px] py-[3px] text-center text-white-A700 text-xl w-[358px]"
                    size="txtSairaCondensedSemiBold20WhiteA700"
                  >
                    Unsere Ziele
                  </Text>
                  <Text
                    className="bg-gray-900_77 h-5 justify-center mt-[19px] pl-5 sm:pr-5 pr-[35px] text-[10px] text-white-A700 w-[358px]"
                    size="txtSairaCondensedSemiBold10"
                  >
                    <span className="text-green-A700_01 font-sairacondensed text-left text-[15px] font-semibold">
                      Ziel 1:{" "}
                    </span>
                    <span className="text-green-A700_01 font-sairacondensed text-left font-semibold">
                      {" "}
                    </span>
                    <span className="text-white-A700 font-sairacondensed text-left text-xs font-semibold">
                      Emissionen in der Produktion reduzieren
                    </span>
                  </Text>
                  <div className="h-8 md:h-[46px] mt-3.5 relative w-full">
                    <div className="absolute bg-gray-900_77 h-5 inset-[0] justify-center m-auto w-full"></div>
                    <Text
                      className="absolute h-full inset-y-[0] left-[5%] my-auto text-black-900 text-xl"
                      size="txtSairaCondensedSemiBold20"
                    >
                      <span className="text-green-A700_01 font-sairacondensed text-left text-[15px] font-semibold">
                        Ziel 2 :
                      </span>
                      <span className="text-white-A700 font-sairacondensed text-left text-xs font-semibold">
                        {" "}
                        Minimierung des Papierverbrauchs
                      </span>
                    </Text>
                  </div>
                  <div className="h-6 md:h-9 mt-3 relative w-full">
                    <div className="absolute bg-gray-900_77 h-5 inset-x-[0] mx-auto top-[0] w-full"></div>
                    <Text
                      className="absolute h-full inset-y-[0] left-[5%] my-auto text-[15px] text-green-A700_01"
                      size="txtSairaCondensedSemiBold15GreenA70001"
                    >
                      <span className="text-green-A700_01 font-sairacondensed text-left font-semibold">
                        Ziel 3 :{" "}
                      </span>
                      <span className="text-white-A700 font-sairacondensed text-left text-xs font-semibold">
                        Nutzung nachhaltiger Verkehrsmittel
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
            </List>
            <div className="h-[191px] relative w-[33%] md:w-full">
              <div className="absolute bg-gray-300_b2 h-[191px] inset-[0] justify-center m-auto w-full"></div>
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0]">
                <Text
                  className="bg-black-900 h-[39px] justify-center sm:px-5 px-[35px] py-[3px] text-center text-white-A700 text-xl w-[358px]"
                  size="txtSairaCondensedSemiBold20WhiteA700"
                >
                  Deine letzten Ideen
                </Text>
              </div>
              <List
                className="absolute bottom-[26%] flex flex-col gap-4 inset-x-[0] items-center mx-auto w-full"
                orientation="vertical"
              >
                <div className="h-6 relative w-full">
                  <div className="absolute bg-gray-900_77 flex flex-row gap-[15px] inset-x-[0] items-start justify-end mx-auto top-[0] w-full">
                    <div className="h-[18px] relative w-[13%]">
                      <div className="absolute bg-black-900_bf h-[13px] inset-x-[0] mx-auto top-[11%] w-full"></div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-[11px] text-center text-white-A700 w-max"
                        size="txtSairaCondensedSemiBold11"
                      >
                        bearbeiten
                      </Text>
                    </div>
                    <div className="bg-black-900_bf h-[13px] mr-1 my-0.5 w-[13%]"></div>
                  </div>
                  <div className="absolute flex flex-row h-full inset-[0] items-start justify-between m-auto w-[91%]">
                    <Text
                      className="text-[15px] text-white-A700"
                      size="txtSairaCondensedSemiBold15"
                    >
                      <span className="text-green-A700_01 font-sairacondensed text-left font-semibold">
                        Idee 1 :
                      </span>
                      <span className="text-white-A700 font-sairacondensed text-left font-semibold">
                        {" "}
                      </span>
                      <span className="text-white-A700 font-sairacondensed text-left text-xs font-semibold">
                        Kein Einwegplastik bei Events
                      </span>
                      <span className="text-white-A700 font-sairacondensed text-left text-xs font-semibold">
                        {" "}
                      </span>
                    </Text>
                    <Text
                      className="text-[11px] text-center text-white-A700"
                      size="txtSairaCondensedSemiBold11"
                    >
                      löschen
                    </Text>
                  </div>
                </div>
                <div className="h-6 relative w-full">
                  <div className="absolute bg-gray-900_77 flex flex-row gap-[15px] inset-x-[0] items-center justify-end mx-auto top-[0] w-full">
                    <div className="h-[18px] relative w-[13%]">
                      <div className="absolute bg-black-900_bf h-[13px] inset-x-[0] mx-auto top-[11%] w-full"></div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-[11px] text-center text-white-A700 w-max"
                        size="txtSairaCondensedSemiBold11"
                      >
                        bearbeiten
                      </Text>
                    </div>
                    <div className="h-[18px] mr-1 relative w-[13%]">
                      <div className="absolute bg-black-900_bf h-[13px] inset-x-[0] mx-auto top-[11%] w-full"></div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-[11px] text-center text-white-A700 w-max"
                        size="txtSairaCondensedSemiBold11"
                      >
                        löschen
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="absolute h-full inset-y-[0] left-[6%] my-auto text-[15px] text-black-900"
                    size="txtSairaCondensedSemiBold15Black900"
                  >
                    <span className="text-green-A700_01 font-sairacondensed text-left font-semibold">
                      Idee 2 :
                    </span>
                    <span className="text-white-A700 font-sairacondensed text-left text-xs font-semibold">
                      {" "}
                      Abwärme Nutzung in Büros{" "}
                    </span>
                  </Text>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <header className="bg-gray-900_bc flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
              <div className="md:h-10 h-[27px] md:ml-[0] ml-[439px] md:mt-0 my-[13px] relative w-[39%] md:w-full">
                <div className="absolute bg-gray-200 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[3px] w-full">
                  <Text
                    className="capitalize md:ml-[0] ml-[30px] text-black-900_bf text-xs"
                    size="txtSairaCondensedLight12"
                  >
                    <span className="text-black-900_bf font-sairacondensed text-left font-light">
                      S
                    </span>
                    <span className="text-black-900_bf font-sairacondensed text-left font-light">
                      uche
                    </span>
                    <span className="text-black-900_bf font-sairacondensed lowercase text-left font-light">
                      {" "}
                      nach
                    </span>
                    <span className="text-black-900_bf font-sairacondensed lowercase text-left font-light">
                      {" "}
                      Zielen, ideen, projekten und mehr
                    </span>
                  </Text>
                </div>
                <Img
                  className="absolute h-[27px] inset-y-[0] left-[1%] my-auto w-[27px]"
                  src="images/img_search.svg"
                  alt="search"
                />
              </div>
              <Img
                className="h-[30px] md:ml-[0] ml-[272px] md:mt-0 my-3 w-[30px]"
                src="images/img_settings.svg"
                alt="settings"
              />
              <Img
                className="h-[30px] md:ml-[0] ml-[35px] md:mt-0 my-3 w-[30px]"
                src="images/img_question.svg"
                alt="question"
              />
              <Img
                className="h-[30px] md:ml-[0] ml-[35px] mr-[19px] md:mt-0 my-3 w-[30px]"
                src="images/img_user.svg"
                alt="user"
              />
            </header>
            <div className="bg-gray-900_bc flex flex-col gap-[37px] items-center justify-start pb-[13px] md:px-5 px-[13px] w-[6%] md:w-full">
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
              <div className="h-11 md:h-[577px] mb-[547px] relative w-[66%]">
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
            <div className="bg-gray-900_bf flex md:flex-col flex-row md:gap-5 items-end justify-start p-[5px] w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[171px] md:mt-0 my-[5px] md:px-5 w-[2%] md:w-full">
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

export default NewIdeaSheetPage;
