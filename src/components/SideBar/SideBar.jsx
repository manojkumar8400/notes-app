import "./SideBar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <>
            <div className="sideBar-container">
                <Link to="/Notes">
                    <div className="side-icon notes">
                        <span><i class="fa fa-sticky-note-o"></i></span>
                        <span>Notes</span>
                    </div>
                </Link>
                <Link to="/Label">
                    <div className="side-icon">
                        <span><i class="fa fa-tags side-icon"></i></span>
                        <span>Label</span>
                    </div>
                </Link>
                <Link to="/Archieve">
                    <div className="side-icon">
                        <span><i class="fa fa-archive side-icon"></i></span>
                        <span>Archieve</span>
                    </div>
                </Link>
                <Link to="/Trash">
                    <div className="side-icon">
                        <span><i class="fa fa-trash-o side-icon"></i></span>
                        <span>Trash</span>
                    </div>
                </Link>
            </div>
        </>
    )
}

export { SideBar };