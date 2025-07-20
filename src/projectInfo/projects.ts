import cloudGamingImage from '@/images/cloudGaming.png';

import { Project, Projects, PROJECT_OBJECTS } from "./projectTypes";

const cloudGaming: Project = {
    projectName: "Cloud Gaming",
    projectSubtitle: "Enabling gameplay on any web-connected device",
    image: cloudGamingImage.src,
    imageSubtitle: 'Gaming on the cloud. Literally.',
    projectInfo: [
        { [PROJECT_OBJECTS.TITLE]: 'What was the problem?', },
        { [PROJECT_OBJECTS.TEXT]: `Often, we would see that people would visit games.skillz.com and interact with some of its pages, but wouldn't download any games. Hmm... What if people could "test drive" games using their own phones? After all, what better way to figure out if you want to use a product than, well, using it? That's where cloud gaming comes in.` },
        { [PROJECT_OBJECTS.TITLE]: 'What was the plan?' },
        { [PROJECT_OBJECTS.TEXT]: `We wanted people to be able to play games on the site, but also not have us susceptible to incurring excessive server fees. It should be functionally identical to the app, as if the game was already on the user's phone.` },
        { [PROJECT_OBJECTS.TITLE]: 'What did we do?' },
        { [PROJECT_OBJECTS.TEXT]: `To do this, we essentially spun up some servers with emulators that already had the games pre-installed, and enabled connection to those emulators from the browser. And, to ensure that people connecting to the servers were real people, we implemented session management via the site, allowing people to log in and play. What did I do? Specifically, I integrated the flow that allowed users to log in, managed the session tokens, and alerted the servers that they needed to be available for a user. For letting users log in, I implemented a "log in" option as part of the header, which accepted a user's credentials and checked them against the backend. If they were a valid user, I would've gotten an authenticated token, and I continued refreshing this token for as long as they were playing a cloud game. But... How did I initialize the session? I created a "Play" button, and when this was pressed, I initialized a webview that would render what the server was sending (in this case, the emulated game).` },
        { [PROJECT_OBJECTS.TITLE]: 'What was the impact?' },
        { [PROJECT_OBJECTS.TEXT]: `In the end, this project involved a lot of collaboration with teams spanning various disciplines, including project managers, designers, and fellow engineers. Seeing our idea come to life via cloud gaming was an amazing achievement!` }
    ]
}

export const PROJECT_LIST: Projects = {
    CLOUDGAMING: cloudGaming
}