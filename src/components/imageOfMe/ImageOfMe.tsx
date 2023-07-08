import { motion } from "framer-motion";
import React from "react";
import styles from "./ImageOfMe.module.scss";
import stylesBlob from "./blob/Blob.module.scss";
import { BlobImg } from "@/components/imageOfMe/blob/BlobCard";
import { loadStylingMotion } from "@/utils/utils";
import Image from "next/image";
import me from "../../../public/images/me.png";

type ImageOfRuneProps = {
  isInView: boolean;
};

const ImageOfRune = ({ isInView }: ImageOfRuneProps) => {
  return (
    <motion.div
      className={styles.imgTagDivContainer}
      style={loadStylingMotion(isInView, 1)}
    >
      <Image src={me} width={200} height={200} alt="image of author" />
      <BlobImg
        svgClassName={stylesBlob.svgBlobImg}
        pathClassName={stylesBlob.pathBlobImg}
      />
    </motion.div>
  );
};

export default ImageOfRune;
