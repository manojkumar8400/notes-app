import React from 'react';
import { useState } from 'react';
import "./FilterBar.css";
import { useNoteContext } from '../../context/notesContext';

export const FilterBar = () => {

    const { filter, dispatchFilter } = useNoteContext();

    const [showFilter, setShowFilter] = useState(true);

    const filterShow = () => {
        setShowFilter(showFilter ? false : true)
    }

    return (
        <div>
            <button className='filter-icon-btn' onClick={filterShow}>{showFilter ? <img className='funnel-icon' src="./assests/funnel-.svg" alt="funnel icon" /> : <img className='funnel-icon' src="./assests/close.svg" alt="cut icon" />}</button>
            <div className={`filter-container ${showFilter ? "display" : "inherit"}`}>
                <h3>Filter</h3>
                <hr />
                <p>Filter By</p>
                <input onClick={() => dispatchFilter({ type: "LOW", payload: "LOW" })} type="checkbox" name="low" value="low" />
                <label htmlFor="low">Low</label><br />
                <input onClick={() => dispatchFilter({ type: "MEDIUM", payload: "MEDIUM" })} type="checkbox" name="medium" value="medium" />
                <label htmlFor="medium">Medium</label><br />
                <input onClick={() => dispatchFilter({ type: "HIGH", payload: "HIGH" })} type="checkbox" name="high" value="high" />
                <label htmlFor="high">High</label>
                <hr />

                <p>sort by date</p>
                <input onClick={() => dispatchFilter({ type: "SORT", payload: "Latest" })} type="radio" name="radio-btn" />
                <label htmlFor="date filter">New date</label><br />
                <input onClick={() => dispatchFilter({ type: "SORT", payload: "OLDEST" })} type="radio" name="radio-btn" />
                <label htmlFor="date filter">Old date</label>
                <hr />
                <button onClick={() => { dispatchFilter({ type: "CLEAR" }) }}>Clear</button>
            </div>
        </div>
    )
}
