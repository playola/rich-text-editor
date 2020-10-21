import React from 'react';
import { useSlate } from 'slate-react';
import { Editor, Transforms } from 'slate';
import Icon from '../../../../components/icon';
import { BlockButtonWrapper } from './BlockButton.styles';

const LIST_TYPES = ['numbered-list', 'bulleted-list'];

const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: node => node.type === format,
  });
  return !!match;
};

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: node => LIST_TYPES.includes(node.type),
    split: true,
  });

  Transforms.setNodes(editor, {
    type: isActive ? 'paragraph' : isList ? 'list-item' : format,
  });

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const BlockButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <BlockButtonWrapper
      active={isBlockActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
    >
      <Icon type={icon} margin="right" />
    </BlockButtonWrapper>
  );
};

export default BlockButton;
