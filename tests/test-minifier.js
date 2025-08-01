const { minify } =  require('../src/htmlminifier');

const html = `
    <html>
        <body>
            <div> hello </div>
            <% for ( let i=0; i<10; i++) { %>
            <p> <%=i %> </p>
            <% } %>
            <?xml version ="1.0" ?>
        </body>
    </html>
`;

const result = minify(html, {
    collapseWhitespach : true,
    removeComments: true,
    minifyJS : true,
    minifyCSS : true,
});

console.log(result);