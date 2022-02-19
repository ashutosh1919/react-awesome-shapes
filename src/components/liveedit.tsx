import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as polished from 'polished';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import codeTheme from 'prism-react-renderer/themes/github';

const background = '#42374a';
const foreground = '#f8f8f2';
const red = '#ff5555';

const blue = polished.lighten(0.1, '#d1b0dd');
const codeBackground = '#011727';
const previewBackground = '#eef2ff';

const StyledProvider = styled(LiveProvider)`
  border-radius: ${polished.rem(3)};
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  overflow: hidden;
  margin-bottom: ${polished.rem(100)};
`;

const LiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: stretch;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const column = css`
  flex-basis: 50%;
  width: 50%;
  max-width: 50%;
  @media (max-width: 600px) {
    flex-basis: auto;
    width: 100%;
    max-width: 100%;
  }
`;

const StyledEditor = styled.div`
  background: ${codeBackground};
  font-family: 'Source Code Pro', monospace;
  font-size: ${polished.rem(14)};
  height: ${polished.rem(350)};
  max-height: ${polished.rem(200)};
  overflow: auto;
  ${column};
  * > textarea:focus {
    outline: none;
  }

  font-size: 15;
  line-height: 1.45;
  word-break: normal;
  overflow: auto;
  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  margin: 3 -3;
  background-color: editor-background;
  color: editor-on;
  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  hyphens: none;
  padding: 4 0;
  textarea {
    &:focus {
      outline: none;
    }
  }
`;

const StyledPreview = styled(LivePreview)`
  position: relative;
  display: flex;
  padding: 0.5rem;
  background: ${previewBackground};
  color: black;
  height: ${polished.rem(350)};
  max-height: ${polished.rem(200)};
  overflow: hidden;
  text-align: center;
  justify-content: center;
  ${column};
`;

const StyledError = styled(LiveError)`
  display: block;
  padding: ${polished.rem(8)};
  background: ${red};
  color: ${foreground};
  white-space: pre-wrap;
  text-align: left;
  font-size: 0.9em;
  font-family: 'Source Code Pro', monospace;
`;

function getTheme() {
  return codeTheme;
}

const LiveEdit = ({ code, noInline, scope }: any) => (
  <StyledProvider code={code} language="jsx" noInline={noInline} scope={scope} theme={getTheme()}>
    <LiveWrapper>
      <StyledEditor>
        <LiveEditor />
      </StyledEditor>
      <StyledPreview />
    </LiveWrapper>

    <StyledError />
  </StyledProvider>
);

export default LiveEdit;
