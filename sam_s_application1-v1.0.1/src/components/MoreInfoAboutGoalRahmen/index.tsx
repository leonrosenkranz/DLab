import React from "react";

import { Img, Line, Text } from "components";

type MoreInfoAboutGoalRahmenProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "searchforgoals"
  | "homeOne"
  | "goals"
  | "projects"
  | "scoreboard"
  | "education"
  | "mustergmbhproje"
  | "groupTwentyFive"
  | "optionsjetThree"
  | "optionsjetthreeOne"
  | "groupTwentyEight"
  | "rectangleTen"
  | "backgroundnewid"
  | "groupThirty"
  | "groupTwentyNine"
  | "groupTwentySeven"
  | "groupTwentySix"
  | "optionsjetthreeTwo"
  | "email"
  | "furtherinformat"
  | "termsconditions"
  | "privacypolicy"
> &
  Partial<{
    searchforgoals: JSX.Element | string;
    homeOne: string;
    goals: string;
    projects: string;
    scoreboard: string;
    education: string;
    mustergmbhproje: string;
    groupTwentyFive: string;
    optionsjetThree: string;
    optionsjetthreeOne: string;
    groupTwentyEight: string;
    rectangleTen: string;
    backgroundnewid: string;
    groupThirty: string;
    groupTwentyNine: string;
    groupTwentySeven: string;
    groupTwentySix: string;
    optionsjetthreeTwo: string;
    email: string;
    furtherinformat: string;
    termsconditions: string;
    privacypolicy: string;
  }>;

