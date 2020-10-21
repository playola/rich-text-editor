import React, { useRef, useState, useEffect } from 'react';
import { Editor, EditorState, ContentState } from 'draft-js';
import Link from '../../components/link';
import { EditorWrapper } from './DraftJs.styles';

const DraftJs = () => {
  const content = ContentState.createFromText('A line of text in a paragraph.');
  const [editorState, setEditorState] = useState(EditorState.createWithContent(content));

  const editor = useRef(null);

  const focusEditor = () => {
    editor.current.focus();
  }

  useEffect(() => {
    focusEditor();
  }, []);

  return (
    <div>
      <Link href="https://draftjs.org/docs/getting-started/">DraftJs Docs</Link>
      <EditorWrapper onClick={focusEditor}>
        <Editor
          ref={editor}
          editorState={editorState}
          onChange={editorState => setEditorState(editorState)}
        />
      </EditorWrapper>
    </div>
  );
};

export default DraftJs;
