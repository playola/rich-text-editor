import React, { useRef, useState, useEffect } from 'react';
import { Editor, EditorState } from 'draft-js';
import { Container } from './DraftJs.styles';

const DraftJs = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const editor = useRef(null);

  const focusEditor = () => {
    editor.current.focus();
  }

  useEffect(() => {
    focusEditor();
  }, []);

  return (
    <Container onClick={focusEditor}>
      <Editor
        ref={editor}
        editorState={editorState}
        onChange={editorState => setEditorState(editorState)}
      />
    </Container>
  );
};

export default DraftJs;
