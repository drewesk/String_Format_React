import React from 'react';

function formatText(text) {
  const boldReplaced = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  const blocks = boldReplaced.split(/\n{2,}/);

  return blocks
    .map((block) => {
      if (/^\* /.test(block.trim())) {
        const listItems = block
          .split('\n')
          .map(line => line.match(/^\* (.*)/)?.[1])
          .filter(Boolean)
          .map(item => `<li>${item}</li>`)
          .join('');
        return `<ul>${listItems}</ul>`;
      }

      const withBreaks = block.replace(/\n/g, '<br />');
      return `<p>${withBreaks}</p>`;
    })
    .join('');
}

export default function AIResponse({ text }) {
  return (
    <div
      className="prose"
      dangerouslySetInnerHTML={{ __html: formatText(text) }}
    />
  );
}
