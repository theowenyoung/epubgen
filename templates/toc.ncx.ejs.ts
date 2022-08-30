const content = `
<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
    <head>
        <meta name="dtb:uid" content="<%= id %>" />
        <meta name="dtb:generator" content="epub-gen"/>
        <meta name="dtb:depth" content="1"/>
        <meta name="dtb:totalPageCount" content="0"/>
        <meta name="dtb:maxPageNumber" content="0"/>
    </head>
    <docTitle>
        <text><%= title %></text>
    </docTitle>
    <docAuthor>
        <text><%= author %></text>
    </docAuthor>
    <navMap>
        <% var _index = 0; %>
        <% content.forEach(function(content, index){ %>
            <% if(!content.excludeFromToc && content.beforeToc){ %>
                <navPoint id="content_<%= index %>_<%= content.id %>" playOrder="<%= _index++ %>" class="chapter">
                    <navLabel>
                        <text><%= (numberChaptersInTOC ? (1+index) + ". " : "") + content.title %></text>
                    </navLabel>
                    <content src="<%= content.filename %>"/>
                </navPoint>
            <% } %>
        <% }) %>
        
        <% if (tocInTOC){ %>
            <navPoint id="toc" playOrder="<%= _index++ %>" class="chapter">
                <navLabel>
                    <text><%= tocTitle %></text>
                </navLabel>
                <content src="toc.xhtml"/>
            </navPoint>
        <% } %>

        <% content.forEach(function(content, index){ %>
            <% if(!content.excludeFromToc && !content.beforeToc){ %>
                <navPoint id="content_<%= index %>_<%= content.id %>" playOrder="<%= _index++ %>" class="chapter">
                    <navLabel>
                        <text><%= (numberChaptersInTOC ? (1+index) + ". " : "") + content.title %></text>
                    </navLabel>
                    <content src="<%= content.filename %>"/>
                </navPoint>
            <% } %>
        <% }) %>
    </navMap>
</ncx>
` as string;

export default content;
