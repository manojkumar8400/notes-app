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

    const { note: { saveNote }, dispatchNote, filter:{byPriority, Priority, bySort}, setFilter } = useNoteContext();
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [label, setLabel] = useState("");
    const [ date, setDate ] = useState(0);
    const [bgColor, setBgColor] = useState("");
    const [priority, setPriority] = useState("");
    const [colorBtn, setColorBtn] = useState(true);
    const [priorityBtn, setPriorityBtn] = useState(true);

    const data = { Title: title, Value: value, Label: label, id: uuid(), Date: getCurrentDate(), priority: priority, bgColor: bgColor, date: date }

    const clickHandler = () => {
        dispatchNote({ type: "SAVE", payload: data });
        setDate(prev=>prev+1)
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
            sortData = sortData.filter((i)=>i.priority === "LOW")
        }
        if (byPriority === "MEDIUM") {
            sortData = sortData.filter((i)=>i.priority === "MEDIUM")
        }
        if (byPriority === "HIGH") {
            sortData = sortData.filter((i)=>i.priority === "HIGH")
        }
        if (bySort === "LATEST") {
            sortData = sortData.sort((a,b)=>a.date,b.date)
        }
        if ( bySort === "OLDEST") {
            sortData = sortData.sort((a,b)=>b.date,a.date)
        }
        return sortData;
    }

    return (
        <div>
            < Navigation />
            <div className="main-container grid">
                < SideBar />
                <div className="container flex-columnn">
                    <div style={{ backgroundColor: bgColor }} className="editor-section flex-column align-item m-auto">
                        <input onChange={(event) => { setTitle(event.target.value) }} className="title" type="text" value={title} placeholder="Title..." />
                        <div className="quill m-auto">
                            <ReactQuill
                                modules={modules}
                                formats={formats}
                                value={value}
                                placeholder="Take a note..."
                                onChange={setValue}
                            />
                        </div>
                        <input onChange={(event) => { setLabel(event.target.value) }} className="label" type="text" value={label} placeholder="label" />
                        <hr />
                        <section className="editor-bottom-btn flex jstfy-ctnt-spc-between">
                            <span className="relative">
                                <button onClick={() => setColorBtn(colorBtn ? false : true)} className="editor-style-btn"><img className="bottom-style-icon" src="./assests/color-palette.svg" alt="color logo" /></button>
                                <section className={`color-btn ${colorBtn ? "d-none" : "d-inherit"}`}>
                                    <button onClick={() => setBgColor("red")} className="red-color-btn radious-50 p-8"></button>
                                    <button onClick={() => setBgColor("green")} className="green-color-btn radious-50 p-8"></button>
                                    <button onClick={() => setBgColor("yellow")} className="yellow-color-btn radious-50 p-8"></button>
                                    <button onClick={() => setBgColor("aqua")} className="aqua-color-btn radious-50 p-8"></button>
                                    <button onClick={() => setBgColor("white")} className="white-color-btn radious-50 p-8"></button>
                                </section>
                                <button onClick={() => setPriorityBtn(priorityBtn ? false : true)} className="editor-style-btn"><img className="bottom-style-icon" src="./assests/bar-chart-outline.svg" alt="chart logo" /></button>
                                <section className={`priority-btn ${priorityBtn ? "d-none" : "d-inherit"}`}>
                                    <input onClick={(e) => setPriority(e.target.value)} type="radio" name="priority" value="LOW" />
                                    <label>Low</label>
                                    <input onClick={(e) => setPriority(e.target.value)} type="radio" name="priority" value="MEDIUM" />
                                    <label>Medium</label>
                                    <input onClick={(e) => setPriority(e.target.value)} type="radio" name="priority" value="HIGH" />
                                    <label>High</label>
                                </section>
                            </span>
                            <span>
                                <button className="add-note-btn" onClick={clickHandler} disabled={
                                    title === "" && value === ""
                                }>Add Note</button>
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
                                            <p>Title: {content.Title}</p>
                                            <p className="priority-style absolute">{content.priority}</p>
                                            <hr />
                                            <p dangerouslySetInnerHTML={{ __html: content.Value }}></p>
                                        </div>
                                        <div>
                                            < hr />
                                            <p>Label: {content.Label}</p>
                                            <p className="date">{content.Date}</p>
                                        </div>
                                    </section>
                                    <section className='bottom-icon flex absolute'>


                                        <button onClick={() => editContent(content)}>
                                            <i className="fa fa-edit"></i>
                                        </button>


                                        <button onClick={() => {
                                            dispatchNote({ type: "Archieve", payload: content })
                                            dispatchNote({ type: "Remove_Data", payload: content })
                                            dispatchNote({ type: "Remove_From_Label", payload: content })
                                        }}>
                                            <i className="fa fa-archive"></i>
                                        </button>
                                        <button onClick={() => {
                                            dispatchNote({ type: "Trash", payload: content })
                                            dispatchNote({ type: "Remove_Data", payload: content })
                                            dispatchNote({ type: "Remove_From_Label", payload: content })
                                        }}>
                                            <i className="fa fa-trash-o"></i>
                                        </button>
                                    </section>
                                </section>
                            )
                        })}
                    </div>
                </div>
                < FilterBar />
            </div>
        </div>
    );
} 