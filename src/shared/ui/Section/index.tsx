import { FC } from "react";
import { IProps } from "./types";

const Section: FC<IProps> = ({ children }) => {
    return (
        <section className="px-4 py-2 bg-white w-full">
            { children }
        </section>
    )
}

export default Section;