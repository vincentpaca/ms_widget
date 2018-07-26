(function () {
    // Build the parameters for configuration
    params = "?widget_type=" + MoneySmartWidgetConfig.widget_type;

    // Append the iFrame
    let iframe = document.createElement("iframe");
    iframe.setAttribute("src", "http://localhost:3000/" + params);
    iframe.style.width = "700px";
    iframe.style.height = "775px";
    document.getElementById('moneysmart-fp-widget').appendChild(iframe);
})();
