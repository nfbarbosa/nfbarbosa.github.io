/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function DescrioORAMENTO(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="640px"
      height="120px"
      alignItems="flex-start"
      position="relative"
      borderRadius="6px"
      padding="3px 0px 1px 0px"
      backgroundColor="rgba(0,0,0,0.05)"
      {...rest}
      {...getOverrideProps(overrides, "DescrioORAMENTO")}
    >
      <Text
        fontFamily="Poppins"
        fontSize="36px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="42.1875px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        letterSpacing="1.65px"
        width="640px"
        height="117px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="FORMULÁRIO DE ORÇAMENTO"
        {...getOverrideProps(overrides, "FORMUL\u00C1RIO DE OR\u00C7AMENTO")}
      ></Text>
    </Flex>
  );
}
