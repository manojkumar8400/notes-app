import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";
import { useNoteContext } from "../../context/notesContext";

const SideBar = () => {

    const { note, dispatchNote } = useNoteContext();
    return (
        <ul className="sideBar-container">
            <NavLink to="/text-editor" className={({ isActive }) => (isActive ? "active" : undefined)}>
                <li className="side-icon notes">
                    <span class="material-icons f-size-20">text_snippet</span>
                    <span>Notes</span>
                </li>
            </NavLink>
            <NavLink to="/label" className={({ isActive }) => (isActive ? "active" : undefined)}>
                <li className="side-icon">
                    <span class="material-icons f-size-20">bookmark</span>
                    <span>Label</span>
                </li>
            </NavLink>
            <NavLink to="/archieve" className={({ isActive }) => (isActive ? "active" : undefined)}>
                <li className="side-icon">
                    <span class="material-icons f-size-20">archive</span>
                    <span>Archieve</span>
                </li>
            </NavLink>
            <NavLink to="/trash" className={({ isActive }) => (isActive ? "active" : undefined)}>
                <li className="side-icon">
                    <span class="material-icons f-size-20">delete_forever</span>
                    <span>Trash</span>
                </li>
            </NavLink>
        </ul>
    )
}

export { SideBar };