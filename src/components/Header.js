import {useEffect, useState} from "react";

function Header({setShowTaskEdit}) {
    const [curShow, setCurShow] = useState(false);
    useEffect(() => {
        setShowTaskEdit(curShow);
    }, [setShowTaskEdit, curShow]);
    return (
        <div>
            <nav className="nav">
                <div className="nav-left">
                    <a className="brand" href="/">
                        Task Tracker
                    </a>
                </div>
                <div className="nav-right">
                    <button
                        className="button outline" style={{backgroundColor: curShow ? "red" : "green", color: "white"}}
                        onClick={() => setCurShow(!curShow)}>
                        {!curShow && "Add"}
                        {curShow && "Close"}
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Header;
