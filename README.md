# Komica Helper - chrome extension for komica
## Features
- Update the threads and replies without refreshing
- Display the quoted reply near the quote ID when hovered
- More to come..

## Supported boards
- 新番實況, 新番捏他
- More to come..

## How to use
1. Download https://github.com/thwonghenry/KomicaHelper/raw/master/build.crx
2. Load it from Google Chrome
3. Done!

## TODO features:
- Figure out a pattern to support multiple boards easily
- Cache images, view on hover
- Float reply/new thread area
- Load replies in home page without redirect
- Highlight the same ID in a thread
- Selectively hide replies
- In a reply, show which replies quoted it
- Setting page
- Night mode / custom style
- Support Firefox, Microsoft Edge and User Script 

## TODO bugfix / performance improvement:
- Improve performance when updating threads in home page

## How to build the chrome extension
1. Make sure you have installed node.js and Google Chrome
2. `npm i`
3. `npm run build`
4. Load the `build` folder as unpackaged extension in Google Chrome
