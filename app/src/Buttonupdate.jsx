import { useDispatch } from "react-redux";
import { addMoney, removeMoney } from "./Store";

export default function Buttonupdate() {
    const dispatch = useDispatch();

    return (
        <div className="text-center my-3">
            <p className="text-info fw-semibold fs-5 mb-4">  Add aur Remove Money — har transaction ₹500</p>

            <button className="btn btn-success px-4 me-3" onClick={() => dispatch(addMoney(500))} > Add Money </button>
            <button className="btn btn-danger px-4" onClick={() => dispatch(removeMoney(500))}>Remove Money</button>
        </div>
    );
}
