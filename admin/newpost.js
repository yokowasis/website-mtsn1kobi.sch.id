import dotenv from "dotenv";
dotenv.config();

/**
 *
 * @param {string} text
 */
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-"); // Replace multiple - with single -
}

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = "yokowasis";
const REPO_NAME = "website-mtsn1kobi.sch.id";

let TITLE = "Hello World";
let excerpt = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.`;
let coverImage = `/assets/blog/hello-world/cover.jpg`;
let date = new Date().toISOString();
let FILE_PATH = `_posts/${date}-${slugify(TITLE)}.md`;
let author = {
  name: "Tim Neutkens",
  picture: "/assets/blog/authors/tim.jpeg",
};
let ogImage = {
  url: "/assets/blog/hello-world/cover.jpg",
};

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const newpost = async (req, res) => {
  const data = req.body;
  // make sure data has all required fields
  if (
    !data?.title ||
    !data?.excerpt ||
    !data?.coverImage ||
    !data?.postContent ||
    !data?.postContent.length
  ) {
    res.status(400).json({ message: "Data tidak valid" });
    return;
  }

  TITLE = data.title.replace(/'/g, "&#39;");
  excerpt = data.excerpt.replace(/'/g, "&#39;");
  coverImage = data.coverImage;
  date = new Date().toISOString();
  FILE_PATH = `_posts/${date}-${slugify(TITLE)}.md`;
  author.name = data?.author?.name?.replace(/'/g, "&#39;") || "Admin";
  author.picture =
    data?.author?.picture ||
    "https://api.dicebear.com/9.x/icons/svg?seed=Maria";
  ogImage.url = data.ogImage.url;

  const metadata = `---
title: '${TITLE}'
excerpt: '${excerpt}'
coverImage: '${coverImage}'
date: '${date}'
author:
  name: ${author.name}
  picture: '${author.picture}'
ogImage:
  url: '${ogImage?.url || coverImage}'
---

`;

  const postContent = data.postContent;

  const content = metadata + postContent;
  await createFile(content);
  res.json({ message: "Post berhasil dibuat" });
};

/**
 *
 * @param {string} content
 */
async function createFile(content) {
  const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`;

  const data = {
    message: "Add newpost.js",
    content: Buffer.from(content).toString("base64"),
    branch: "main", // Specify your branch
  };

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("File created successfully:", responseData.content.html_url);
  } catch (error) {
    console.error("Error creating file:", error.message);
  }
}
