# README

## How to install

1. Copy this code somewhere inside your `<body></body>` tag, preferably just before where the closing tag is.

    ```
    <!--start of MoneySmart Widget code-->
      <script type='text/javascript'>
        var ms_widget_type = 'travel';
        (function(){
          var ms = document.createElement('script'); 
          ms.type = 'text/javascript'; 
          ms.async = true;  
          ms.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'ms-financial-widget.herokuapp.com/widget.js';  
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ms, s);
        }());
      </script>
    <!--end of MoneySmart Widget code-->
    ```

2. Add this div `<div id='moneysmart_widget'></div>` to a location where you want the widget to show up.
3. That's it!
