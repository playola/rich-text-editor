import React from 'react';
import { useSlate } from 'slate-react';
import { Editor } from 'slate';
import Icon from '../../../../components/icon';
import { IconWrapper } from './MarkButton.styles';

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const MarkButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <IconWrapper
      active={isMarkActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      <Icon type={icon} margin="right" />
    </IconWrapper>
  );
};

export default MarkButton;
