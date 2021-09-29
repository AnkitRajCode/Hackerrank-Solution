import stringAnagramImg from '../image/stringAnagram.jpeg';
import stringAnagramSolImg from '../image/stringAnagramSol.jpeg';
const stringAnagram = () => {
    return ( 
        <div className="SubarraySum row">
            <div className="col-md-3">
                <img src={stringAnagramImg} alt="subarray" style={{width:"100%"}} />
            </div>
            <div className="col-md-9">
                <img src={stringAnagramSolImg} alt="subarray" />
            </div>
        </div>
     );
}
 
export default stringAnagram;