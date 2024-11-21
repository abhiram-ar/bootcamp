import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
    const noOfCakes = useSelector((state) => state.cake.numberOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>No. of cakes : {noOfCakes}</h1>
            <button onClick={() => dispatch(ordered())}>Order cake</button>
            <button onClick={() => dispatch(restocked(5))}>Restock cake</button>
        </div>
    );
};

export default CakeView;
