import { GithubBaseUserInformationType } from "@constants/main/types";

export default async function getGithubBaseUserInformation() {
    const data = await fetch("https://api.github.com/users/danneillouven").then(
        (res) => res.json() as Promise<GithubBaseUserInformationType>
    );

    return data;
}
