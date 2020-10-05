import { lighten } from 'polished';

const DRAFT_JS = '#843131';
const SLATE_JS = '#D8D8D8';

export const theme = {
  // DraftJs
  draftJsPrimary: DRAFT_JS,
  draftJsPrimaryLighten: lighten(0.1, DRAFT_JS),

  // SlateJs
  slateJsPrimary: SLATE_JS,
  slateJsPrimaryLighten: lighten(0.1, SLATE_JS),
};
