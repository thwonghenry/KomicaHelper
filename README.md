# Komica Helper - chrome extension for komica
## Features
- Update the threads and replies without refreshing
- Display the quoted reply near the quote ID when hovered
- Enlarge the thumbnail by clicking the button nearby
- Show the form of creating new thread / reply with toggle button
- Night mode toggle
- More to come..

## Supported boards:
- Boards that are not listed below are fully supported

## ___Partially___ supported boards that contain bugs
- 漫畫, 綜合二, 三次實況, COSPLAY, 綜合學術, [http://study.mykomica.org/*](http://study.mykomica.org/*), 香港板, 笑話, 歐美動畫, New Age, 戀愛, 政治, 耳機, 手機, 髮型, 家政, 讀書筆記, 安價, 短片二, 彈幕, 音樂遊戲, 網頁遊戲, RPG Maker, Steam, CosmicBreak, Elsword, DNF, DOTA2, GW2, LOL, Minecraft, PAD, PSO2, SDGO, StarCraft, WOW, 白貓Project, 流亡黯道 PoE, 新瑪奇英雄傳, 艦隊收藏, 魔物獵人, 爐石戰記, 星空幻想, 東方, 龍騎士07, 反逆, 廢怯少女, 禁書, 遊戲王, 女王之刃, Digimon, IM@S, LoveLive!, Pokemon, Saki, Capcom, KOEI, 偶像, AKB48, 角色配對, 催淚, 正太, 3D, MMD, SOHO, 動物綜合, 網頁設計: javascript injected element reset after update
- [http://2cat.org/~*](http://2cat.org/~*): applied twice
- [http://homu.komica.org/*](http://homu.komica.org/*), [http://pink.komica.org/*](http://pink.komica.org/*): only image enlargement
- 投票所: inner pages also loaded the script
- 巫女: cannot update home page

## Not supported boards for now
- Figure/GK
- 治癒系
- 萌貳
- 海外生活
- 鐵道
- _*/vichan/_*
- 短片二
- 直播
- 三次壁
- Joyful Note

## How to use
- Download [https://github.com/thwonghenry/KomicaHelper/raw/master/build.crx](https://github.com/thwonghenry/KomicaHelper/raw/master/build.crx)
- Load it from Google Chrome
- Done!

## TODO features:
- Support more boards
- Support update topic list
- Support update push posts
- Better date representation
- Hide post/thread/reply by keywords / click / ID
- Highlight the same ID in a thread
- In a reply, show which replies quoted it
- Setting page
- Support Firefox, Microsoft Edge and User Script

## TODO bugfix / performance improvement:
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

## Contribution guideline:
- Only TypeScript, SASS and jade
- The code must pass tslint with the config in this project without warnings (also no compile errors, of course)
- All the type definitions must go into typings/komica-helper.d.ts
