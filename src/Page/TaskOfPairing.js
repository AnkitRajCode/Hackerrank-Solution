import Top from '../image/TOP.png';

const TaskOfPairing = () => {
    return ( 
        <div className="row bg-dark text-light">
            <div className="col-md-3 bg-dark text-light h3">
                <p>
                There are a certain number of cities in a country, some of which are connected with bidirectional roads. The number of roads is one less the number of cities, and it is possible to travel between any pair of cities using the roads. The distance between cities is the minimum number of roads one has to cross when traveling between them. How many ways are there to build exactly 3 hotels, each in a different city, such that the distance between every pair of hotels is equal?
                </p>
            </div>
            <div className="col-md-9">
                <img src={Top} alt="subarray" />
            </div>
        </div>
     );
}
 
export default TaskOfPairing;