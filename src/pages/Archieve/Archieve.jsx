import React from 'react'
import { Navigation, SideBar } from '../../components/index';
import { useNoteContext } from "../../context/notesContext";
import { v4 as uuid } from "uuid";

export const Archieve = () => {

  const { note: { saveArch }, dispatchNote } = useNoteContext();

  return (
    <div>
      < Navigation />
      <div className='flex'>
        <SideBar />
        <div className="card flex wrap gap-1">
          {saveArch.map(content => {
            return (
              <section style={{ backgroundColor: content.bgColor }} className='label-section relative' key={uuid()}>
                <section className="data-render flex-column jstfy-ctnt-spc-between">
                  <div>
                    <p>Title: {content.Title}</p>
                    <p className="priority-style absolute">{content.priority}</p>
                    <hr />
                    <p>{content.Value}</p>
                  </div>
                  <div>
                    < hr />
                    <p>Label: {content.Label}</p>
                  </div>
                </section>
                <section className='bottom-icon flex absolute'>
                  <button onClick={() => {
                    dispatchNote({ type: "SAVE", payload: content })
                    dispatchNote({ type: "Remove_From_Archieve", payload: content })
                  }}>
                    <i className="fa fa-archive"></i>
                  </button>
                  <button onClick={() => {
                    dispatchNote({ type: "Trash", payload: content })
                    dispatchNote({ type: "Remove_From_Archieve", payload: content })
                  }}>
                    <i className="fa fa-trash-o"></i>
                  </button>
                </section>
              </section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
