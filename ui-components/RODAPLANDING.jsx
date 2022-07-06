/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function RODAPLANDING(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1920px"
      height="91px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "RODAPLANDING")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(84,80,173,1)"
        {...getOverrideProps(overrides, "Rectangle 37")}
      ></View>
      <Text
        fontFamily="Montserrat"
        fontSize="24px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="36px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="32.97%"
        bottom="32.97%"
        left="38.54%"
        right="38.28%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="2022  •   Todos os direitos reservados."
        {...getOverrideProps(
          overrides,
          "2022 \u2022 Todos os direitos reservados."
        )}
      ></Text>
    </View>
  );
}
