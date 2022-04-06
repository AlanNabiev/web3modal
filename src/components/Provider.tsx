import * as React from "react";
import styled from "styled-components";

import { ThemeColors } from "../helpers";
import {
  PROVIDER_WRAPPER_CLASSNAME,
  PROVIDER_CONTAINER_CLASSNAME,
  PROVIDER_ICON_CLASSNAME,
  PROVIDER_NAME_CLASSNAME,
  PROVIDER_DESCRIPTION_CLASSNAME
} from "../constants";

const SIcon = styled.div`
  width: 98px;
  height: 98px;
  display: flex;
  border-radius: 50%;
  overflow: visible;
  box-shadow: none;
  justify-content: center;
  align-items: center;
  & img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 8.5vw;
    height: 8.5vw;
  }
`;

interface IStyedThemeColorOptions {
  themeColors: ThemeColors;
}

const SName = styled.div<IStyedThemeColorOptions>`
  width: 100%;
  text-transform: uppercase;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 100%;
  margin: 2em 0;
  color: ${({ themeColors }) => themeColors.main};
  @media screen and (max-width: 768px) {
    font-size: 5vw;
    margin: 0.5em 0;
  }
`;

const SDescription = styled.div<IStyedThemeColorOptions>`
  width: 70%;
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 136.35%;
  color: ${({ themeColors }) => themeColors.secondary};
  @media screen and (max-width: 768px) {
    font-size: 4vw;
    width: 100%;
  }
`;

const SProviderContainer = styled.div<IStyedThemeColorOptions>`
  transition: all 0.2s ease-in-out;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 90px 88px;
  border-radius: 25px;
  @media screen and (max-width: 768px) {
    padding: 1vw;
  }
`;

const SProviderWrapper = styled.div<IStyedThemeColorOptions>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  border-radius: 25px;
  @media (hover: hover) {
    &:hover ${SProviderContainer} {
      box-shadow: 0px 4px 22px 11px rgba(0, 0, 0, 0.24);
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

interface IProviderProps {
  name: string;
  logo: string;
  description: string;
  themeColors: ThemeColors;
  onClick: () => void;
}

export function Provider(props: IProviderProps) {
  const {
    name,
    logo,
    description,
    themeColors,
    onClick,
    ...otherProps
  } = props;
  return (
    <SProviderWrapper
      themeColors={themeColors}
      className={PROVIDER_WRAPPER_CLASSNAME}
      onClick={onClick}
      {...otherProps}
    >
      <SProviderContainer
        themeColors={themeColors}
        className={PROVIDER_CONTAINER_CLASSNAME}
      >
        <SIcon className={PROVIDER_ICON_CLASSNAME}>
          <img src={logo} alt={name} />
        </SIcon>
        <SName themeColors={themeColors} className={PROVIDER_NAME_CLASSNAME}>
          {name}
        </SName>
        <SDescription
          themeColors={themeColors}
          className={PROVIDER_DESCRIPTION_CLASSNAME}
        >
          {description}
        </SDescription>
      </SProviderContainer>
    </SProviderWrapper>
  );
}
