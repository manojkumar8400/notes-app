import React, { useState } from "react";
import "./Notes.css";
import { SideBar } from "../../components/index";
import { Navigation } from "../../components/index";
import { useNoteContext } from "../../context/context";

const Notes = () => {

    const { note: { saveNote }, dispatchNote, txtStyle, dispatchTxtStyle } = useNoteContext();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const { byBold, byItalic, byStrike } = txtStyle;
    const data = { Title: title, Content: content }

    return (
        <>
            <Navigation />
            <div className="main-container grid">
                <div>
                    <SideBar />
                </div>
                <div className="grid jstfy-ctnt-center">
                    <h2>Create New Note</h2>
                    <div className="s-container ">
                        <input onChange={(e) => { setTitle(e.target.value) }} className="title" type="text" placeholder="Title" />
                        <section className="style-btn flex">
                            <button className="txt-style-btn" onClick={() => dispatchTxtStyle({ type: "bold", payload: !byBold })}>
                                <img className="txt-logo-img" src="https://cdn-icons-png.flaticon.com/128/88/88393.png" alt="nhi ayi" />
                            </button>
                            <button className="txt-style-btn" onClick={() => dispatchTxtStyle({ type: "italic", payload: !byItalic })}>
                                <img className="txt-logo-img" src="https://cdn-icons-png.flaticon.com/128/5099/5099214.png" alt="" />
                            </button>
                            <button className="txt-style-btn" onClick={() => dispatchTxtStyle({ type: "strike", payload: !byStrike })}>
                                <img className="txt-logo-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9Xkin5zZMUKfIhPVv77p1SQ61zxQ1Mz2pQ&usqp=CAU" alt="" />
                            </button>
                        </section>
                        <section>
                            <textarea style={{ fontWeight: byBold ? "bold" : "inherit", fontStyle: byItalic ? "italic" : "inherit", textDecorationLine: byStrike ? "line-through" : "inherit" }} onChange={(e) => { setContent(e.target.value) }} className="content" name="text" cols="30" rows="10" placeholder=""></textarea>
                        </section>
                    </div>
                    <section className="btn-section flex">

                        <img className="plus-icon" src="./assests/plus-icon.png" alt="" />
                        <button className="create-note-btn" onClick={() => {dispatchNote({type: "AddNote", payload: data})}}>
                            Create Notes
                        </button>
                    </section>
                </div>
            </div>
        </>
    );
};
export { Notes };
