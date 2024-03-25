import FunctionContextD from "./FunctionContextD";
import ColorTheme from "./MyColorContext";
const FunctionContextC = () => {
    return (
        <ColorTheme.Consumer>
            {cores => (
                <div style={{ backgroundColor: cores.bkgC }}>
                    <h1>Contexto C</h1>
                    <FunctionContextD />
                </div>
            )}
        </ColorTheme.Consumer>
    );
};

export default FunctionContextC;