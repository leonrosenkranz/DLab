import React from "react";

import { Img, Line, Text } from "components";
import MoreInfoAboutGoalRahmen from "components/MoreInfoAboutGoalRahmen";

const IdeasFeedPage: React.FC = () => {
  return (
    <>
      <div
        className="bg-cover bg-no-repeat flex flex-col font-sairacondensed h-[1024px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_ideasfeed.png')" }}
      >
        <MoreInfoAboutGoalRahmen
          className="flex flex-col items-center justify-start w-full"
          searchforgoals={
            <Text className="capitalize font-light md:ml-[0] ml-[30px] text-black-900_bf text-xs">
              <span className="text-black-900_bf font-sairacondensed text-left">
                Suche{" "}
              </span>
              <span className="text-black-900_bf font-sairacondensed lowercase text-left">
                nach zielen, ideen, projekten und mehr
              </span>
            </Text>
          }
        />
      </div>
    </>
  );
};

export default IdeasFeedPage;
