import React, { useMemo, useCallback, useState } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import Link from '../../components/link';
import ToolbarWrapper from '../../components/toolbar-wrapper';
import MarkButton from './components/mark-button';
import BlockButton from './components/block-button';
import Element from './components/element';
import Leaf from './components/leaf';
import { initialValue } from './config/initialValue';
import { EditorWrapper } from './SlateJs.styles';

const SlateJs = () => {
  // Create a Slate editor object that won't change across renders.
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const renderElement = useCallback(props => <Element {...props} />, []);
  const renderLeaf = useCallback(props => <Leaf {...props} />, []);
  const [value, setValue] = useState(initialValue);

  return (
    <div>
      <Link href="https://docs.slatejs.org/">SlateJs Docs</Link>
        <Slate
          editor={editor}
          value={value}
          onChange={newValue => setValue(newValue)}
        >
          <EditorWrapper>
            <Editable
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              placeholder="Enter some rich text..."
              autoFocus
            />
          </EditorWrapper>
        <ToolbarWrapper>
          <MarkButton format="bold" icon="Bold" />
          <MarkButton format="italic" icon="Italic" />
          <MarkButton format="underline" icon="Underline" />
          <MarkButton format="code" icon="Code" />
          <BlockButton format="heading-one" icon="FontSize" />
          <BlockButton format="heading-two" icon="FontSize" />
          <BlockButton format="block-quote" icon="RightSquare" />
          <BlockButton format="numbered-list" icon="OrderedList" />
          <BlockButton format="bulleted-list" icon="UnorderedList" />
        </ToolbarWrapper>
      </Slate>
    </div>
  );
};

export default SlateJs;
