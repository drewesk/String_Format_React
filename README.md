# Format Text

A React example that parses a simple API LLM JSON-string respons into formatted JSX/HTML

---

## Usage

```jsx
import AIResponse from './AIResponse';

const text = "**Hello!**\n\n* Item 1\n* Item 2\n\nThis is a paragraph\nwith a line break.";

function App() {
  return <AIResponse text={text} />;
}
```

---

## How It Works

- Replaces ``**bold**`` with `<strong>`.
- Splits text by double newlines into blocks.
- Parses blocks starting with `*` as unordered lists.
- Parses other blocks as paragraphs with `<br />` for line breaks.
- Sanitizes the generated HTML to prevent XSS attacks.

