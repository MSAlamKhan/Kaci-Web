import { BsGlobeAmericas } from "react-icons/bs";
import {
  FaAmbulance,
  FaBuilding,
  FaGlobeAmericas,
  FaUser,
} from "react-icons/fa";
import { GiDualityMask, GiPoliceBadge } from "react-icons/gi";
import {
  MdFeedback,
  MdMarkunreadMailbox,
  MdMessage,
  MdNote,
  MdSos,
} from "react-icons/md";
import { theme } from "../constants/data";
import { AiFillFolder, AiOutlineSearch } from "react-icons/ai";
import { RiUserVoiceFill } from "react-icons/ri";

export const notifications = [
  {
    title: "New User signup",
    theme: "red",
    icon: <FaUser />,
  },
  {
    title: "New crime report",
    theme: "green",
    icon: <GiDualityMask />,
  },
  {
    title: "New question recieved",
    theme: "yellow",
    icon: <MdMessage />,
  },
  {
    title: "New petition recieved",
    theme: "purple",
    icon: <MdNote />,
  },
  {
    title: "New question recieved",
    theme: "yellow",
    icon: <MdMessage />,
  },
];

export const dashboardCards = [
  {
    title: "Total Countries",
    icon: <BsGlobeAmericas />,
    colors: theme.red,
    numbers: "22,175,812",
  },
  {
    title: "Total Agencies",
    icon: <FaBuilding />,
    colors: theme.rose,
    numbers: "22,175,812",
  },
  {
    title: "Verifications",
    icon: <AiOutlineSearch />,
    colors: theme.purple,
    numbers: "21,812",
  },
  {
    title: "Ambulances",
    icon: <FaAmbulance />,
    colors: theme.blue,
    numbers: "22,175,812",
  },
  {
    title: "Emergencies",
    icon: (
      <div className="p-0.5 text-white bg-red-600 rounded-full text-[8px]">
        <MdSos />
      </div>
    ),
    colors: theme.red,
    numbers: "22,175,812",
  },
  {
    title: "Petitions",
    icon: <MdNote className="!text-purple-400" />,
    colors: theme.purple,
    numbers: "22,175,812",
  },
  {
    title: "Complaints",
    icon: <AiFillFolder />,
    colors: theme.pink,
    numbers: "22,175,812",
  },
  {
    title: "iReport",
    icon: <RiUserVoiceFill />,
    colors: theme.indigo,
    numbers: "22,175,812",
  },
  {
    title: "Climate",
    icon: <FaGlobeAmericas />,
    colors: theme.green,
    numbers: "22,175,812",
  },
  {
    title: "Travel Safe",
    icon: <GiPoliceBadge />,
    colors: theme.violet,
    numbers: "22,175,812",
  },
  {
    title: "Suggestions",
    icon: <MdMarkunreadMailbox />,
    colors: theme.lime,
    numbers: "22,175,812",
  },
  {
    title: "Feedbacks",
    icon: <MdFeedback />,
    colors: theme.cyan,
    numbers: "22,175,812",
  },
];

export const emergencyRequests = [
  {
    name: "Aisha John",
    photoUrl: "",
    KSN: 1000067123,
    email: "aishajohn@gmail.com",
    details: [
      {
        title: "Reference Code",
        value: "KHEY000000052",
      },
      {
        title: "Target Agency",
        value: "Nigerian Police",
      },
      {
        title: "Current Location",
        value: "AbujaNo 23, Wuse street, Abuja.",
      },
      {
        title: "Comment",
        value:
          "I am currently stranded with about five other people in the bus.",
      },
    ],
  },
  {
    name: "Aisha John",
    photoUrl: "",
    KSN: 1000067123,
    email: "aishajohn@gmail.com",
    details: [
      {
        title: "Reference Code",
        value: "KHEY000000052",
      },
      {
        title: "Target Agency",
        value: "Nigerian Police",
      },
      {
        title: "Current Location",
        value: "AbujaNo 23, Wuse street, Abuja.",
      },
      {
        title: "Comment",
        value:
          "I am currently stranded with about five other people in the bus.",
      },
    ],
  },
  {
    name: "Aisha John",
    photoUrl: "",
    KSN: 1000067123,
    email: "aishajohn@gmail.com",
    details: [
      {
        title: "Reference Code",
        value: "KHEY000000052",
      },
      {
        title: "Target Agency",
        value: "Nigerian Police",
      },
      {
        title: "Current Location",
        value: "AbujaNo 23, Wuse street, Abuja.",
      },
      {
        title: "Comment",
        value:
          "I am currently stranded with about five other people in the bus.",
      },
    ],
  },
  {
    name: "Aisha John",
    photoUrl: "",
    KSN: 1000067123,
    email: "aishajohn@gmail.com",
    details: [
      {
        title: "Reference Code",
        value: "KHEY000000052",
      },
      {
        title: "Target Agency",
        value: "Nigerian Police",
      },
      {
        title: "Current Location",
        value: "AbujaNo 23, Wuse street, Abuja.",
      },
      {
        title: "Comment",
        value:
          "I am currently stranded with about five other people in the bus.",
      },
    ],
  },
  {
    name: "Aisha John",
    photoUrl: "",
    KSN: 1000067123,
    email: "aishajohn@gmail.com",
    details: [
      {
        title: "Reference Code",
        value: "KHEY000000052",
      },
      {
        title: "Target Agency",
        value: "Nigerian Police",
      },
      {
        title: "Current Location",
        value: "AbujaNo 23, Wuse street, Abuja.",
      },
      {
        title: "Comment",
        value:
          "I am currently stranded with about five other people in the bus.",
      },
    ],
  },
  {
    name: "Aisha John",
    photoUrl: "",
    KSN: 1000067123,
    email: "aishajohn@gmail.com",
    details: [
      {
        title: "Reference Code",
        value: "KHEY000000052",
      },
      {
        title: "Target Agency",
        value: "Nigerian Police",
      },
      {
        title: "Current Location",
        value: "AbujaNo 23, Wuse street, Abuja.",
      },
      {
        title: "Comment",
        value:
          "I am currently stranded with about five other people in the bus.",
      },
    ],
  },
  {
    name: "Aisha John",
    photoUrl: "",
    KSN: 1000067123,
    email: "aishajohn@gmail.com",
    details: [
      {
        title: "Reference Code",
        value: "KHEY000000052",
      },
      {
        title: "Target Agency",
        value: "Nigerian Police",
      },
      {
        title: "Current Location",
        value: "AbujaNo 23, Wuse street, Abuja.",
      },
      {
        title: "Comment",
        value:
          "I am currently stranded with about five other people in the bus.",
      },
    ],
  },
];

