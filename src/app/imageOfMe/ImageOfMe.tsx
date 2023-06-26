import { motion } from "framer-motion";
import React from "react";
import "./imageOfRune.scss";
import "@/app/imageOfMe/blob/blob.scss";
import { BlobImg } from "@/app/imageOfMe/blob/BlobCard";
import { loadStylingMotion } from "@/utils/utils";
import Image from "next/image";
import me from "../../../public/images/me.png";

type ImageOfRuneProps = {
  isInView: boolean;
};

const ImageOfRune = ({ isInView }: ImageOfRuneProps) => {
  return (
    <motion.div
      className={"img-tag-div-container"}
      style={loadStylingMotion(isInView, 1)}
    >
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
