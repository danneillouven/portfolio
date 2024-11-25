import { ProjectType } from "@constants/projects/types";

export default async function getProjects() {
    const filePath = "projects.json";
    const baseURL = import.meta.env.VITE_PORTFOLIO_RESOURCES_BASE_URL;

    const data = await fetch(`${baseURL}/${filePath}`).then(
        (res) => res.json() as Promise<ProjectType[]>
    );

    return data;
}
