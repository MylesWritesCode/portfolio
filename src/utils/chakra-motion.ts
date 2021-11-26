/**
 * File: /src/utils/chakra-motion.ts
 * Project: portfolio
 * Purpose: Creates a framer-motion enabled chakra div
 *
 * @author Myles Berueda
 * @date   Friday November 26th 2021
 * -----
 * Modified: Friday November 26th 2021 12:42:28 am
 * -----
 * Copyright (c) 2021 MylesWritesCode
 * -----
 * HISTORY
 **/
import {
  chakra,
  ChakraProps,
  ComponentWithAs,
  forwardRef,
} from "@chakra-ui/react";
import { motion, MotionProps } from "framer-motion";

export type MotionBoxProps = Omit<ChakraProps, keyof MotionProps> &
  MotionProps & {
    as?: React.ElementType;
  };

export const MotionBox = motion(
  forwardRef<ChakraProps, "div">((props, ref) => {
    return <chakra.div ref={ref} {...props} />;
  })
) as ComponentWithAs<"div", MotionBoxProps>;