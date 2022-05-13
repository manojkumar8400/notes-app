import React from 'react';
import { v4 as uuid } from "uuid";
import { Navigation, SideBar } from '../../components/index';
import { useNoteContext } from '../../context/notesContext';

export const Trash = () => {

  const { note: { saveTrash }, dispatchNote } = useNoteContext();

  return (
    <>
      <Navigation />
      <div className='flex '>
        <SideBar />
        <div className="card flex jstfy-ctnt-center wrap gap-1">
          {saveTrash.map(content => {
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
                    dispatchNote({ type: "Remove_From_Trash", payload: content })
                  }}>
                    <img className="trash-icon" src="./assests/trash.svg" alt="trash logo" />
                  </button>

                  <button onClick={()=>dispatchNote({ type: "DELETE_FROM_TRASH", payload: content })}>
                    <i className="fa fa-trash-o"></i>
                  </button>
                </section>
              </section>
            )
          })}
        </div>
      </div>
    </>
  )
}
