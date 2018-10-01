import React from "react";
import PropTypes from "prop-types";
import { ModalImage } from "@times-components/image";
import cropPropTypes from "./crop-prop-types";

const ArticleLeadAssetImage = ({
  caption,
  credits,
  crop: { ratio, url },
  width
}) => {
  const [ratioWidth, ratioHeight] = ratio.split(":");
  const aspectRatio = ratioWidth / ratioHeight;

  return (
    <ModalImage
      aspectRatio={aspectRatio}
      caption={caption}
      credits={credits}
      highResSize={width}
      uri={url}
    />
  );
};

ArticleLeadAssetImage.propTypes = {
  caption: PropTypes.string,
  credits: PropTypes.string,
  crop: cropPropTypes.isRequired,
  width: PropTypes.number
};

ArticleLeadAssetImage.defaultProps = {
  caption: null,
  credits: null,
  width: null
};

export default ArticleLeadAssetImage;
