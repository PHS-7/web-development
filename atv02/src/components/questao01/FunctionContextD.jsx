import React from "react";
import ColorTheme from "./MyColorContext";

const FunctionContextD = () => {
    return (
        <ColorTheme.Consumer>
            {cores => (
                <div style={{ backgroundColor: cores.bkgD }}>
                    <h1>Contexto D</h1>
                </div>
            )}
        </ColorTheme.Consumer>
    );
};

export default FunctionContextD;