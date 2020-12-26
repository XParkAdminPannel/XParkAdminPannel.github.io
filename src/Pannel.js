import React, { useState, useEffect} from "react";
import fire from "./fire";
import "./Discount";

const Pannel = ({handleLogout}) => {

    const [Discount, setDiscount] = useState("");

    const handleDiscount = () => {
        fire.database().ref("XPARK_CONSTANTS/discount").set({
                value: Discount
        });
    }

    const dID = "1000000";
    const [semt, setsemt] = useState("");
    const [country, setcountry] = useState("");
    const [name, setname] = useState("");
    const [postCode, setpostCode] = useState("");
    const [phone, setphone] = useState("");
    const [latitude, setlatitude] = useState("");
    const [longitude, setlongitude] = useState("");
    const [capacity, setcapacity] = useState("");

    const handleAddCarPark = () => {

        var carpark;
        var repo = postCode + "_" + semt + "_" + country;
        var repoNum = dID;

        /*fire.database().ref("CAR_PARKS/" + repo).on('value', snapshot => {
            repoNum = snapshot.numChildren() + parseInt(dID);
        });*/

        fire.database().ref("CAR_PARKS/" + repo).on('value', snapshot => {
            repoNum = snapshot.numChildren() + parseInt(dID);
        });

        try {
            carpark = {
                capacity: parseInt(capacity),
                coordinates: {
                    latitude: parseFloat(latitude),
                    longitude: parseFloat(longitude),
                },
                freeArea: parseInt(capacity),
                generalid: postCode + "_" + semt + "_" + country + "-" + repoNum.toString(),
                id: repoNum.toString(),
                name: name,
                phone: phone,
                used: 0,
            };
        
            fire.database().ref("CAR_PARKS/" + repo + "/" + repoNum).set(carpark);
            
        } catch (error) {
            console.log(error);
        }

        console.log(carpark);
    }

    return(
        <section className="Pannel">
            <nav>
                <h2>X-Park Admin Paneline Hoşgeldiniz</h2>
                <button onClick={handleLogout}>Çıkış Yap</button>
            </nav>

            <div className="addCarParkContainer">

                <label>Otopark Ekle</label>

                <input type="text"
                    autofocus
                    required
                    placeholder="Şehir"
                    value={country}
                    onChange={(e) => setcountry(e.target.value)}
                />

                <input type="text"
                    autofocus
                    required
                    placeholder="Semt"
                    value={semt}
                    onChange={(e) => setsemt(e.target.value)}
                />

                <input type="text"
                    placeholder="Otopark ismi"
                    autofocus
                    required
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />

                <input type="text"
                    placeholder="Posta Kodu"
                    autofocus
                    required
                    value={postCode}
                    onChange={(e) => setpostCode(e.target.value)}
                />
                
                <input type="text"
                    autofocus
                    required
                    placeholder="Telefon numarası"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                />

                <input type="text"
                    autofocus
                    required
                    placeholder="Enlem (Konum)"
                    value={latitude}
                    onChange={(e) => setlatitude(e.target.value)}
                />

                <input type="text"
                    autofocus
                    required
                    placeholder="Boylam (Konum)"
                    value={longitude}
                    onChange={(e) => setlongitude(e.target.value)}
                />

                <input type="number"
                    autofocus
                    required
                    placeholder="Kapasite"
                    value={capacity}
                    onChange={(e) => setcapacity(e.target.value)}
                />

                <button onClick={handleAddCarPark}>Ekle</button>
            </div>

            <div className="discContainer">
                <label>İndirim Miktarı</label>
                <input type="number"
                        autofocus
                        required
                        value={Discount}
                        onChange={(e) => setDiscount(e.target.value)}
                />
                <button onClick={handleDiscount}>İndirimi Herkese Gönder</button>
            </div>
        </section>
    )
}

export default Pannel;