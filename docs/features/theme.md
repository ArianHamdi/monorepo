---
sidebar_position: 6
---

# Theme

Web Apps are web applications which are meant to look native. It includes not
only usage of components which mimic the native components, but parent
application colors too.

Web App is being provided with colors, which are currently used by Telegram app.
These colors should be used by Web App to look consistently with native
application.

## Getting theme

To learn how to get theme information, you will probably need these links:

- [Getting from launch parameters](../launch-params/structure#tgwebappthemeparams)
- [Getting with Web Apps method](../apps-communication/methods.mdx#web_app_request_theme)

## Updating colors

Nevertheless, we forgot something important. Developer could change some colors
by himself. To do this, he should
use [`web_app_set_background_color`](../apps-communication/methods.mdx#web_app_set_background_color)
and [`web_app_set_header_color`](../apps-communication/methods.mdx#web_app_set_header_color)
, which will update background and header colors respectively.

:::note

Don't forget to check if current Web App version supports these methods.

:::

## Background and header colors

To be more accurate, these colors are not colors of `html`, `head` or `body`
tags of Web App. They belong to Telegram application parts. Web App is
displayed inside WebView, which is a part of more complex structure of Telegram
application. This structure consists of header and body. WebView will be placed
inside body part.

Telegram allows updating these header and background colors with methods such
as [`web_app_set_background_color`](../apps-communication/methods.mdx#web_app_set_background_color)
and [`web_app_set_header_color`](../apps-communication/methods.mdx#web_app_set_header_color)
. 
