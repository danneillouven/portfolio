import { useState } from "react";

export default function useDownloadResume() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    function downloadResume() {
        setIsLoading(true);
        setError(null);

        try {
            const resumeFilePath = "CV-ALINEA-LOUVEN.pdf";

            const anchor = document.createElement("a");
            anchor.href = resumeFilePath;
            anchor.download = "CV-ALINEA-LOUVEN.pdf";
            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);

            setIsLoading(false);
            return { data: { message: "success" }, error: null };
        } catch (error: any) {
            setError(error?.message || "An error occurred while downloading.");
            setIsLoading(false);
            return {
                data: null,
                error: error?.message || "An error occurred.",
            };
        }
    }

    return { downloadResume, isLoading, error };
}
