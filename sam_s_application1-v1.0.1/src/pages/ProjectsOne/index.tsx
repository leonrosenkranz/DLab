import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";
import MoreInfoAboutGoalRahmen from "components/MoreInfoAboutGoalRahmen";

const ProjectsOnePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat flex font-sairacondensed h-[1024px] justify-end mx-auto relative w-full"
        style={{ backgroundImage: "url('images/img_projectsone.png')" }}
      >
        <div className="bg-blue_gray-100_b2 flex flex-col h-full items-center justify-start max-w-[1255px] mb-[98px] mt-auto mx-auto p-[11px] md:px-5 w-full">
          <div className="flex flex-col items-center justify-start mb-[368px] mt-[27px] w-full">
            <div className="bg-black-900_bf flex flex-col items-center justify-start p-[7px] w-full">
              <div className="flex flex-col items-start justify-start mb-[33px] w-[95%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700_cc"
                    size="txtSairaCondensedBold50WhiteA700cc"
                  >
                    {" "}
                    Zug Nutzung im Inland
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[338px] md:text-3xl sm:text-[28px] text-[32px] text-center text-white-A700_cc"
                    size="txtSairaCondensedMedium32"
                  >
                    -Management Staff{" "}
                  </Text>
                  <Img
                    className="common-pointer h-8 sm:ml-[0] ml-[118px]"
                    src="images/img_arrowup.svg"
                    alt="arrowup"
                    onClick={() => navigate("/projects")}
                  />
                </div>
                <Text
                  className="ml-1 md:ml-[0] mt-[17px] text-white-A700 text-xl"
                  size="txtSairaCondensedMedium20"
                >
                  <>
                    Beschreibung: Auf Geschäftsreisen im Inland werden nur noch
                    Züge genutzt. <br />{" "}
                  </>
                </Text>
                <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between ml-1 md:ml-[0] mt-1.5 w-full">
                  <Text
                    className="sm:mt-0 mt-[18px] text-white-A700_cc text-xl"
                    size="txtSairaCondensedMedium20WhiteA700cc"
                  >
                    Verbundenes Ziel: Nutzung nachhaltiger Verkehrsmittel{" "}
                  </Text>
                  <div className="h-[26px] relative w-[12%] sm:w-full">
                    <div
                      className="common-pointer absolute bg-white-A700_77 h-[22px] inset-x-[0] mx-auto top-[0] w-full"
                      onClick={() => navigate("/newideasheet")}
                    ></div>
                    <Text
                      className="absolute h-full inset-[0] justify-center m-auto text-base text-center text-white-A700 w-max"
                      size="txtSairaCondensedMedium16WhiteA700"
                    >
                      Idee hinzufügen
                    </Text>
                  </div>
                </div>
                <Text
                  className="ml-1 md:ml-[0] mt-[3px] text-white-A700_cc text-xl"
                  size="txtSairaCondensedMedium20WhiteA700cc"
                >
                  Verbundene Ideen: Bahncards für das Management -Stresse{" "}
                </Text>
              </div>
            </div>
          </div>
        </div>
        <MoreInfoAboutGoalRahmen
          className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
          searchforgoals={
            <Text className="capitalize font-light md:ml-[0] ml-[30px] text-black-900_bf text-xs">
              <span className="text-black-900_bf font-sairacondensed text-left">
                S
              </span>
              <span className="text-black-900_bf font-sairacondensed text-left">
                uche
              </span>
              <span className="text-black-900_bf font-sairacondensed text-left">
                {" "}
              </span>
              <span className="text-black-900_bf font-sairacondensed lowercase text-left">
                nach
              </span>
              <span className="text-black-900_bf font-sairacondensed lowercase text-left">
                {" "}
                zielen, ideen, projekten and mehr
              </span>
            </Text>
          }
          mustergmbhproje="Ritto + Fuchs GmbH Projekte"
          termsconditions="impressum"
          privacypolicy="Datenschutz"
        />
      </div>
    </>
  );
};

export default ProjectsOnePage;
