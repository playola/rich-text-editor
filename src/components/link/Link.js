import React from 'react';

const Link = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <p>{children}</p>
  </a>
);

export default Link;
