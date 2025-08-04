import cloudGamingImage from '@/images/cloudGaming.png';
// import skillzMobileAppImage from '@/images/skillzAppImage.png';
import gameGenresImage from '@/images/gameGenres.jpg';
import websiteImage from '@/images/siteStockImageAlt.png';
import diamondStrikeScreenshot from '@/images/diamondStrikeScreenshot.png';
import { Project, Projects, PROJECT_OBJECTS } from "./projectTypes";

const cloudGaming: Project = {
    projectName: "Cloud Gaming",
    projectSubtitle: "Enabling gameplay on any web-connected device",
    projectTags: ["JavaScript", "TypeScript", "SASS", "CSS", "React.js", "React Native", "Next.js", "Node.js"],
    image: cloudGamingImage.src,
    // imageSubtitle: 'Gaming on the cloud. Literally.',
    projectInfo: [
        {
            [PROJECT_OBJECTS.TITLE]: {
                objectContent: `Picture This`,
            }
        },
        {
            [PROJECT_OBJECTS.TEXT]: {
                objectContent: `Imagine you're looking at a website, you see some compelling games, and then… There's just a download link. Bummer. The game might be good, but what if you don't enjoy it? Wouldn't it be great if there was a way to preview the game first? That's where Cloud Gaming comes in.`,
            }
        },
        {
            [PROJECT_OBJECTS.TITLE]: {
                objectContent: `How do we allow users to preview games?`
            }
        },
        {
            [PROJECT_OBJECTS.TEXT]: {
                objectContent: `To start, there are two actors in this system: the players and the hosts. The players should be able to:`,
                spacing: 0
            }
        },
        {
            [PROJECT_OBJECTS.LIST_NUMBERED]: {
                objectContent: [
                    `Visit the site`,
                    `Log in`,
                    `Press "Play"`,
                    `Start playing`]
            }
        },
        {
            [PROJECT_OBJECTS.TEXT]: {
                objectContent: `Our goal was to build a seamless user experience. We broke this down into two high-level tasks: find a place to host the games and create an access point for users to play said games.`
            }
        },
        {
            [PROJECT_OBJECTS.SUBTITLE]: {
                objectContent: `Host the game`
            }
        },
        {
            [PROJECT_OBJECTS.LIST_NUMBERED]: {
                objectContent: [
                    `Find somewhere to host the servers`,
                    `Download emulators onto the servers`,
                    `Download the games to be played on the emulators`,
                    `Expose the emulators to the web through the servers`,
                    `Allow a connection to the emulators`,
                    `Create a bridge between the emulators hosted on the web and where the user's browser`]
            }
        },
        { [PROJECT_OBJECTS.SUBTITLE]: { objectContent: `Create an access point for users to play` } },
        {
            [PROJECT_OBJECTS.LIST_NUMBERED]: {
                objectContent: [
                    `On the website, create a way for users to log in to the ecosystem`,
                    `Manage user login authenticity`,
                    `Ensure the user experience runs smoothly`,
                    `Enable logging out`,
                    `Gracefully handle any issues that may arise`]
            }
        },
        { [PROJECT_OBJECTS.TEXT]: { objectContent: `I was largely responsible for the second task, for which I created the path through which users logged into the existing ecosystem, managed and refreshed their login tokens, and ensured errors were handled gracefully.` } },
        { [PROJECT_OBJECTS.TEXT]: { objectContent: `Let's break it down.` } },
        { [PROJECT_OBJECTS.TEXT]: { objectContent: `First, a user visits the site to play a game. But before they can play, they need to log in. To enable logging in, I first created an element on the hamburger menu that redirects a user to the in-house login flow. Upon coming back to my page after a successful log in, the user would have two cookies: one that shows that they have been authenticated, and another that allows us to refresh both tokens.` } },
        // TODO: image goes here
        { [PROJECT_OBJECTS.TEXT]: { objectContent: `Now, after a user logs in, they need to be able to launch a game. To allow this, I integrated a wrapper component that represents the emulators on the servers, which allows the user to connect to the server.` } },
        { [PROJECT_OBJECTS.TEXT]: { objectContent: `Finally! Using the tokens from the first step, we can communicate with the server through this wrapper, the user is authenticated by the server, and then they can begin playing!` } },
        { [PROJECT_OBJECTS.TITLE]: { objectContent: `Why do we need refresh tokens?` } },
        { [PROJECT_OBJECTS.TEXT]: { objectContent: `Refresh tokens are needed because of how we implemented a solution to prevent abuse. When users interact with the system, they should not have indefinite access that could potentially be misused. To solve for this, we implemented expirations on the tokens.` } },
        { [PROJECT_OBJECTS.TEXT]: { objectContent: `However, expiring tokens would result in users being spontaneously logged out during their gaming experience. To avoid this potential interruption, I periodically refreshed the authentication token by requesting new tokens through the login API service used earlier. The refreshed tokens would then be sent to the game server to authenticate the user, keeping them in the game without interruptions.` } },
        { [PROJECT_OBJECTS.TITLE]: { objectContent: `Reflection` } },
        { [PROJECT_OBJECTS.TEXT]: { objectContent: `Through this work, we were able to create a seamless cloud gaming experience that is still live years later. It involved cross-functional collaboration with project managers, designers, and fellow engineers. While there have been some updates to how the experience is handled now, the core remains the same: allow people to play games on the cloud.` } },
        { [PROJECT_OBJECTS.TEXT]: { objectContent: `In the end, this project increased the average length of time users spent on the site by more than 10%.` } }
    ]
}

