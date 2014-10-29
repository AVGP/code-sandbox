code-sandbox
============

Interactive code editor plus live preview. Ideal for live-coding, live-demos and tutorials.

Usage
-----
* Import the code-sandbox.html into your application
* Insert a `<code-sandbox>` tag

Example:

```html
<!doctype html>
<html>
<head>
  <link rel="import" href="http://components.geekonaut.de/code-sandbox/code-sandbox.html">
</head>
<body>
  <h1><code-sandbox></h1>

  <h2>Simple demo</h2>
  <p>Enter some HTML and see the magic happen</p>
  <code-sandbox language="xml"></code-sandbox>

  <h2>Load source from file</h2>
  <p>This sandbox uses a theme and loads the content from a file</p>
  <code-sandbox language="xml" theme="monokai" src="demo-content/demo.html"></code-sandbox>

  <h2>Without auto update</h2>
  <p>Press Shift+Return to update</p>
  <code-sandbox language="xml" theme="monokai" autoupdate="no"></code-sandbox>

  <h2>Demo with a custom javascript parser:</h2>
  <p>Enter some valid javascript and see the output of the last statement</p>
  <code-sandbox language="javascript" theme="monokai" id="customParser" src="demo-content/demo.js"></code-sandbox>
  <script>
  function runJS(code) {
    return eval(code);
  }
  document.getElementById("customParser").parser = runJS;
  </script>

</body>
</html>
```
