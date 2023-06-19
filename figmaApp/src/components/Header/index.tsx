import React from "react";

import { Img, Text } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="md:h-10 h-[27px] md:ml-[0] ml-[441px] md:mt-0 my-[13px] relative w-[39%] md:w-full">
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
    </>
  );
};

Header.defaultProps = {};

export default Header;
