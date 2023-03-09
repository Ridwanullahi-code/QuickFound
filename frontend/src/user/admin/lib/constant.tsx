import {
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

import { FiUserPlus } from 'react-icons/fi'
import {
  AiOutlineSecurityScan,
  AiOutlineSetting,
  AiOutlineUser,
} from "react-icons/ai";

import { BiDollarCircle } from 'react-icons/bi'

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "",
    icon: <AiOutlineUser />,
  },

  {
    key: "Security",
    label: "Security",
    path: "security",
    icon: <AiOutlineSecurityScan />,
  },

  {
    key: "withdraw",
    label: "Withdraw",
    path: "withdraw",
    icon: <BiDollarCircle />,
  },
  {
    key: "deposit",
    label: "Deposit",
    path: "deposit",
    icon: <BiDollarCircle />,
  },
  {
    key: "Referral",
    label: "Referral",
    path: "referral",
    icon: <FiUserPlus />,
  },
  {
    key: "Setting",
    label: "Setting",
    path: "setting",
    icon: <AiOutlineSetting />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]