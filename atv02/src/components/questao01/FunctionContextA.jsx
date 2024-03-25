import React from "react";
import FunctionContextC from "./FunctionContextC";
import FunctionContextB from "./FunctionContextB";
import FunctionContextD from "./FunctionContextD";
import ColorTheme from "./MyColorContext";

const FunctionContextA = () => {
    const cores = {bkgA: "green", bkgB: "white", bkgC: "yellow", bkgD: "blue"};

    return (
        <ColorTheme.Provider value={cores}>
            <div style={{ backgroundColor: cores.bkgA }}>
                <h1>Contexto A</h1>
            </div>
            <FunctionContextB />
            <FunctionContextC />
            <FunctionContextD />
        </ColorTheme.Provider>
    );
};

export default FunctionContextA;