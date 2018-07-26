(function () {
    console.log(parent.ms_widget_type);
    let iframe = document.createElement("iframe");
    iframe.setAttribute("src", "https://ms-financial-widget.herokuapp.com/");
    iframe.style.width = "700px";
    iframe.style.height = "775px";
    document.getElementById('moneysmart-fp-widget').appendChild(iframe);
})();
