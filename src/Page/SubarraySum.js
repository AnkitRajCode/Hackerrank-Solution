import subarrayImg from '../image/subarray.jpeg';
import subarraySolImg from '../image/subarraySol.png';

const SubarraySum = () => {
    return ( 
        <div className="SubarraySum row">
            <div className="col-md-3">
                <img src={subarrayImg} alt="subarray" style={{width:"100%"}} />
            </div>
            <div className="col-md-9">
                <img src={subarraySolImg} alt="subarray" />
            </div>
        </div>
    );
}
 
export default SubarraySum;