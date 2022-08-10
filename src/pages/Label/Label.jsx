import React from 'react';
import { v4 as uuid } from "uuid";
import "./Label.css";
import { SideBar, Navigation } from '../../components/index';
import { useNoteContext } from '../../context/notesContext';

export const Label = () => {

  const { note: { saveLabel }, dispatchNote } = useNoteContext();

  return (
    <>
      < Navigation />
      <div className='label-container'>
        <section className="sideBar">
          < SideBar />
        </section>
        <section className="card flex jstfy-ctnt-center wrap gap-1">
          {
            saveLabel.length > 0 ?
              saveLabel.map(content => {
                return (
                  <section style={{ backgroundColor: content.bgColor }} className='label-section relative' key={uuid()}>
                    <section className="data-render flex-column jstfy-ctnt-spc-between">
                      <div className='relative'>
                        <p>Title: {content.Title}</p>
                        <p className="priority-style absolute">{content.priority}</p>
                        <hr />
                        <p  dangerouslySetInnerHTML={{ __html: content.Value }}></p>
                      </div>
                      <div>
                        < hr />
                        <p>Label: {content.Label}</p>
                      </div>
                    </section>
                    <section className='bottom-icon flex absolute'>
                      <button onClick={() => {
                        dispatchNote({ type: "Archieve", payload: content })
                        dispatchNote({ type: "Remove_From_Label", payload: content })
                        dispatchNote({ type: "Remove_Data", payload: content })
                      }}>
                        <span class="material-icons f-size-24">archive</span>
                      </button>
                      <button onClick={() => {
                        dispatchNote({ type: "Trash", payload: content })
                        dispatchNote({ type: "Remove_From_Label", payload: content })
                        dispatchNote({ type: "Remove_Data", payload: content })
                      }}>
                        <span class="material-icons f-size-24">delete_forever</span>
                      </button>
                    </section>
                  </section>
                )
              })
              : <section className='label-status'>
                No item in Label
              </section>
          }
        </section>
      </div>

    </>
  )
}