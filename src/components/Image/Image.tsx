import React from "react";

interface Props {
    src: string,
    alt?: string,
    width?: number
}

const ImageComponent: React.FC<Props> = ({src, alt, width }) => {
  return <img src={src} alt={alt} width={width}/>;
};

export default ImageComponent;