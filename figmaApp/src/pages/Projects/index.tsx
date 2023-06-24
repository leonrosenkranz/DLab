import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text, NavBar } from "components";
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
     <NavBar navigate={useNavigate()}></NavBar>
      </div>
    </>
  );
};

export default ProjectsPage;