const MoreInfoAboutGoalRahmen: React.FC<MoreInfoAboutGoalRahmenProps> = (
  props
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start w-full">
          <header className="bg-gray-900_bc flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="md:h-10 h-[27px] md:ml-[0] ml-[441px] md:mt-0 my-[13px] relative w-[39%] md:w-full">
              <div className="absolute bg-gray-200 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[3px] w-full">
                {props?.searchforgoals}
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
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[82%] md:w-full">
            <div className="bg-gray-900_bc flex flex-col gap-[37px] items-center justify-start pb-3.5 px-3.5 w-[7%] md:w-full">
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
                    {props?.homeOne}
                  </Text>
                </div>
                <div className="flex flex-col relative w-[91%]">
                  <Img
                    className="h-[30px] mx-auto w-[30px]"
                    src="images/img_music.svg"
                    alt="music"
                  />
                  <Text
                    className="capitalize mt-[-5.04px] mx-auto text-[11px] text-center text-white-A700 z-[1]"
                    size="txtSairaCondensedSemiBold11"
                  >
                    {props?.goals}
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
                    {props?.projects}
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
                  {props?.scoreboard}
                </Text>
              </div>
              <div className="h-11 md:h-[576px] mb-[546px] relative w-[66%]">
                <Text
                  className="absolute bottom-[0] capitalize inset-x-[0] mx-auto text-[11px] text-center text-white-A700 w-max"
                  size="txtSairaCondensedSemiBold11"
                >
                  {props?.education}
                </Text>
                <Img
                  className="absolute h-[30px] inset-x-[0] mx-auto top-[0] w-[30px]"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
            </div>
            <div className="md:h-[1093px] sm:h-[571px] h-[671px] md:mt-0 mt-[30px] relative w-4/5 md:w-full">
              <div className="absolute h-[79px] inset-x-[0] mx-auto top-[0] w-full">
                <div className="absolute bg-black-900_bf h-[72px] inset-[0] justify-center m-auto w-full"></div>
                <Text
                  className="absolute capitalize h-full inset-[0] justify-center m-auto sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700 w-max"
                  size="txtSairaCondensedBold50"
                >
                  {props?.mustergmbhproje}
                </Text>
              </div>
              <div className="absolute bottom-[0] md:h-[1093px] sm:h-[571px] h-[595px] inset-x-[0] mx-auto w-full">
                <div className="absolute bg-gray-300_b2 flex flex-col h-max inset-[0] items-center justify-center m-auto pr-[9px] py-[9px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-[51px] items-center justify-between my-[11px] w-full">
                    <div className="flex md:flex-1 flex-col items-start justify-start w-[94%] md:w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-[55px] items-start justify-between w-full">
                        {!!props?.groupTwentyFive ? (
                          <Text
                            className="bg-black-900_bf flex-1 h-[55px] justify-center max-w-[664px] md:max-w-full mb-[74px] sm:mt-0 mt-0.5 sm:px-5 px-[35px] py-3 text-lg text-white-A700 w-full"
                            size="txtSairaCondensedMedium18"
                          >
                            {props?.groupTwentyFive}
                          </Text>
                        ) : null}
                        {!!props?.optionsjetThree ? (
                          <Img
                            className="h-[131px]"
                            alt="optionsjetThree"
                            src="props?.optionsjetThree"
                          />
                        ) : null}
                      </div>
                      {!!props?.optionsjetthreeOne ? (
                        <Img
                          className="h-[50px] md:ml-[0] ml-[719px] mt-[37px]"
                          alt="optionsjetThree_One"
                          src="props?.optionsjetthreeOne"
                        />
                      ) : null}
                      {!!props?.groupTwentyEight ? (
                        <Text
                          className="bg-black-900_bf h-[55px] justify-center max-w-[664px] md:max-w-full mt-[200px] sm:px-5 px-[35px] py-3 text-lg text-white-A700 w-full"
                          size="txtSairaCondensedMedium18"
                        >
                          {props?.groupTwentyEight}
                        </Text>
                      ) : null}
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[531px] items-center justify-start rounded-[3px] w-[1%] md:w-full"
                      style={{
                        backgroundImage: "url('images/img_group32.svg')",
                      }}
                    >
                      {!!props?.rectangleTen ? (
                        <Line className="bg-black-900_bf h-[123px] mb-[359px] mt-[47px] rounded-sm w-[5px]" />
                      ) : null}
                    </div>
                  </div>
                </div>
                {!!props?.backgroundnewid ? (
                  <div className="absolute bg-black-900_bf bottom-[4%] h-[21px] left-[0] w-[72%]"></div>
                ) : null}
                {!!props?.groupThirty ? (
                  <Text
                    className="absolute bg-black-900_bf bottom-[41%] h-[55px] justify-center left-[0] max-w-[664px] md:max-w-full pb-[11px] pt-3.5 sm:px-5 px-[35px] text-lg text-white-A700 w-full"
                    size="txtSairaCondensedMedium18"
                  >
                    {props?.groupThirty}
                  </Text>
                ) : null}
                {!!props?.groupTwentyNine ? (
                  <Text
                    className="absolute bg-black-900_bf bottom-[26%] h-[55px] justify-center left-[0] max-w-[664px] md:max-w-full pb-[11px] pt-3.5 sm:px-5 px-[35px] text-lg text-white-A700 w-full"
                    size="txtSairaCondensedMedium18"
                  >
                    {props?.groupTwentyNine}
                  </Text>
                ) : null}
                {!!props?.groupTwentySeven ? (
                  <Text
                    className="absolute bg-black-900_bf h-[55px] justify-center left-[0] max-w-[664px] md:max-w-full sm:px-5 px-[35px] py-3 text-lg text-white-A700 top-[36%] w-full"
                    size="txtSairaCondensedMedium18"
                  >
                    {props?.groupTwentySeven}
                  </Text>
                ) : null}
                {!!props?.groupTwentySix ? (
                  <Text
                    className="absolute bg-black-900_bf h-[55px] justify-center left-[0] max-w-[664px] md:max-w-full pb-2.5 pt-[15px] sm:px-5 px-[35px] text-lg text-white-A700 top-[22%] w-full"
                    size="txtSairaCondensedMedium18"
                  >
                    {props?.groupTwentySix}
                  </Text>
                ) : null}
                {!!props?.optionsjetthreeTwo ? (
                  <Img
                    className="absolute bottom-[0] h-[295px] right-[7%]"
                    alt="optionsjetThree_Two"
                    src="props?.optionsjetthreeTwo"
                  />
                ) : null}
              </div>
            </div>
          </div>
          <div className="bg-gray-900_bf flex sm:flex-col flex-row sm:gap-5 items-start justify-end p-[5px] w-full">
            <Text
              className="lowercase sm:mt-0 mt-[5px] text-center text-white-A700 text-xs"
              size="txtSairaCondensedRegular12"
            >
              {props?.email}
            </Text>
            <Text
              className="lowercase mb-1.5 sm:ml-[0] ml-[484px] text-center text-white-A700 text-xs"
              size="txtSairaCondensedRegular12"
            >
              {props?.furtherinformat}
            </Text>
            <Text
              className="lowercase mb-[5px] sm:ml-[0] ml-[95px] text-center text-white-A700 text-xs"
              size="txtSairaCondensedRegular12"
            >
              {props?.termsconditions}
            </Text>
            <Text
              className="lowercase mb-1.5 sm:ml-[0] ml-[147px] mr-44 text-center text-white-A700 text-xs"
              size="txtSairaCondensedRegular12"
            >
              {props?.privacypolicy}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

MoreInfoAboutGoalRahmen.defaultProps = {
  searchforgoals: (
    <Text
      className="capitalize md:ml-[0] ml-[30px] text-black-900_bf text-xs"
      size="txtSairaCondensedLight12"
    >
      <span className="text-black-900_bf font-sairacondensed text-left font-light">
        Suche{" "}
      </span>
      <span className="text-black-900_bf font-sairacondensed lowercase text-left font-light">
        nach zielen, ideen, projekten und mehr
      </span>
    </Text>
  ),
  homeOne: "Home",
  goals: "Ziele",
  projects: "Projekte",
  scoreboard: "Scoreboard",
  education: "Bildung",
  mustergmbhproje: "Neue Ideen",
  email: "support@sustainchallenge.com",
  furtherinformat: "weitere informationen",
  termsconditions: "Impressum",
  privacypolicy: "datenschutz",
};

export default MoreInfoAboutGoalRahmen;
