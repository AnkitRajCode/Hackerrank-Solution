import { Link } from 'react-router-dom';
import '../css/body.css'

const Body = () => {
    return ( 
        <div className="body">
            <div className="container mt-5">
                <ol class="list-group list-group-numbered">
                    <Link to="/subarray" class="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
                        <div class="ms-2 me-auto">
                        <h4 class="fw-bold">Subarray Sum</h4>
                         Basic
                        </div>
                        <span class="badge bg-success round mt-3">JavaScript</span>
                    </Link>
                </ol>
                <ol class="list-group list-group-numbered">
                    <Link to="/Task-of-Pairing" class="list-group-item list-group-item-action d-flex justify-content-between align-items-start mt-3">
                        <div class="ms-2 me-auto">
                        <h4 class="fw-bold">Task of Pairing</h4>
                         Intermediate
                        </div>
                        <span class="badge bg-success round mt-3">C++</span>
                    </Link>
                </ol>
                <ol class="list-group list-group-numbered">
                    <Link to="/stringAnagram" class="list-group-item list-group-item-action d-flex justify-content-between align-items-start mt-3">
                        <div class="ms-2 me-auto">
                        <h4 class="fw-bold">String Anagram</h4>
                         Basic
                        </div>
                        <span class="badge bg-success round mt-3">Python 3</span>
                    </Link>
                </ol>
                <ol class="list-group list-group-numbered">
                    <Link to="/hotelConstruction" class="list-group-item list-group-item-action d-flex justify-content-between align-items-start mt-3">
                        <div class="ms-2 me-auto">
                        <h4 class="fw-bold">Hotel Construction</h4>
                         Intermediate
                        </div>
                        <span class="badge bg-success round mt-3">Java</span>
                    </Link>
                </ol>
            </div>
        </div>
    );
}
 
export default Body;