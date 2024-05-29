"use client";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import Link from "next/link";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ArticleIcon from "@mui/icons-material/Article";
import CategoryIcon from "@mui/icons-material/Category";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ReceiptIcon from "@mui/icons-material/Receipt";


import { useSession } from "next-auth/react";
const SideBar = () => {
  const { data: session } = useSession();
  return (
    <Sidebar>
      <Menu
        menuItemStyles={{
          button: ({ level, active, disabled }) => {
            // only apply styles on first level elements of the tree
            if (level === 0)
              return {
                color: disabled ? "#b4c2c0" : "#718280",
                backgroundColor: active ? "#4f5d73" : "#071121",
              };
          },
        }}
      >
        <MenuItem>
          <div className="card" style={{ backgroundColor: "#FF00FF" }}>
            <div className="card-body">
              <AdminPanelSettingsIcon /> Administrateur
            </div>
          </div>
        </MenuItem>
        <MenuItem>
          <div className="card" style={{ backgroundColor: "#44ebe2" }}>
            <div className="card-body">
              {session?.user?.image ? (
                <div>
                  <img
                    src={session.user.image}
                    alt={session.user.name}
                    className="inline-block rounded-full"
                    width="30"
                    height="30"
                  />
                  {session.user.name}
                </div>
              ) : null}
            </div>
          </div>
        </MenuItem>
        <MenuItem component={<Link href="/admin/dashboard" />}>
          {" "}
          <DashboardIcon />
          Dashboard{" "}
        </MenuItem>
        <MenuItem component={<Link href="/admin/livres" />}>
          {" "}
          <ArticleIcon />
          Livres{" "}
        </MenuItem>
        <MenuItem component={<Link href="auteurs" />}>
          {" "}
          <CategoryIcon />
          Auteurs{" "}
        </MenuItem>
        <MenuItem component={<Link href="editeurs" />}>
          <ContentCopyIcon /> Editeurs
        </MenuItem>
        <MenuItem component={<Link href="specialites" />}>
          {" "}
          <ReceiptIcon /> Spécialités
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};
export default SideBar;
