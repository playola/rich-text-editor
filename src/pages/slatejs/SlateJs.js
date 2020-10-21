import React, { useMemo, useCallback, useState } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import Link from '../../components/link';
import Toolbar from './components/toolbar';
import MarkButton from './components/mark-button';
import BlockButton from './components/block-button';
import Element from './components/element';
import Leaf from './components/leaf';
import { EditorWrapper } from './SlateJs.styles';

const initialValue = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable ' },
      { text: 'rich', bold: true },
      { text: ' text, ' },
      { text: 'much', italic: true },
      { text: ' better than a ' },
      { text: '<textarea>', code: true },
      { text: '!' },
    ],
  },
  {
    type: 'paragraph',
    children: [
      {
        text:
          "Since it's rich text, you can do things like turn a selection of text ",
      },
      { text: 'bold', bold: true },
      {
        text:
          ', or add a semantically rendered block quote in the middle of the page, like this:',
      },
    ],
  },
  {
    type: 'block-quote',
    children: [{ text: 'A wise quote.' }],
  },
  {
    type: 'paragraph',
    children: [{ text: 'Try it out for yourself!' }],
  },
];

const SlateJs = () => {
  // Create a Slate editor object that won't change across renders.
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const renderElement = useCallback(props => <Element {...props} />, []);
  const renderLeaf = useCallback(props => <Leaf {...props} />, []);
  const [value, setValue] = useState(initialValue);

  return (
    <div>
      <Link href="https://docs.slatejs.org/">SlateJs Docs</Link>
      <EditorWrapper>
        <Slate
          editor={editor}
          value={value}
          onChange={newValue => setValue(newValue)}
        >
          <Toolbar>
            <MarkButton format="bold" icon="Bold" />
            <MarkButton format="italic" icon="Italic" />
            <MarkButton format="underline" icon="Underline" />
            <MarkButton format="code" icon="Code" />
            <BlockButton format="heading-one" icon="FontSize" />
            <BlockButton format="heading-two" icon="FontSize" />
            <BlockButton format="block-quote" icon="RightSquare" />
            <BlockButton format="numbered-list" icon="OrderedList" />
            <BlockButton format="bulleted-list" icon="UnorderedList" />
          </Toolbar>
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            placeholder="Enter some rich text..."
            autoFocus
          />
        </Slate>
      </EditorWrapper>
    </div>
  );
};

export default SlateJs;
