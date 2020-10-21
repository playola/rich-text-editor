import React, { useRef, useState, useEffect } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import Link from '../../components/link';
import Toolbar from '../../components/toolbar';
import InlineStyleControls from './components/inline-style-controls';
import { initialValue } from './config/initialValue';
import { EditorWrapper } from './DraftJs.styles';

const DraftJs = () => {
  const [editorState, setEditorState] = useState(EditorState.createWithContent(initialValue));

  const editor = useRef(null);

  const onChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const toggleInlineStyle = (inlineStyle) => {
    onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

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
        <Toolbar bottomspacing>
          <InlineStyleControls
            editorState={editorState}
            onToggle={toggleInlineStyle}
          />
        </Toolbar>
        <Editor
          ref={editor}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={onChange}
        />
      </EditorWrapper>
    </div>
  );
};

export default DraftJs;
