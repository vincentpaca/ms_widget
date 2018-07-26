(function () {
    // Build the parameters for configuration
    params = "?widget_type=" + MoneySmartWidgetConfig.widget_type +
        "&min_amount=" + MoneySmartWidgetConfig.min_amount +
        "&max_amount=" + MoneySmartWidgetConfig.max_amount +
        "&min_months=" + MoneySmartWidgetConfig.min_months +
        "&max_months=" + MoneySmartWidgetConfig.max_months +;
        "&amount_placeholder=" + MoneySmartWidgetConfig.amount_placeholder;

    // Append the iFrame
    let iframe = document.createElement("iframe");
    iframe.setAttribute("src", "http://localhost:3000/" + params);
    iframe.style.width = "700px";
    iframe.style.height = "775px";
    document.getElementById('moneysmart-fp-widget').appendChild(iframe);
})();
