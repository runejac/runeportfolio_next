import { motion } from "framer-motion";
import React from "react";
import "./imageOfRune.scss";
import "../blob/blob.scss";
import { BlobImg } from "../blob/BlobCard";
import utils from "../../utils/utils";
import Image from "next/image";
import me from "../../../public/images/me.png";

const ImageOfRune = ({ isInView }) => {
  return (
    <motion.div
      className={"img-tag-div-container"}
      style={utils.loadStylingMotion(isInView, 1)}
    >
      ok
      <Image
        className={"img-tag-of-rune"}
        src={me}
        width={200}
        height={200}
        alt="image of author"
      />
      <BlobImg svgClassName={"svg-blob-img"} pathClassName={"path-blob-img"} />
    </motion.div>
  );
};

export default ImageOfRune;
