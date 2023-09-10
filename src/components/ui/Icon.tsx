import React, { FC } from 'react';
import { Image, ImageProps, ImageStyle } from 'react-native';
interface IconProps {
  icon: ImageProps,
  styles?: ImageStyle;
}

const Icon: FC<IconProps> = ({icon, styles}) => {
  return (
    <Image style={styles} source={icon}/>
  );
};

export default Icon;
