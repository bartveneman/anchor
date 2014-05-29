(function (d /*document*/, a, b, c, i) {  
    a = [];
  
    // Loop though headings selector list -> h[1..6]
    for (i = 0; i < 6; i++) {
        // Get the elements
        b = d.getElementsByTagName("h" + i);
        // Build a single array instead of multiple Nodelists for all seperate elements
        for (c = b.length; c--; a.unshift(b[c]));
    }
  
    // Create a pilcrow for each element
    for (i = 0; i < a.length; i++) {
        b = a[i];
        c = b.innerHTML;
        // Parse title to url-friendly text (via http://stackoverflow.com/questions/1053902/how-to-convert-a-title-to-a-url-slug-in-jquery)
        b.id = c.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
        // Create the pilcrow element
        c = d.createElement("a");
        c.href = "#" + b.id;
        c.className = "id";
        c.appendChild(d.createTextNode("¶"));
        b.insertBefore(c, b.firstChild);
    }
}(document);
