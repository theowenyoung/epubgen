const content = `
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="<%= lang %>" lang="<%= lang %>">
<head>
  <meta charset="UTF-8" />
  <title><%= title %></title>
  <link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>
  <% if (prependChapterTitles) { %>
    <h1><%= title %></h1>
    <% if (author.length) { %>
      <p class="epub-author"><%= author.join(', ') %></p>
    <% } %>
    <% if (url) { %>
      <p class="epub-link"><a href="<%= url %>"><%= url %></a></p>
    <% } %>
  <% } %>
  <%- content %>
</body>
</html>
` as string;

export default content;
