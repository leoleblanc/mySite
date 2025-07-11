import { PROJECTS_WORKED_ON } from "@/global/constants";
import { PROJECT } from "@/global/types";

const getProjectDetailsFromName = (urlName: string) => {
    const nameWithoutDashes = urlName.replace(/-/g, '');

    const indexName = nameWithoutDashes.toUpperCase();

    return PROJECTS_WORKED_ON[indexName] || null;
}

export default async function Page({ params }: {
    params: Promise<{ projectName: string }>
}) {
    const projectName = (await params).projectName;

    const projectDetails: PROJECT = getProjectDetailsFromName(projectName);

    return <div>
        {projectDetails.name}
        <div>
            Imagine if you could preview a game you wanted to play without downloading it first. That's where Cloud Gaming comes in.
        </div>
        <div>
            The goal of this project was to allow people to visit games.skillz.com and let them play games first before asking them to download anything. After all, what better way to figure out if you want do use a product than, well, using it?
        </div>
        <div>
            So how did we do it? Essentially we spun up some servers with emulators that had the games pre-installed, and enabled connection to those emulators from the browser.
            We needed to ensure that that people connecting to the servers were real people.
            So, we implemented session management via the web, letting people log in and play if they're on the platform.
        </div>
        <div>
            What were my contributions? Specifically, I integrated the flow that allowed users to log in, managed the session tokens, and alerted the servers that they needed to be available for a user.
            For letting users log in, I implemented a "log in" option as part of the header, which accepted a user's credentials and checked them against the backend.
            If they were a valid user, I would've gotten an authenticated token, and I continued refreshing this token for as long as they were playing a cloud game.
            But... How did I initialize the session? I created a "Play" button, and when this was pressed, I initialized a webview that would render what the server was sending (in this case, the emulated game)
        </div>
        <div>
            In the end, this project involved a lot of collaboration with teams spanning the frontend and backend, and I worked with many fellow engineers to pull this off.
        </div>

    </div>

}

// so, how am I thinking I want to do this... I want to have the cards link to this. each card should have an href