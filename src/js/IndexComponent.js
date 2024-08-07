import '../css/IndexComponent.css';
import {Link} from 'react-router-dom';

function IndexComponent() {
    return (
        <div className="IndexComponent">
            <Link to="/using-fiber-react">
                <button>Using fiber react</button>
            </Link>
            <Link to="/using-three-react">
            <button>Using three react</button>
            </Link>
        </div>
    )
}

export default IndexComponent;