import React from 'react';
import Icon from '../../../../components/icon';
import { IconWrapper } from './InlineStyleControls.styles';

const INLINE_STYLES = [
  { icon: 'Bold', style: 'BOLD' },
  { icon: 'Italic', style: 'ITALIC' },
  { icon: 'Underline', style: 'UNDERLINE' },
  { icon: 'Code', style: 'CODE' },
];

const InlineStyleControls = ({ editorState, onToggle }) => {
  const currentStyle = editorState.getCurrentInlineStyle();

  const onMouseDown = (event, style) => {
    event.preventDefault();
    onToggle(style);
  };

  return INLINE_STYLES.map(({ icon, style }, index) => (
    <IconWrapper
      key={`${style}-${index}`}
      onMouseDown={(event) => onMouseDown(event, style)}
      active={currentStyle.has(style)}
    >
      <Icon type={icon} margin="right" />
    </IconWrapper>
  ));
};

export default InlineStyleControls;
