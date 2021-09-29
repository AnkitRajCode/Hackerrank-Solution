import { Link } from 'react-router-dom';
import '../css/body.css'

const Body = () => {
    return ( 
        <div className="body">
            <div className="container mt-5">
                <ol class="list-group list-group-numbered">
                    <Link to="/subarray" class="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                        <div class="fw-bold">Subarray</div>
                        All Test Case
                        </div>
                        <span class="badge bg-success round mt-3"><i class="far fa-check-circle"></i></span>
                    </Link>
                </ol>
            </div>
        </div>
    );
}
 
export default Body;