import { Avatar } from "@material-ui/core";
import React from "react";
import "./Chats.css";
import StopRoundedIcon from "@material-ui/icons/StopRounded";
import ReactTimeago from "react-timeago";
import { useDispatch } from "react-redux";
import { selectImage } from "./features/appSlice";
import { db } from "./firebase";
import { useHistory } from "react-router";

const Chats = ({ id, profilePic, username, timestamp, imageUrl, read }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const open = () => {
    if (!read) {
      dispatch(selectImage(imageUrl));
      db.collection("posts").doc(id).set(
        {
          read: true,
        },
        { merge: true }
      );
      history.push("/chat/view");
    }
  };

  return (
    <div onClick={open} className="chats">
      <Avatar src={profilePic} className="chats_avatar" />
      <div className="chat_info">
        <h4>{username}</h4>
        <p>
          {!read && "Tap to View - "}{" "}
          <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} />
        </p>
      </div>
      {!read && <StopRoundedIcon className="chats_redIcon" />}
    </div>
  );
};

export default Chats;
