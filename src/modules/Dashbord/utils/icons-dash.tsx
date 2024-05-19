import { CiLogout } from "react-icons/ci";
import {
  FaArrowLeft,
  FaBars,
  FaEdit,
  FaPlusSquare,
  FaUserEdit,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { GrFormView, GrProjects } from "react-icons/gr";
import { MdDeleteForever, MdOutlineDelete, MdViewAgenda } from "react-icons/md";

export const ICONS = {
  user_edit: <FaUserEdit />,
  projects: <GrProjects />,
  messages: <FaMessage />,
  bars: <FaBars />,
  logout: <CiLogout />,
  view_M: <GrFormView />,
  delete_M: <MdOutlineDelete />,

  delete: <MdDeleteForever />,
  plus: <FaPlusSquare />,
  edit: <FaEdit />,
  view: <MdViewAgenda />,
  arrow_left: <FaArrowLeft />,
};
