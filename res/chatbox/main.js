(function(){
    "use strict";

    // Load socket IO
    const socketIOTag = document.createElement("script");
    socketIOTag.setAttribute("type", "text/javascript");
    socketIOTag.setAttribute("src", "/socket.io/socket.io.js");

    // Append to head or root element
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(socketIOTag);

    const bootstrapTag = document.createElement("link");
    bootstrapTag.setAttribute("rel", "stylesheet");
    bootstrapTag.setAttribute("type", "text/css");
    bootstrapTag.setAttribute("href", "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
    bootstrapTag.setAttribute("integrity", "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u");
    bootstrapTag.setAttribute("crossorigin", "anonymous"); 

    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(bootstrapTag);


})();