export const ambulanceRequests = [
  {
    name: "Aisha John",
    photoUrl: "",
    KSN: 1000067123,
    email: "aishajohn@gmail.com",
    details: [
      {
        title: "Reference Code",
        value: "KHTE0000000746",
      },
      {
        title: "Current Location",
        value: "Abuja - No 23, Wuse street, Abuja.",
      },
      {
        title: "Ambulance Service",
        value: "Federal Goverment (Free)",
      },
      {
        title: "People Involved",
        value: "one",
      },
    ],
  },
  {
    name: "Aisha John",
    photoUrl: "",
    KSN: 1000067123,
    email: "aishajohn@gmail.com",
    details: [
      {
        title: "Reference Code",
        value: "KHTE0000000746",
      },
      {
        title: "Current Location",
        value: "Abuja - No 23, Wuse street, Abuja.",
      },
      {
        title: "Ambulance Service",
        value: "Federal Goverment (Free)",
      },
      {
        title: "People Involved",
        value: "one",
      },
    ],
  },
  {
    name: "Aisha John",
    photoUrl: "",
    KSN: 1000067123,
    email: "aishajohn@gmail.com",
    details: [
      {
        title: "Reference Code",
        value: "KHTE0000000746",
      },
      {
        title: "Current Location",
        value: "Abuja - No 23, Wuse street, Abuja.",
      },
      {
        title: "Ambulance Service",
        value: "Federal Goverment (Free)",
      },
      {
        title: "People Involved",
        value: "one",
      },
    ],
  },
  {
    name: "Aisha John",
    photoUrl: "",
    KSN: 1000067123,
    email: "aishajohn@gmail.com",
    details: [
      {
        title: "Reference Code",
        value: "KHTE0000000746",
      },
      {
        title: "Current Location",
        value: "Abuja - No 23, Wuse street, Abuja.",
      },
      {
        title: "Ambulance Service",
        value: "Federal Goverment (Free)",
      },
      {
        title: "People Involved",
        value: "one",
      },
    ],
  },
  {
    name: "Aisha John",
    photoUrl: "",
    KSN: 1000067123,
    email: "aishajohn@gmail.com",
    details: [
      {
        title: "Reference Code",
        value: "KHTE0000000746",
      },
      {
        title: "Current Location",
        value: "Abuja - No 23, Wuse street, Abuja.",
      },
      {
        title: "Ambulance Service",
        value: "Federal Goverment (Free)",
      },
      {
        title: "People Involved",
        value: "one",
      },
    ],
  },
  {
    name: "Aisha John",
    photoUrl: "",
    KSN: 1000067123,
    email: "aishajohn@gmail.com",
    details: [
      {
        title: "Reference Code",
        value: "KHTE0000000746",
      },
      {
        title: "Current Location",
        value: "Abuja - No 23, Wuse street, Abuja.",
      },
      {
        title: "Ambulance Service",
        value: "Federal Goverment (Free)",
      },
      {
        title: "People Involved",
        value: "one",
      },
    ],
  },
  {
    name: "Aisha John",
    photoUrl: "",
    KSN: 1000067123,
    email: "aishajohn@gmail.com",
    details: [
      {
        title: "Reference Code",
        value: "KHTE0000000746",
      },
      {
        title: "Current Location",
        value: "Abuja - No 23, Wuse street, Abuja.",
      },
      {
        title: "Ambulance Service",
        value: "Federal Goverment (Free)",
      },
      {
        title: "People Involved",
        value: "one",
      },
    ],
  },
];
