import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import { useNoteContext } from "../../context/notesContext";

const SideBar = () => {

    const { note, dispatchNote } = useNoteContext();
    return (
        <div className="sideBar-container">
            <Link to="/text-editor">
                <div className="side-icon notes">
                    <span><i className="fa fa-sticky-note-o"></i></span>
                    <span>Notes</span>
                </div>
            </Link>
            <Link to="/label">
                <div className="side-icon">
                    <i className="sidebar-logo fa fa-bookmark-o"></i>
                    <span>Label</span>
                </div>
            </Link>
            <Link to="/archieve">
                <div className="side-icon">
                    <img className="sidebar-logo" src="./assests/archieve-2.png" alt="archieve logo" />
                    <span>Archieve</span>
                </div>
            </Link>
            <Link to="/trash">
                <div className="side-icon">
                    <img className="sidebar-logo" src="./assests/trash.svg" alt="trash logo" />
                    <span>Trash</span>
                </div>
            </Link>
        </div>
    )
}

export { SideBar };