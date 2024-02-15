import { useSelector } from 'react-redux';
import { inc, dec, rnd } from '../actions';
import { UseSelector, useDispatch } from 'react-redux';

const Counter = () => {

    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="jumbotron m-3">
            <h1>{counter}</h1>
            <button onClick={() => dispatch(dec())} className="btn btn-primary m-1">DEC</button>
            <button onClick={() => dispatch(inc())} className="btn btn-primary m-1">INC</button>
            <button onClick={() => dispatch(dec())} className="btn btn-primary m-1">RND</button>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         counter: state.value,
//     }
// }

// export default connect(mapStateToProps, actions)(Counter);

export default Counter;