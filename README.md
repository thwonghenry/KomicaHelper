# Komica Helper - custom scripts written for komica

## Features

- Update the threads and replies without refreshing
- Display the quoted reply near the quote ID when hovered
- Enlarge the thumbnail by clicking the button nearby
- Show the form of creating new thread / reply with toggle button
- Night mode toggle
- More to come..

## Caution

- Not all boards are supported, use with caution

## How to use

- Chrome:
  
  - Clone this repository
  - Load [build/chrome_extension/komicahelper](build/chrome_extension/komicahelper) as unpackaged extension from Google Chrome
  - Done!

- Userscript:

  - Choose the function you want to use from [build/userscripts](build/userscripts)
  - Load it from your userscripts loader in your browser
  - Done!

## TODO features

- Support more boards
- Support update topic list
- Support update push posts
- Better date representation
- Hide post/thread/reply by keywords / click / ID
- Highlight the same ID in a thread
- In a reply, show which replies quoted it
- Setting page
- Support Firefox, Microsoft Edge and User Script

## TODO bugfix / performance improvement

- Improve performance when updating threads in home page
- Threads with page switch are not updated properly
- Load the script again after update the page
- Videos cannot load after update the page
- Some element is being replaced by some extensions

## How to build the chrome extension

1. Make sure you have installed node.js and Google Chrome
2. `npm i`
3. `npm run build`
4. Load the `build` folder as unpackaged extension in Google Chrome

## Contribution guideline

- Only TypeScript, SASS and jade
- The code must pass tslint with the config in this project without warnings (also no compile errors, of course)
- All the type definitions must go into typings/komica-helper.d.ts
