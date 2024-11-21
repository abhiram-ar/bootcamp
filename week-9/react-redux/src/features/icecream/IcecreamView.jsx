import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";
import { useState } from "react";
const IcecreamView = () => {
    const [restockCount, setRestockCount] = useState(1)

    const noOfIcecreams = useSelector(
        (state) => state.icecream.numberOfIcecreams
    );

    const dispatch = useDispatch();
    return (
        <div>
            <h1>No. of iceCream {noOfIcecreams}</h1>
            <button onClick={() => dispatch(ordered())}>Order iceCream,</button>
            <input type="number" value={restockCount} onChange={(e)=> setRestockCount(Number(e.target.value))} />
            <button onClick={() => dispatch(restocked(restockCount))}>
                Restock iceCream
            </button>
        </div>
    );
};

export default IcecreamView;
