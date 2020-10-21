import React from 'react';
import * as AntdIcons from '@ant-design/icons';
import { IconWrapper } from './Icon.styles';

/**
 * @param {String} margin "all", "top", "right", "bottom", "left".
 */
const Icon = ({ type, margin, onClick, ...iconProps }) => {
  const AntdIcon = AntdIcons[`${type}Outlined`] || null;

  return AntdIcon && (
    <IconWrapper margin={margin}>
      <AntdIcon onClick={onClick} {...iconProps} />
    </IconWrapper>
  );
};

export default Icon;
