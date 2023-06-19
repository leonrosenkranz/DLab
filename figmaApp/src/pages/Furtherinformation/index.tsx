import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, List, Text } from "components";
import Header from "components/Header";

const FurtherinformationPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat font-sairacondensed h-[1024px] mx-auto relative w-full"
        style={{ backgroundImage: "url('images/img_furtherinformation.png')" }}
      >
        <div className="absolute flex flex-col md:gap-10 gap-[163px] justify-start md:px-5 right-[11%] top-[13%] w-[71%]">
          <div className="md:h-[316px] h-[328px] sm:h-[511px] md:ml-[0] ml-[455px] relative w-[56%] sm:w-full">
            <div className="absolute bg-gray-300_b2 flex flex-col h-max inset-[0] items-center justify-center m-auto pb-[17px] w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-black-900 h-[39px] w-full"></div>
                <List
                  className="flex flex-col gap-[22px] items-center mt-8 w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 sm:flex-col flex-row gap-[25px] items-center justify-between w-full">
                    <div className="h-8 relative w-[59%] sm:w-full">
                      <div className="absolute bg-black-900_bf h-[22px] inset-x-[0] mx-auto top-[9%] w-full"></div>
                      <Text
                        className="absolute h-full inset-y-[0] left-[9%] my-auto text-white-A700 text-xl"
                        size="txtSairaCondensedMedium20"
                      >
                        Beendete Projekte:
                      </Text>
                    </div>
                    <div className="h-8 relative w-[38%] sm:w-full">
                      <div className="absolute bg-black-900_bf h-[22px] inset-x-[0] mx-auto top-[6%] w-full"></div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-center text-white-A700 text-xl w-max"
                        size="txtSairaCondensedMedium20"
                      >
                        Verantwortung
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 sm:flex-col flex-row gap-[25px] items-start justify-between w-full">
                    <div className="sm:h-[21px] h-[22px] md:h-[23px] sm:mt-0 mt-0.5 relative w-[59%] sm:w-full">
                      <div className="absolute bg-gray-900_77 h-[21px] inset-[0] justify-center m-auto w-full"></div>
                      <Text
                        className="absolute bottom-[0] left-[9%] text-[13px] text-green-A700"
                        size="txtSairaCondensedMedium13"
                      >
                        <span className="text-green-A700 font-sairacondensed text-left text-base font-medium">
                          Projekt 1 :
                        </span>
                        <span className="text-white-A700 font-sairacondensed text-left font-medium">
                          {" "}
                          Raumtemperatur im Büro senken
                        </span>
                      </Text>
                    </div>
                    <div className="h-[26px] relative w-[38%] sm:w-full">
                      <div className="absolute bg-gray-900_77 bottom-[0] h-[21px] inset-x-[0] mx-auto w-full"></div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-base text-center text-white-A700 w-max"
                        size="txtSairaCondensedMedium16WhiteA700"
                      >
                        Leon Rosenkranz
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 sm:flex-col flex-row gap-[25px] items-start justify-between w-full">
                    <div className="md:h-[21px] h-[22px] relative w-[59%] sm:w-full">
                      <div className="absolute bg-gray-900_77 h-[21px] inset-[0] justify-center m-auto w-full"></div>
                      <Text
                        className="absolute bottom-[0] left-[9%] text-[13px] text-black-900"
                        size="txtSairaCondensedMedium13Black900"
                      >
                        <span className="text-green-A700 font-sairacondensed text-left text-base font-medium">
                          Projekt 2 :
                        </span>
                        <span className="text-green-A700 font-sairacondensed text-left font-medium">
                          {" "}
                        </span>
                        <span className="text-white-A700 font-sairacondensed text-left font-medium">
                          Karbon Dichtungen nutzen
                        </span>
                      </Text>
                    </div>
                    <div className="h-[26px] relative w-[38%] sm:w-full">
                      <div className="absolute bg-gray-900_77 h-[21px] inset-x-[0] mx-auto top-[0] w-full"></div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-base text-center text-white-A700 w-max"
                        size="txtSairaCondensedMedium16WhiteA700"
                      >
                        Tim Tegeder
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 sm:flex-col flex-row gap-[25px] items-start justify-between w-full">
                    <div className="md:h-[21px] h-[22px] relative w-[59%] sm:w-full">
                      <div className="absolute bg-gray-800_a0 h-[21px] inset-[0] justify-center m-auto w-full"></div>
                      <Text
                        className="absolute bottom-[0] left-[9%] text-[13px] text-black-900"
                        size="txtSairaCondensedMedium13Black900"
                      >
                        <span className="text-green-A700 font-sairacondensed text-left text-base font-medium">
                          Projekt 3 :
                        </span>
                        <span className="text-black-900 font-sairacondensed text-left text-sm font-medium">
                          {" "}
                        </span>
                        <span className="text-white-A700 font-sairacondensed text-left font-medium">
                          Nutzen des Zuges, wenn möglich
                        </span>
                      </Text>
                    </div>
                    <div className="h-[26px] relative w-[38%] sm:w-full">
                      <div className="absolute bg-gray-900_77 h-[21px] inset-x-[0] mx-auto top-[0] w-full"></div>
                      <Text
                        className="absolute h-full inset-[0] justify-center m-auto text-base text-center text-white-A700 w-max"
                        size="txtSairaCondensedMedium16WhiteA700"
                      >
                        Fabian Klaps
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="h-[25px] md:h-[52px] mt-7 relative w-[59%]">
                  <div className="absolute bg-black-900 h-6 inset-[0] justify-center m-auto w-full"></div>
                  <Text
                    className="absolute bottom-[0] inset-x-[0] mx-auto text-[15px] text-center text-white-A700 w-max"
                    size="txtSairaCondensedSemiBold15"
                  >
                    Mehr
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="absolute inset-x-[0] mx-auto text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700 top-[0] w-max"
              size="txtSairaCondensedSemiBold30"
            >
              Unsere Erfolge
            </Text>
          </div>
          <div className="h-[79px] mr-[92px] relative w-[91%] md:w-full">
            <div className="absolute bg-black-900_bf h-[72px] inset-x-[0] mx-auto top-[0] w-full"></div>
            <Text
              className="absolute capitalize h-full inset-[0] justify-center m-auto sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700 w-max"
              size="txtSairaCondensedBold50"
            >
              Ritto + Fuchs GmbH X SustainChallenge
            </Text>
          </div>
        </div>
        <div className="absolute flex flex-col items-center justify-start left-[13%] md:px-5 top-[14%] w-[23%]">
          <div className="md:h-[409px] h-[411px] relative w-full">
            <div className="absolute bg-gray-300_b2 flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[361px] w-full">
              <div className="bg-black-900 flex flex-col items-center justify-start w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-center text-white-A700"
                  size="txtSairaCondensedSemiBold30"
                >
                  Warum SustainChallenge
                </Text>
              </div>
            </div>
            <div className="absolute bg-gray-900_77 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto w-full">
              <Text
                className="mt-[15px] text-white-A700 text-xs"
                size="txtSairaCondensedSemiBold12"
              >
                <>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. <br />
                  <br />
                  Duis autem vel eum iriure dolor in hendrerit in vulputate
                  velit esse molestie consequat, vel illum dolore eu feugiat
                  nulla facilisis at vero eros et accumsan et iusto odio
                  dignissim qui blandit praesent luptatum zzril delenit augue
                  duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit
                  amet,
                </>
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[5%] flex flex-col inset-x-[0] items-center justify-start max-w-[1120px] mx-auto md:px-5 w-full">
          <div className="md:h-[202px] h-[204px] relative w-full">
            <div className="absolute bg-gray-900_77 flex flex-col gap-[13px] h-max inset-[0] items-center justify-center m-auto pb-[7px] w-full">
              <div className="bg-black-900 h-[30px] w-full"></div>
              <Text
                className="text-white-A700 text-xs"
                size="txtSairaCondensedSemiBold12"
              >
                <>
                  Wir wollen zeigen, dass die Wirtschaft eine Kraft für das Gute
                  sein kann und sollte. Um dies zu erreichen, sind Innovation,
                  Zusammenarbeit und die Konzentration auf den Dienst am
                  Nächsten erforderlich. Es bedeutet auch, dass wir mit unseren
                  Werten in der Technologie, die wir herstellen, in der Art und
                  Weise, wie wir sie herstellen, und in der Art und Weise, wie
                  wir Menschen und den Planeten, den wir teilen, behandeln,
                  führend sind. Wir arbeiten stets daran, die Welt besser zu
                  hinterlassen, als wir sie vorgefunden haben, und
                  leistungsstarke Werkzeuge zu entwickeln, die andere dazu
                  befähigen, das Gleiche zu tun. Seit 2020 sind wir im Rahmen
                  unserer Unternehmenstätigkeit klimaneutral. Aufbauend auf
                  dieser Leistung haben wir uns das ehrgeizige und dringende
                  Ziel gesetzt, bis 2030 kohlenstoffneutrale Produkte
                  herzustellen. Und unsere Innovationen im Bereich der grünen
                  Chemie und des Recyclings bringen uns näher denn je an das
                  Ziel heran, unsere Produkte eines Tages herzustellen, ohne der
                  Erde etwas wegzunehmen.
                  <br />
                  Bei all dieser Arbeit arbeiten wir mit Gemeinden und lokalen
                  Entscheidungsträgern zusammen, um sicherzustellen, dass unsere
                  Umweltbemühungen auch eine Kraft für Gleichberechtigung und
                  Gerechtigkeit sind.
                </>
              </Text>
            </div>
            <Text
              className="absolute inset-x-[0] mx-auto sm:text-[21px] md:text-[23px] text-[25px] text-center text-white-A700 top-[0] w-max"
              size="txtSairaCondensedSemiBold25"
            >
              Unser Versprechen für eine bessere Welt.
            </Text>
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
                className="lowercase mb-1.5 md:ml-[0] ml-[498px] text-center text-white-A700 text-xs"
                size="txtSairaCondensedRegular12"
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

export default FurtherinformationPage;
