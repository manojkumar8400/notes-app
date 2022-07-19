import React from "react";
import { v4 as uuid } from "uuid";
import "./RichTextEditor.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { useNoteContext } from "../../context/notesContext";
import { FilterBar, Navigation, SideBar } from "../../components/index";

const formats = ["bold", "italic", "underline", "strike", "image", "list", "link", "clean", "video"];
const modules = {
    toolbar: [
        ["bold", "italic", "underline", "strike"],
        [],
        [{ list: "ordered" }, { list: "bullet" }],
        [],
        ["image", "video", "link"],
        ["clean"],
    ],
};

const getCurrentDate = (separator = '/') => {

    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    let hr = newDate.getHours();
    let minute = newDate.getMinutes();
    let second = newDate.getSeconds();

    return (`${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date} ${hr}:${minute}:${second}`)
}

export const TextEditor = () => {

    const { note: { saveNote }, dispatchNote, filter: { byPriority, Priority, bySort }, setFilter } = useNoteContext();
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [label, setLabel] = useState("");
    const [date, setDate] = useState(0);
    const [bgColor, setBgColor] = useState("");
    const [priority, setPriority] = useState("");
    const [colorBtn, setColorBtn] = useState(true);
    const [priorityBtn, setPriorityBtn] = useState(true);

    const data = { Title: title, Value: value, Label: label, id: uuid(), Date: getCurrentDate(), priority: priority, bgColor: bgColor, date: date }

    const clickHandler = () => {
        dispatchNote({ type: "SAVE", payload: data });
        setDate(prev => prev + 1)
        setValue("");
        setTitle("");
        setLabel("");
        setBgColor("");
    }

    const editContent = (content) => {
        setValue(content.Value);
        setTitle(content.Title);
        setLabel(content.Label);
        setBgColor(content.bgColor);
        setPriority(content.priority);
        dispatchNote({ type: "DELETE", payload: content });
    }

    const FilterContent = () => {
        let sortData = saveNote;

        if (byPriority === "LOW") {
            sortData = sortData.filter((i) => i.priority === "LOW")
        }
        if (byPriority === "MEDIUM") {
            sortData = sortData.filter((i) => i.priority === "MEDIUM")
        }
        if (byPriority === "HIGH") {
            sortData = sortData.filter((i) => i.priority === "HIGH")
        }
        if (bySort === "LATEST") {
            sortData = sortData.sort((a, b) => a.date, b.date)
        }
        if (bySort === "OLDEST") {
            sortData = sortData.sort((a, b) => b.date, a.date)
        }
        return sortData;
    }

    return (
        <div>
            < Navigation />
            <div className="main-container grid">
                <section className="sideBar">
                    < SideBar />
                </section>
                <section className="container flex-columnn">
                    <div style={{ backgroundColor: bgColor }} className="editor-section flex-column align-item m-auto">
                        <input onChange={(event) => { setTitle(event.target.value) }} className="title" type="text" value={title} placeholder="Title..." />
                        <section className="quill m-auto">
                            <ReactQuill
                                modules={modules}
                                formats={formats}
                                value={value}
                                placeholder="Take a note..."
                                onChange={setValue}
                                className="quill-editer"
                            />
                        </section>
                        <input onChange={(event) => { setLabel(event.target.value) }} className="label" type="text" value={label} placeholder="Label..." />
                        <hr />
                        <section className="editor-bottom-btn flex jstfy-ctnt-spc-between">
                            <span className="relative">
                                <button onClick={() => setColorBtn(colorBtn ? false : true)} className="editor-style-btn"><span class="material-icons f-size-20">color_lens</span></button>
                                <section className={`color-btn ${colorBtn ? "d-none" : "d-inherit"}`} id="color-section">
                                    <button onClick={() => setBgColor("red")} className="color-lens"></button>
                                    <button onClick={() => setBgColor("green")} className="color-lens"></button>
                                    <button onClick={() => setBgColor("yellow")} className="color-lens"></button>
                                    <button onClick={() => setBgColor("aqua")} className="color-lens"></button>
                                    <button onClick={() => setBgColor("white")} className="color-lens"></button>
                                </section>
                                <button onClick={() => setPriorityBtn(priorityBtn ? false : true)} className="editor-style-btn"><span class="material-icons f-size-20">bar_chart</span></button>
                                <section className={`priority-btn ${priorityBtn ? "d-none" : "d-inherit"}`} id="priority-section">
                                    <label>
                                        <input onClick={(e) => setPriority(e.target.value)} type="radio" name="priority" value="LOW" />Low
                                    </label>
                                    <label>
                                        <input onClick={(e) => setPriority(e.target.value)} type="radio" name="priority" value="MEDIUM" />Medium
                                    </label>
                                    <label>
                                        <input onClick={(e) => setPriority(e.target.value)} type="radio" name="priority" value="HIGH" />High
                                    </label>
                                </section>
                            </span>
                            <span>
                                <button className="add-note-btn" onClick={clickHandler}
                                    disabled={title === "" && value === ""}>
                                    Add Note
                                </button>
                            </span>
                        </section>
                    </div>

                    {/*       Card    */}

                    <div className="card flex jstfy-ctnt-center wrap gap-1">
                        {FilterContent().map(content => {
                            return (
                                <section style={{ backgroundColor: content.bgColor }} className='label-section relative' key={content.id}>
                                    <section className="data-render flex-column jstfy-ctnt-spc-between">
                                        <div className="relative">
                                            {
                                                content.Title.length > 0
                                                    ? <p>{content.Title}</p>
                                                    : <p>Title</p>
                                            }
                                            <p className="priority-style absolute">{content.priority}</p>
                                            <hr />
                                            <p dangerouslySetInnerHTML={{ __html: content.Value }}></p>
                                        </div>
                                        <div>
                                            < hr />
                                            {
                                                content.Label.length > 0
                                                    ? <p>{content.Label}</p>
                                                    : <p>Label</p>
                                            }
                                            <p className="date">{content.Date}</p>
                                        </div>
                                    </section>
                                    <section className='bottom-icon flex absolute'>

                                        <button onClick={() => editContent(content)}>
                                            <span class="material-icons f-size-20">edit_note</span>
                                        </button>

                                        <button onClick={() => {
                                            dispatchNote({ type: "Archieve", payload: content })
                                            dispatchNote({ type: "Remove_Data", payload: content })
                                            dispatchNote({ type: "Remove_From_Label", payload: content })
                                        }}>
                                            <span class="material-icons f-size-20">archive</span>
                                        </button>
                                        <button onClick={() => {
                                            dispatchNote({ type: "Trash", payload: content })
                                            dispatchNote({ type: "Remove_Data", payload: content })
                                            dispatchNote({ type: "Remove_From_Label", payload: content })
                                        }}>
                                            <span class="material-icons f-size-20">delete_forever</span>
                                        </button>
                                    </section>
                                </section>
                            )
                        })}
                    </div>
                </section>
                < FilterBar />
            </div >
        </div >
    )
};