import React from 'react'
import { Navigation, SideBar } from '../../components/index';
import { useNoteContext } from "../../context/notesContext";
import { v4 as uuid } from "uuid";

export const Archieve = () => {

  const { note: { saveArch }, dispatchNote } = useNoteContext();

  return (
    <div>
      < Navigation />
      <div className='label-container'>
        <section className="sideBar">
          < SideBar />
        </section>
        <section className="card flex jstfy-ctnt-center wrap gap-1">
          {
            saveArch.length > 0 ?
              saveArch.map(content => {
                return (
                  <section style={{ backgroundColor: content.bgColor }} className='label-section relative' key={uuid()}>
                    <section className="data-render flex-column jstfy-ctnt-spc-between">
                      <div className='relative'>
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
                        <span class="material-icons f-size-24">move_to_inbox</span>
                      </button>
                      <button onClick={() => {
                        dispatchNote({ type: "Trash", payload: content })
                        dispatchNote({ type: "Remove_From_Archieve", payload: content })
                      }}>
                        <span class="material-icons f-size-24">delete_forever</span>
                      </button>
                    </section>
                  </section>
                )
              })
              : <section className='label-status'>
                No item in Archieve
              </section>
          }
        </section>
      </div>
    </div>
  )
}
