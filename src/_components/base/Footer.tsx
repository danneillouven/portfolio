import { Button } from "@nextui-org/react";
import { MailPlus } from "lucide-react";

export default function Footer() {
    return (
        <>
            <div className="flex items-center h-full my-16 flex-col gap-4 sm:flex-row ">
                <div className="w-full h-full md:w-6/12 flex items-center gap-4">
                    <a
                        href="mailto:danneillouven@gmail.com"
                        className="w-full h-full sm:w-max"
                    >
                        <Button
                            size="sm"
                            color="primary"
                            radius="none"
                            className="rounded-lg w-full"
                        >
                            Hire me
                        </Button>
                    </a>
                    <div className="flex items-center border p-2 px-3 rounded-lg border-default gap-4 sm:w-max">
                        <MailPlus size={18} />
                        <p className="text-xs">danneillouven@gmail.com</p>
                    </div>
                </div>
                <div className="md:w-6/12 text-xs text-end">
                    <p>
                        {"© psyxph 2024. Made with Tears. All Rights Reserved."}
                    </p>
                </div>
            </div>
        </>
    );
}
