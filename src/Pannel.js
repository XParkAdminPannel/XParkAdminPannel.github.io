import React, { useState, useEffect} from "react";
import fire from "./fire";

const Pannel = ({handleLogout}) => {

    const [Discount, setDiscount] = useState("");

    const handleDiscount = () => {
        fire.database().ref("XPARK_CONSTANTS/discount").set({
                value: Discount
        });
    }

    return(
        <section className="Pannel">
            <nav>
                <h2>Welcome to X-Park Admin Pannel</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <div className="discContainer">
                <label>Discount Amount</label>
                <input type="number"
                        autofocus
                        required
                        value={Discount}
                        onChange={(e) => setDiscount(e.target.value)}
                />
                <button onClick={handleDiscount}>Send Discount</button>
            </div>
        </section>
    )
}

export default Pannel;