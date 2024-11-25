import { TechnologyType } from "@constants/main/types";

export default async function getTechnologies() {
    const filePath = "technologies.json";
    const baseURL = import.meta.env.VITE_PORTFOLIO_RESOURCES_BASE_URL;

    const data = await fetch(`${baseURL}/${filePath}`).then(
        (res) => res.json() as Promise<TechnologyType[]>
    );

    return data;
}
