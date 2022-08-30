const content = `
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="<%- lang %>" lang="<%- lang %>">
<head>
    <title><%= title %></title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" type="text/css" href="style.css" />
</head>
<body>
    <h1 class="h1"><%= tocTitle %></h1>
    <nav id="toc" epub:type="toc">
        <% if (numberChaptersInTOC){ %>
            <ol>
        <% }else{ %>
            <ol style="list-style: none">
        <% } %>
            <% content.forEach(function(content, index){ %>
                <% if(!content.excludeFromToc){ %>
                    <li class="table-of-content">
                        <a href="<%= content.filename %>"><%= content.title %>
                            <% if(content.author.length){ %>
                                - <small class="toc-author"><%= content.author.join(",") %></small>
                            <% }%>
                            <% if(content.url){ %><span class="toc-link"><%= content.url %></span><% }%>
                        </a>
                    </li>
                <% } %>
            <% }) %>
        </ol>
    </nav>
</body>
</html>
` as string;

export default content;
