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
            <button className='filter-icon-btn' onClick={filterShow}>{showFilter ? <span class='material-icons filter-icon'>filter_alt</span> : <span class="material-icons">close</span>}</button>
            <div className={`filter-container ${showFilter ? "display" : "inherit"}`}>
                <h3>Filter</h3>
                <hr />
                <p>Filter By</p>
                <label htmlFor="low">
                    <input onClick={() => dispatchFilter({ type: "LOW", payload: "LOW" })} type="checkbox" id='low' name="low" value="low" />
                    Low
                </label><br />
                <label htmlFor="medium">
                    <input onClick={() => dispatchFilter({ type: "MEDIUM", payload: "MEDIUM" })} type="checkbox" id='medium' name="medium" value="medium" />
                    Medium
                </label><br />
                <label htmlFor="high">
                    <input onClick={() => dispatchFilter({ type: "HIGH", payload: "HIGH" })} type="checkbox" id='high' name="high" value="high" />
                    High
                </label>
                <hr />

                <p>sort by date</p>
                <label htmlFor="new-date">
                    <input onClick={() => dispatchFilter({ type: "SORT", payload: "Latest" })} type="radio" id='new-date' name="radio-btn" />
                    New date
                </label><br />
                <label htmlFor="old-date">
                    <input onClick={() => dispatchFilter({ type: "SORT", payload: "OLDEST" })} type="radio" id='old-date' name="radio-btn" />
                    Old date
                </label>
                <hr />
                <button onClick={() => { dispatchFilter({ type: "CLEAR" }) }}>Clear</button>
            </div>
        </div>
    )
}
