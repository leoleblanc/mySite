import cloudGamingImage from '@/images/cloudGaming.png';
// import skillzMobileAppImage from '@/images/skillzAppImage.png';
import gameGenresImage from '@/images/skillzGenresImage.png';
import landingPageScreenshot from '@/images/landingPageScreenshot.png';
import { Project, Projects, PROJECT_OBJECTS } from "./projectTypes";

const cloudGaming: Project = {
    projectName: "Cloud Gaming",
    projectSubtitle: "Enabling gameplay on any web-connected device",
    projectTags: ["JavaScript", "TypeScript", "SASS", "CSS", "React.js", "React Native", "Next.js", "Node.js"],
    image: cloudGamingImage.src,
    imageSubtitle: 'Gaming on the cloud. Literally.',
    projectInfo: [
        {
            [PROJECT_OBJECTS.TEXT]: {
                objectContent: `Imagine you're looking at a website, you see some compelling games, and then… There's just a download link. Bummer. The game might be good, but what if you don't enjoy it? Wouldn't it be nice if there was a way to preview the game first? That's where Cloud Gaming comes in.`,
            }
        },
        {
            [PROJECT_OBJECTS.TITLE]: {
                objectContent: `So, how to do it?`
            }
        },
        {
            [PROJECT_OBJECTS.TEXT]: {
                objectContent: `Well, to start, there are two actors in this system: the players and the hosts. The players should be able to:`,
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
                    `Create a bridge between the emulators hosted on the web and where the user is located`]
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
        // { [PROJECT_OBJECTS.TITLE]: { objectContent: 'Ok, but what does that mean?' } },
        { [PROJECT_OBJECTS.TEXT]: { objectContent: `Let's break it down.` } },
        { [PROJECT_OBJECTS.TEXT]: { objectContent: `First, a user visits the site to play a game. But before they can play, they need to log in. To enable logging in, I first created an element on the hamburger menu that redirects a user to the in-house login flow. Upon coming back to my page after a successful log in, the user would have two cookies: one which shows that they have been authenticated, and another that allows us to refresh both tokens.` } },
        // TODO: image goes here
        { [PROJECT_OBJECTS.TEXT]: { objectContent: `Now, after a user logs in, they need to be able to launch a game. To allow this, I integrated a wrapper component that is essentially a webview that represents the emulators on the servers. It takes over the entire viewport, and at this point we're connecting to the server.` } },
        { [PROJECT_OBJECTS.TEXT]: { objectContent: `Finally! Using the tokens from the first step, we can communicate with the server through this wrapper, the user is authenticated by the server, and then they get to start playing!` } },
        { [PROJECT_OBJECTS.TITLE]: { objectContent: `Hold on. Refresh tokens? Why do you need those?` } },
        { [PROJECT_OBJECTS.TEXT]: { objectContent: `Well, the answer contains two components. We want to prevent opportunities for abuse, but we don't want to compromise on quality, either. In essence, when interacting with this system, users shouldn't:`, spacing: 0 } },
        {
            [PROJECT_OBJECTS.LIST_BULLETED]: {
                objectContent: [
                    `Have indefinite access that could potentially be misused`,
                    `Spontaneously log out and interrupt their flow`],
                spacing: 1.5
            }
        },
        { [PROJECT_OBJECTS.TEXT]: { objectContent: `The first case is why the tokens have expirations. As for the second, that's where the refreshment token comes in. To prevent the user from logging out, I needed to periodically refresh the authentication token, which I did through requesting new tokens through the login API service used earlier. The refreshed tokens would then be sent to the game server to authenticate the user, keeping them in the game without interruptions.` } },
        { [PROJECT_OBJECTS.TITLE]: { objectContent: `What was the impact?` } },
        { [PROJECT_OBJECTS.TEXT]: { objectContent: `Through this work, we were able to create a seamless cloud gaming experience that is still live years later. It involved cross-functional collaboration with project managers, designers, and fellow engineers. While there have been some updates to how the experience is handled now, the core remains the same: allow people to play games on the cloud.` } }
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
    imageSubtitle: 'Various genres for various products',
    projectInfo: [
        { [PROJECT_OBJECTS.TEXT]: { objectContent: `Having a game catalogue is cool, but what if the title of a game and its cover art don't quite represent what it is? A game I like to play on the Skillz platform is Diamond Strike, but it's not immediately obvious what kind of game it's supposed to be. If it's called “Diamond Strike” and the cover art is a gem getting hit by a lightning bolt, could we be zapping them somehow? Or maybe, are we the diamonds? Probably not. So, to provide some clarity, I introduced genres to the games so that they can be categorized into groups, such as Puzzle, Board, Solitaire, and so on.` } },
        { [PROJECT_OBJECTS.TITLE]: { objectContent: `Huh? You introduced them?` } },
        { [PROJECT_OBJECTS.TEXT]: { objectContent: `Indeed, I say “I” here, because it is an example where I implemented this entire feature end-to-end, and I'm pretty proud of that fact*! This project involved creating tables, performing table migrations, creating new UIs, and exposing/consuming endpoints. Really, it puts the “full” in “full stack”. At a high level, the steps I took here were:`, spacing: 0 } },
        {
            [PROJECT_OBJECTS.LIST_NUMBERED]: {
                objectContent: [
                    `Create a new table`,
                    `Populate that table with some seed data (the genre list)`,
                    `Create a dropdown menu for developers to select which genres their games fall under`,
                    `Create another table to link the genres to the games`,
                    `Expose an endpoint that essentially took the genre and added it to the games data`,
                    // `Update existing endpoints that had game data to include the genre data`,
                    `Consume this endpoint to fetch genre data for the games`,
                    `Use the above data to add the genre to the game's page via a small text field`,
                    `Create a new page which categorized games by genre`
                ]
            }
        },
        { [PROJECT_OBJECTS.TEXT]: { objectContent: `This project involved using languages like Ruby, SQL, and TypeScript, as well as applications utilizing different frameworks, where one was Ruby on Rails and another was using Next.js. It really was quite the learning opportunity!` } },
        { [PROJECT_OBJECTS.TEXT]: { objectContent: `In the end, I (and the company) was satisfied with the end result. No longer would we have users visiting the website not knowing what kind of experience a particular game would provide, because now, genres are there to save the day!` } },
        // need a placeholder to insert a footnote
        { [PROJECT_OBJECTS.FOOTNOTE]: { objectContent: `*Note: I absolutely consulted with designers, project managers, and fellow engineers for their approvals throughout this process. I did not go rogue, however interesting that may have been.` } },
    ]
}

const personalWebsite: Project = {
    projectName: `Personal Website`,
    projectSubtitle: `Showcasing my skills by building a website from scratch`,
    projectTags: [],
    image: landingPageScreenshot.src,
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