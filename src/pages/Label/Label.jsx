import React from 'react';
import "./Label.css";
import { Navigation, SideBar } from '../../components/index';
import { useNoteContext } from '../../context/context';

export const Label = () => {

  const { note: { saveNote } } = useNoteContext();
  console.log(saveNote)

  return (
    <>
      <Navigation />
      <div className='flex'>
        <section>
          <SideBar />
        </section>
        <div className='flex flex-wrap'>
        {
          saveNote.map((e) => {
            return (
                <section className='label-section'>
                  <section>
                    <section>
                      Title: {e.Title}
                    </section>
                    <section className='c-section'>
                      {e.Content}
                    </section>
                  </section>
                  <section className='bottom-icon flex'>
                    <i class="edit-icon fa fa-edit"></i>
                    <i class="bookmark-icon fa fa-bookmark-o"></i>
                    <i class="fa fa-archive side-icon"></i>
                    <i class="fa fa-trash-o side-icon"></i>
                  </section>
                </section>
            )
          })
        }
        </div>


      </div>
    </>
  )
}
