import React from "react";

import Header from "components/Header";
import { Button, Img, Text } from "components";



function NavBar({navigate}) {
    
 
return (    
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
              onClick={() => navigate("")}
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
);
}

export { NavBar }