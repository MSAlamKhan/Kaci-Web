import {
  RiBuilding4Fill,
  RiCoupon2Fill,
  RiDashboardFill,
  RiNotificationBadgeFill,
  RiWhatsappFill,
} from "react-icons/ri";
import {
  IoMdNotifications,
  IoIosLock,
  IoMdMap,
  IoMdSettings,
  IoMdGlobe,
} from "react-icons/io";
import { FaAmbulance, FaUser, FaUsers } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import {
  MdFeedback,
  MdMarkunreadMailbox,
  MdNote,
  MdRecordVoiceOver,
  MdSos,
} from "react-icons/md";
import { TbGridDots, TbNotebook } from "react-icons/tb";
import { GiPoliceBadge } from "react-icons/gi";
import {
  AiFillFolder,
  AiFillInfoCircle,
  AiFillCheckCircle,
} from "react-icons/ai";

export const mainNavlinks = [
  {
    title: "Dashboard",
    icon: <RiDashboardFill />,
    chevron: true,
    type: "navlink",
    path: "/dashboard",
  },
  {
    title: "Notifications",
    icon: <IoMdNotifications />,
    chevron: true,
    type: "navlink",
    path: "/notifications",
  },
  {
    title: "Notices",
    icon: <RiNotificationBadgeFill />,
    chevron: true,
    type: "dropdown",
    list: [
      { title: "Messages", path: "/notices/messages" },
      { title: "Alerts", path: "/notices/alerts" },
    ],
  },
  {
    title: "Access",
    icon: <IoIosLock />,
    chevron: true,
    type: "dropdown",
    list: [
      { title: "Privileges", path: `/access/privileges` },
      { title: "Roles", path: `/access/roles` },
      { title: "Sub-Admin", path: `/access/sub-admin` },
    ],
  },
  {
    title: "Users Management",
    icon: <FaUser />,
    chevron: false,
    type: "navlink",
    path: "/users-management",
  },
  {
    title: "Promotion Management",
    icon: <CgNotes />,
    chevron: true,
    type: "dropdown",
    list: [
      { title: "Android", path: `/promotion-management/android` },
      { title: "iOS", path: `/promotion-management/ios` },
    ],
  },
  {
    title: "Verification Management",
    icon: <AiFillCheckCircle />,
    chevron: true,
    type: "navlink",
    path: "/verification-management",
  },
  {
    title: "Ambulance Management",
    icon: <FaAmbulance />,
    chevron: true,
    type: "navlink",
    path: "/ambulance-management",
  },
  {
    title: "Emergency Management",
    icon: (
      <div className="p-0.5 bg-white text-black text-[8px] rounded-full">
        <MdSos />
      </div>
    ),
    chevron: true,
    type: "navlink",
    path: "/emergency-management",
  },
  {
    title: "Petition Management",
    icon: <MdNote />,
    chevron: true,
    type: "navlink",
    path: "/petition-management",
  },
  {
    title: "Complaint Management",
    icon: <AiFillFolder />,
    chevron: true,
    type: "navlink",
    path: "/complaint-management",
  },
  {
    title: "iReport Management",
    icon: <MdRecordVoiceOver />,
    chevron: true,
    type: "navlink",
    path: "/ireport-management",
  },
  {
    title: "Travel Safe Management",
    icon: <GiPoliceBadge />,
    chevron: true,
    type: "navlink",
    path: "/travel-safe-management",
  },
  {
    title: "Info Bank Management",
    icon: <AiFillInfoCircle />,
    chevron: true,
    type: "navlink",
    path: "/info-bank-management",
  },
  {
    title: "Top Stories Management",
    icon: <TbNotebook />,
    chevron: true,
    type: "navlink",
    path: "/top-stories-management",
  },
  {
    title: "Suggestion Management",
    icon: <MdMarkunreadMailbox />,
    chevron: true,
    type: "navlink",
    path: "/suggestion-management",
  },
  {
    title: "Feedback Management",
    icon: <MdFeedback />,
    chevron: true,
    type: "navlink",
    path: "/feedback-management",
  },
  {
    title: "Climate Management",
    icon: <IoMdGlobe />,
    chevron: true,
    type: "navlink",
    path: "/climate-management",
  },
  {
    title: "Kaci Code Management",
    icon: <RiCoupon2Fill />,
    chevron: true,
    type: "navlink",
    path: "/kaci-code-management",
  },
];

// More Section links
export const moreNavLinks = [
  {
    title: "Areas",
    icon: <IoMdMap />,
    chevron: true,
    type: "dropdown",
    path: "/more/areas",
    list: [
      { title: "Country", path: `/more/areas/country` },
      { title: "Location", path: `/more/areas/location` },
    ],
  },
  {
    title: "Agencies",
    chevron: true,
    type: "navlink",
    icon: <RiBuilding4Fill />,
    path: "/more/agencies",
  },
  {
    title: "Help Book",
    icon: <FaUsers />,
    chevron: true,
    type: "navlink",
    path: "/more/help-book",
  },
  {
    title: "Complaint Subject",
    icon: <AiFillFolder />,
    chevron: true,
    type: "navlink",
    path: "/more/complaint-subject",
  },
  {
    title: "Ambulance Service",
    icon: <FaAmbulance />,
    chevron: true,
    type: "navlink",
    path: "/more/ambulance-service",
  },
  {
    title: "Keywords",
    icon: <TbGridDots />,
    chevron: true,
    type: "navlink",
    path: "/more/keywords",
  },
  {
    title: "Whatsapp Chat Logs",
    icon: <RiWhatsappFill />,
    chevron: true,
    type: "navlink",
    path: "/more/whatsapp-chat-logs",
  },
  {
    title: "Settings",
    icon: <IoMdSettings />,
    chevron: true,
    type: "navlink",
    path: "/more/settings",
  },
];

// Languages
export const countries = [
  { title: "Nigeria", flag: null },
  { title: "Argentina", flag: null },
  { title: "Australia", flag: null },
  { title: "Aruba", flag: null },
  { title: "Bosnia and Herzegovina", flag: null },
  { title: "Bangladesh", flag: null },
  { title: "Bahrain", flag: null },
  { title: "Bermuda", flag: null },
  { title: "Benin", flag: null },
  { title: "Bolivia, Plurinational...", flag: null },
  { title: "Brazil", flag: null },
  { title: "Bahamas", flag: null },
];
