# README

## 0. Production README

## can't display error messages for trades - it's hitting the right controller method and response, but no action is dispatched after

## 1. CSS / Styling
* get the DIN PRO font
* re-style splash, login pages (buttons, font, etc)
* line up price chart on stock show with the order form (about section below)
* seed database with 20+ companies

## 2. UI Fixes
* fix the Stock Page when not logged in -- nav bar and order form
* routes / SPA -- reloading, lifecycle methods
* set up a custom domain
* fix the NaN issue when shares cell is empty in order form
* the cursor over a watchlist item doesn't stay as 'pointer'

## 3. Refactor
* rethink your store/state shape -- see commit ac61644 from 8/21/19 
--- shouldn't need to dispatch multiple actions every time a user makes a trade
* CSS - repetitive, a lot of code -- use vars?
* refactor Component structure - price charts