/**
 * File: /src/components/BlogPosts.tsx
 * Project: portfolio
 * Purpose: // TODO: Add the purpose of the file here.
 *
 * @author Myles Berueda
 * @date   Tuesday November 23rd 2021
 * -----
 * Modified: Tuesday November 23rd 2021 4:03:43 pm
 * -----
 * Copyright (c) 2021 MylesWritesCode
 * -----
 * HISTORY
 **/
import React from "react";
import { chakra } from "@chakra-ui/react";

interface BlogPostsProps {}

const BlogPosts: React.FC<BlogPostsProps> = ({ ...props }) => {
  return (
    <chakra.div
      id="blog"
      data-scroll="blog"
      display="flex"
      height="80vh"
      justifyContent="center"
      alignItems="center"
      flexDirection={["column", "row"]}
      backgroundSize="cover"
      backgroundColor="var(--color-light-dark)"
      backgroundPosition="bottom"
      color="#FFFFFF"
    >
      <chakra.div>
        <chakra.h2>Blog posts</chakra.h2>
      </chakra.div>
    </chakra.div>
  );
};

export default BlogPosts;
