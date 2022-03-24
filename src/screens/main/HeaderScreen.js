import React from "react";
import { ChevronLeft, ChevronRight, Search, Bell } from "react-feather";
import { Link } from "react-router-dom";
import profileImage from "../../assets/zu.jpeg";
import { Tooltip, IconButton } from "@mui/material";

const HeaderScreen = () => {
  return (
    <div style={{ padding: 10, display: "flex", alignItems: "center" }}>
      <div style={{}} className="leftHeader">
        <ChevronLeft />
        <ChevronRight />
      </div>


      <div style={{}} className="rightHeader">
      <Tooltip title="Search">
          <IconButton>
          <Search />
          </IconButton>
      </Tooltip>

      <Tooltip title="Notifications">
          <IconButton>
          <Bell style={{ marginLeft: 5 }} />
          </IconButton>
      </Tooltip>
      </div>

      <div style={{ display: "flex", marginTop: 5, marginLeft: 50 }}>
        <div style={{ width: 60, height: 60, borderRadius: 30 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={profileImage}
              style={{ width: 60, height: 60, borderRadius: 30 }}
              alt=""
            />
          </div>
        </div>
        <div style={{ marginLeft: 18 }}>
          <div style={{ fontFamily: "Montserrat, sans-serif" }}>
            Lucinda McCarthy
          </div>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <div
              style={{
                fontSize: 15,
                cursor: "pointer",
                color: "#098193",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Manage Account
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderScreen;
