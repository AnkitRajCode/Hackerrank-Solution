import hotel from '../image/hotelConstruction.png';

const hotelConstruction = () => {
    return ( 
        <div className="row bg-dark text-light">
            <div className="col-md-3 bg-dark text-light h3">
                <p>
                Q--  not avalable
                </p>
            </div>
            <div className="col-md-9">
                <img src={hotel} alt="subarray" />
            </div>
        </div>
     );
}
 
export default hotelConstruction;