// hiding for now
// const skillzMobileApp: Project = {
//     projectName: "Skillz Mobile App",
//     projectSubtitle: 'Centralizing user profiles and games in a single app',
//     projectTags: ["React Native"],
//     image: skillzMobileAppImage.src,
//     imageSubtitle: 'The official Skillz App',
//     projectInfo: [
//         { [PROJECT_OBJECTS.TEXT]: { objectContent: `Skillz has a lot of games on their system. It includes classic games like solitaire, dominoes, and bingo, and also has games like… Beer pong!?` } },
//         // TODO: image goes here
//         { [PROJECT_OBJECTS.TEXT]: { objectContent: `With so many games offered, it can be difficult to know exactly what is available. And not only that, there is also user account information like cash and ticketz balances to track. If only there was a centralized place to house all this information… I mean, if a person boots up a game, they'll see their account info, or they could visit games.skillz.com to see how many games there are. There wasn't a way to see both of them, together, at least not at the time. What you might see today though is a result of what we started to build, then, and that was Skillz App!` } },
//         // TODO: image goes here
//         { [PROJECT_OBJECTS.TEXT]: { objectContent: `What first started as a small project to watch game replays became the official Skillz App. The goal was simple: a place where all things Skillz could be consolidated in a neat, tidy spot. There was already infrastructure for logging in via the APIs the SDK used, and the game information was already being fetched on games.skillz.com. All that needed to be done, then, was to bring the core functionalities of the two together, and that's exactly what we did.` } },
//         { [PROJECT_OBJECTS.TITLE]: { objectContent: `So... Was that all?` } },
//         { [PROJECT_OBJECTS.TEXT]: { objectContent: `You make it sound like it was that easy. But oh… Of course not! In addition to displaying games and account information, there were many more things that could be done. Things like promoting particular games, launching games from within the application, and even expanding upon the replay functionality. It was the only application dubbed “The Official Skillz App”, so it needed to be worthy of that namesake. My opinion? I'd say it is.` } },
//     ]
// }

const gameGenres: Project = {
    projectName: "Game Genres",
    projectSubtitle: 'Adding genres to games for easier discovery',
    projectTags: ["JavaScript", "TypeScript", "Node.js", "Next.js", "Ruby on Rails", "JSON", "MySQL"],
    image: gameGenresImage.src,
    // imageSubtitle: 'Various genres for various products',
    projectInfo: [
        { [PROJECT_OBJECTS.TITLE]: { objectContent: `Imagine this` } },
        { [PROJECT_OBJECTS.TEXT]: { objectContent: `Have you seen a game with a cool title and cover art but had no idea what the game is about? Or maybe you had an idea but realized while playing it that your initial impression was way off? To address this, I introduced game genres to our catalog!` } },
        {
            [PROJECT_OBJECTS.IMAGE]: {
                objectContent: diamondStrikeScreenshot.src,
                spacing: .25
            }
        },
        { [PROJECT_OBJECTS.IMAGETEXT]: { objectContent: `Skillz game Diamond Strike, classified as a Puzzle game`, spacing: 1 } },
        { [PROJECT_OBJECTS.TITLE]: { objectContent: `How did I implement game genres?` } },
        { [PROJECT_OBJECTS.TEXT]: { objectContent: `Indeed, I say “I” here, because it is an example where I implemented the entire feature end-to-end, and I'm pretty proud of that fact!* This project involved creating tables, performing table migrations, creating new UIs, and exposing and consuming endpoints. Really, it puts the “full” in “full stack”. Here are the steps I took:`, spacing: 0 } },
        {
            [PROJECT_OBJECTS.LIST_NUMBERED]: {
                objectContent: [
                    `Create a new table`,
                    `Populate that table with the genre list`,
                    `Create a dropdown menu for developers to select which genres their games fall under`,
                    `Create another table to link the genres to the games`,
                    `Expose an endpoint that took the genre(s) and added it to the game data`,
                    // `Update existing endpoints that had game data to include the genre data`,
                    `Consume this endpoint to fetch genre data for games`,
                    `Use the above data to add the genre to a game's page via a small text field`,
                    `Create a new page which categorized games by genre`
                ]
            }
        },
        { [PROJECT_OBJECTS.TEXT]: { objectContent: `To implement this new feature, I integrated applications using two different frameworks: Ruby on Rails and Next.js, which required me to learn Ruby and Rails. While this process was challenging, it was quite the learning opportunity! ` } },
        { [PROJECT_OBJECTS.TEXT]: { objectContent: `Once this feature was deployed, users no longer visited the website not knowing what kind of experience a particular game would provide. In fact, this feature change led to a 15% increase in game downloads.` } },
        { [PROJECT_OBJECTS.FOOTNOTE]: { objectContent: `*Note: I absolutely consulted with designers, project managers, and fellow engineers for their approvals throughout this process. I did not go rogue, however fun that may have been.` } },
    ]
}

const personalWebsite: Project = {
    projectName: `Personal Website`,
    projectSubtitle: `Showcasing my skills by building a website from scratch`,
    projectTags: [],
    image: websiteImage.src,
    imageSubtitle: `My site's landing page`,
    preview: true,
    projectInfo: [
        {
            [PROJECT_OBJECTS.TITLE]: {
                objectContent: `This page is in the process of being fleshed out!`,
                spacing: 0
            }
        },
    ]
}

export const PROJECT_LIST: Projects = {
    CLOUDGAMING: cloudGaming,
    // hide skillz app for now
    // SKILLZMOBILEAPP: skillzMobileApp,
    GAMEGENRES: gameGenres,
    PERSONALWEBSITE: personalWebsite
}