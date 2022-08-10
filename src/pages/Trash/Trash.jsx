import React from 'react';
import { v4 as uuid } from "uuid";
import { Navigation, SideBar } from '../../components/index';
import { useNoteContext } from '../../context/notesContext';

export const Trash = () => {

  const { note: { saveTrash }, dispatchNote } = useNoteContext();

  return (
    <>
      <Navigation />
      <div className='label-container'>
        <section className="sideBar">
          < SideBar />
        </section>
        <section className="card flex jstfy-ctnt-center wrap gap-1">
          {
            saveTrash.length ?
              saveTrash.map(content => {
                return (
                  <section style={{ backgroundColor: content.bgColor }} className='label-section relative' key={uuid()}>
                    <section className="data-render flex-column jstfy-ctnt-spc-between">
                      <div className='relative'>
                        <p>Title: {content.Title}</p>
                        <p className="priority-style absolute">{content.priority}</p>
                        <hr />
                        <p dangerouslySetInnerHTML={{ __html: content.Value }}></p>
                      </div>
                      <div>
                        < hr />
                        <p>Label: {content.Label}</p>
                      </div>
                    </section>
                    <section className='bottom-icon flex absolute'>

                      <button onClick={() => {
                        dispatchNote({ type: "SAVE", payload: content })
                        dispatchNote({ type: "Remove_From_Trash", payload: content })
                      }}>
                        <span class="material-icons  f-size-24">restore_from_trash</span>
                      </button>

                      <button onClick={() => dispatchNote({ type: "DELETE_FROM_TRASH", payload: content })}>
                      <span class="material-icons  f-size-24">delete</span>
                      </button>
                    </section>
                  </section>
                )
              })
              : <section className='label-status'>
                No item in Trash
              </section>
          }
        </section>
      </div>
    </>
  )
}
