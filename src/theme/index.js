import { lighten } from 'polished';

const PRIMARY = '#CBE0F3';
const LIGHT_PRIMARY = 'aliceblue';
const DARK_PRIMARY = '#0F86F1';
const DRAFT_JS = '#843131';
const SLATE_JS = '#D8D8D8';
const LIGHT_GRAY = '#F6F6F6';

export const theme = {
  // Main palette
  primary: PRIMARY,
  lightPrimary: LIGHT_PRIMARY,
  darkPrimary: DARK_PRIMARY,

  // DraftJs
  draftJsPrimary: DRAFT_JS,
  draftJsPrimaryLighten: lighten(0.1, DRAFT_JS),

  // SlateJs
  slateJsPrimary: SLATE_JS,
  slateJsPrimaryLighten: lighten(0.1, SLATE_JS),

  // Gray scale
  lightGray: LIGHT_GRAY,
};
