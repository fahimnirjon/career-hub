import { Link } from "react-router-dom";

const ErrorElement = () => {
    return (
        <div>
            <p>404! Not Found</p>
            <button> <Link to="/">Go Back</Link> </button>
        </div>
    );
};

export default ErrorElement;