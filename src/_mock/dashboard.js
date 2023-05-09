import { FaUser } from "react-icons/fa";
import { GiDualityMask } from "react-icons/gi";
import { MdMessage, MdNote } from "react-icons/md";

export const notifications = [
    {
        title: 'New User signup',
        theme: 'red',
        icon: <FaUser />
    },
    {
        title: 'New crime report',
        theme: 'green',
        icon: <GiDualityMask />
    },
    {
        title: 'New question recieved',
        theme: 'yellow',
        icon: <MdMessage />
    },
    {
        title: 'New petition recieved',
        theme: 'purple',
        icon: <MdNote />
    },
    {
        title: 'New question recieved',
        theme: 'yellow',
        icon: <MdMessage />
    },
]