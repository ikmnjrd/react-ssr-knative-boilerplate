const html = ({ counter, sample }: { counter: string, sample: string }) => `
  <!DOCTYPE html>
  <html>
    <head>
    </head>
    <body style="margin:0">
      <div id="counter">${counter}</div>
      <div id="sample">${sample}</div>
    </body>
    <script src="/static/js/counter.js" defer></script>
    <script src="/static/js/sample.js" defer></script>
  </html>
`;

export default html;