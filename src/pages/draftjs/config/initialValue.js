import { convertFromRaw } from 'draft-js';

const rawInitialValue = `{
  "entityMap": {},
  "blocks": [
    {
      "key": "e4brl",
      "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [
        {
          "offset": 0,
          "length": 11,
          "style": "BOLD"
        },
        {
          "offset": 28,
          "length": 29,
          "style": "BOLD"
        },
        {
          "offset": 12,
          "length": 15,
          "style": "ITALIC"
        },
        {
          "offset": 28,
          "length": 28,
          "style": "ITALIC"
        }
      ],
      "entityRanges": [],
      "data": {}
    },
    {
      "key": "3bflg",
      "text": "Aenean commodo ligula eget dolor.",
      "type": "unstyled",
      "depth": 0,
      "inlineStyleRanges": [],
      "entityRanges": [],
      "data": {}
    }
  ]
}`;

export const initialValue = convertFromRaw(JSON.parse(rawInitialValue));
