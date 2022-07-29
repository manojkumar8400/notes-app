import React from 'react';
import { useState } from 'react';
import "./FilterBar.css";
import { useNoteContext } from '../../context/notesContext';

export const FilterBar = () => {

    const { dispatchFilter, filter: { byPriority, bySort } } = useNoteContext();
    // checked={byPriority == "MEDIUM" ? true : false}
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
                    <input onClick={() => dispatchFilter({ type: "LOW", payload: "LOW" })} checked={byPriority == "LOW" ? true : false} type="radio" id='low' name="priority" value="low" />
                    Low
                </label><br />
                <label htmlFor="medium">
                    <input onClick={() => dispatchFilter({ type: "MEDIUM", payload: "MEDIUM" })} checked={byPriority == "MEDIUM" ? true : false} type="radio" id='medium' name="priority" value="medium" />
                    Medium
                </label><br />
                <label htmlFor="high">
                    <input onClick={() => dispatchFilter({ type: "HIGH", payload: "HIGH" })} checked={byPriority == "HIGH" ? true : false} type="radio" id='high' name="priority" value="high" />
                    High
                </label>
                <hr />

                <p>sort by date</p>
                <label htmlFor="new-date">
                    <input onClick={() => dispatchFilter({ type: "SORT", payload: "LATEST" })} checked={bySort == "LATEST" ? true : false} type="radio" id='new-date' name="radio-btn" />
                    New date
                </label><br />
                <label htmlFor="old-date">
                    <input onClick={() => dispatchFilter({ type: "SORT", payload: "OLDEST" })} checked={bySort == "OLDEST" ? true : false} type="radio" id='old-date' name="radio-btn" />
                    Old date
                </label>
                <hr />
                <button onClick={() => { dispatchFilter({ type: "CLEAR" }) }}>Clear</button>
            </div>
        </div>
    )
}
