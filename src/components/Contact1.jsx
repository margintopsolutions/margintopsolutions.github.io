import { service_tab_items } from "@/constants";
import { XIcon } from "lucide-react";
import { Typography } from "@mui/material";

const ContactPage1 = ({ need, handleNeed, ContinueButton }) => {

    return (
        <div className="flex flex-col gap-4 bg-[#2f2f2f88] px-16 py-12 rounded-xl">

            <Typography variant="body1">What are you looking to have developed</Typography>

            <div className="flex flex-row gap-4 flex-wrap">
                {service_tab_items.map((service, i) =>
                    need.split(',').map((x) => x.trim()).includes(service.topic) ?
                        <div key={i} className="relative" >
                            <XIcon
                                onClick={() => handleNeed(service.topic)}
                                className="p-1 absolute -right-2 -top-2 bg-secondary rounded-full hover:bg-white hover:text-black"
                            />
                            <button
                                className="bg-primary rounded-xl px-6 py-2 gap-3"
                            >
                                {service.topic}
                            </button>
                        </div>
                        : <button
                            key={i}
                            className="bg-secondary hover:bg-white hover:text-black rounded-xl px-6 py-2 gap-3"
                            onClick={() => handleNeed(service.topic)}
                        >
                            {service.topic}
                        </button>
                )}
            </div>

            <Typography variant="body1" className="py-2">Or, tell us what you are looking for</Typography>

            <input
                type="text"
                className="bg-[#0000] border-b-2 border-gray-400 focus:border-white outline-none w-1/2"
                placeholder="Enter a topic"
                value={need}
                onChange={(e) => handleNeed(e.target.value, true)}
            />

            <ContinueButton />

        </div>
    );
}

export default ContactPage1;