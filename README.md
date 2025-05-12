Created initial code in this repository with Next.js using `npx create-next-app@latest`. 

# mySite
My personal website. This will be used to showcase my abilities to deploy a site while configuring the appropriate infrastructure, and as a reference for myself and others on how to go about the process. While there are countless videos out there... I just wanted to try it out for myself.

Notes: There are a few differences from when I last used Next.js
* page creation no longer follows the previous format `/pages/[page-name]/index.tsx` with "pages" as the root. Now, it is `app/[page-name]/pages.tsx`.

To build the site locally:
* clone the repository
* run `npm install` (or yarn, but I'm using npm)
  * Installs all module dependencies. These will be found in `/node_modules`
* run `npm run dev`
  * The `npm run` will run commands inside of `package.json`, specifically `scripts`, and looks for `dev` within that `scripts` object. The `dev` script reads `next dev --turbopack`, which will create a local server you can visit in your browser
* visit `localhost:3000`


Conducting more research about where to host and whether or not I should use VPS with a next.js site.

current dependencies:
* NPM (Node Package Manager)
* Next.js