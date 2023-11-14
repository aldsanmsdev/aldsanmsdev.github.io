
function resizeIframe() {
    var iframe = document.getElementById("iframePage");
    iframe.width = (window.innerWidth-50) + 'px';
    if(window.innerWidth > 600){
        iframe.width = (600) + 'px';
    };
};

function loadIframe() {
    resizeIframe();
    window.scrollTo(0,0);
};

