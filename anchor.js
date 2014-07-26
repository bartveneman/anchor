(function (d /*document*/, a, b, c, i) {
    a = [];

    // Loop though headings selectors list -> h[1..6]
    for (i = 1; i <= 6; i++) {
        // Get the elements
        b = d.getElementsByTagName("h" + i);
        // Build a single array of all elements
        for (c = b.length; c--; a.unshift(b[c]));
    }

    // Create a pilcrow for each element
    for (i = 0; i < a.length; i++) {
        b = a[i];
        c = b.innerHTML;
        // Parse title to url-friendly text
        b.id = c.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
        // Create the pilcrow element
        c = d.createElement("a");
        c.href = "#" + b.id;
        c.className = "anchor";
        c.appendChild(d.createTextNode("§"));
        b.insertBefore(c, b.firstChild);
    }
}(document));
