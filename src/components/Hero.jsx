import { styles } from "@/styles/styles";
import SectionWrapper from "@/wrapper";
import { Typography } from "@mui/material";
import { Disc, ArrowRight } from "lucide-react";
import { Link } from "react-scroll";
import { making } from "@/constants";
import { useEffect, useState } from "react";

const Hero = () => {
    const [curIndex, setCurIndex] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => setCurIndex((i) => (i + 1) % making.length), 5000);

        return () => clearTimeout(timeout);
    }, [curIndex, making.length]);

    return (
        <div className="mt-12 flex flex-row gap-6">
            <div className="flex flex-col items-center gap-6">
                {making.map((_, i) => i === curIndex ?
                    <Disc key={i} /> : <div className="w-4 h-4 rounded-full bg-white" key={i} />
                )}
            </div>
            <div className="flex-grow">
                <Typography variant="h5">WE MADE AND WE ARE</Typography>
                <Typography variant="h2" className="font-poppins"> MAKING YOUR</Typography>
                <Typography variant="h3" fontWeight={600} key={curIndex} className="typing-animation">{making[curIndex]}</Typography>
                <Typography variant="h6" fontWeight={400} className="font-poppins">
                    Secure the finest web designing and development services with us <br />
                    We offer innovative solutions to expand your business and enhance its reach.
                </Typography>

                <Link
                    to={'about'}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className={`flex flex-row gap-2 items-center w-fit mt-12 ${styles.grn_button}`}
                >
                    About Us
                    <ArrowRight />
                </Link>
            </div>
        </div>
    )
};

export default SectionWrapper(Hero, "home");