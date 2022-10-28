import * as nodePath from "path";
const routFolder = nodePath.basename(nodePath.resolve());

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
  build: {
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    images: `${buildFolder}/img/`,
  },
  src: {
    images: `${srcFolder}/img/**/*.*`,
    html: `${srcFolder}/*.html`,
    scss: `${srcFolder}/scss/style.scss`,
  },
  watch: {
    images: `${srcFolder}/img/**/*.*`,
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
  },
  clean: buildFolder,
  buildFolder,
  srcFolder,
  routFolder,
  ftp: "",
};
