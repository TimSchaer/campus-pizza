import React, {useState} from "react";
import styles from "./CreatePizza.module.css";
import Lists from "../lib/api/Lists";
import {useRouter} from "next/router";
import ListsAPI from "../lib/api/Lists";




export default function CreatePizza() {
    const router = useRouter()
    const [firstSauce, setFirstSauce] = useState(true)
    const [firstDough, setFirstDough] = useState(true)
    const [toppings, setToppings] = useState([]);
    const [lastDough, setLastDough] = useState("")
    const [lastSauce, setLastSauce] = useState("")
    const [dough, setDough] = useState("")
    const [sauce, setSauce] = useState("")
    const [ToppingCounter, setToppingCounter] = useState(0)
    const [name, setName] = useState('');
    const [time, setTime] = useState("12:00");


    async function handleFinish (){

        let currentUrl = window.location.href;
        const lastSegment = currentUrl.split("/").pop();
        await ListsAPI.create( {
            tag: lastSegment,
            name: name,
            teig: dough,
            sauce: sauce,
            toppings: toppings,
            lieferzeit: time,
        })
        await router.push(`/days/${lastSegment}`);
    }

    const handleDough = function (e) {
        if (firstDough) {
            setFirstDough(false)
            setLastDough(e)
            e.target.style.color = "rgb(165, 185, 163)";
            e.target.style.backgroundColor = "rgb(19, 73, 19)";
        } else {
            lastDough.target.style.color = "rgb(19, 73, 19)";
            lastDough.target.style.backgroundColor = "rgb(165, 185, 163)"
            e.target.style.color = "rgb(165, 185, 163)";
            e.target.style.backgroundColor = "rgb(19, 73, 19)";
            setLastDough(e)
        }

        setDough(e.target.name)

    }

    const handleSauce = function (e) {
        if (firstSauce) {
            setFirstSauce(false)
            setLastSauce(e)

            e.target.style.color = "rgb(165, 185, 163)";
            e.target.style.backgroundColor = "rgb(19, 73, 19)";
        } else {
            lastSauce.target.style.color = "rgb(19, 73, 19)";
            lastSauce.target.style.backgroundColor = "rgb(165, 185, 163)"
            e.target.style.color = "rgb(165, 185, 163)";
            e.target.style.backgroundColor = "rgb(19, 73, 19)";
            setLastSauce(e)

        }
        setSauce(e.target.name)
    }

    const handleTopping = function (e) {
        if (e.target.checked) {
            let topping = e.target.name
            if(toppings.length >= 3){
                e.target.checked = false;
            }else {
                setToppings(toppings => [...toppings, topping]);
                setToppingCounter(ToppingCounter + 1)



            }
        } else {
            let topping = e.target.name
            setToppings(toppings => toppings.filter(toppings => toppings !== topping))
            setToppingCounter(ToppingCounter - 1)
        }
        if (ToppingCounter > 3) {
            setToppingCounter(ToppingCounter - 1)
            e.target.checked = false;
        }

    }


    const handleNameChange = event => {
        setName(event.target.value);
    };

    const handleTimeChange = event => {
        setTime(event.target.value);
    };


    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Erstelle deine Pizza:</h2>
            <div className={styles.form}>
                <div>
                    <p className={styles.label}><b>Name:</b></p>
                    <input className={styles.textBox} type="text" id="name" name="name" onChange={handleNameChange} value={name} autoComplete="off"/><br/>
                    <p className={styles.label}><b>Lieferzeit:</b></p>
                    <input className={styles.timePicker} type="time" value="12:00" min="09:00" max="18:00" required/>
                </div>
                <p className={styles.label}><b>Teig wählen:</b></p>
                <div>
                    <button className={styles.buttonDoughes} onClick={handleDough} name={"Klassisch italienisch"} >Klassisch italienisch</button>
                    <button className={styles.buttonDoughes} onClick={handleDough} name={"American style"} >American style</button>
                    <button className={styles.buttonDoughes} onClick={handleDough} name={"Vollkorn"} >Vollkorn</button>
                    <button className={styles.buttonDoughes} onClick={handleDough} name={"Double-Cheese-Decker"} >Double-Cheese-Decker</button>
                    <button className={styles.buttonDoughes} onClick={handleDough} name={"Cheesy crusty"} >Cheesy crusty</button>
                    <button className={styles.buttonDoughes} onClick={handleDough} name={"Calzone"} >Calzone</button>
                </div>
                <p className={styles.label}><b>Sauce wählen:</b></p>
                <div>
                    <button className={styles.buttonBase} onClick={handleSauce} name={"Tomatensauce"} >Tomatensauce</button>
                    <button className={styles.buttonBase} onClick={handleSauce} name={"BBQ-Sauce"}>BBQ-Sauce</button>
                    <button className={styles.buttonBase} onClick={handleSauce} name={"Crème Fraiche"} >Crème Fraiche</button>
                    <button className={styles.buttonBase} onClick={handleSauce} name={"Chili-Tomatensauce"} >Chili-Tomatensauce</button>
                </div>
                <div>
                    <p className={styles.label}><b>Toppings wählen:</b></p>
                    <ul className={styles.checkboxes}>
                        <li>
                            <input type="checkbox" onClick={handleTopping} name="ExtraMozarella"/>
                            <label htmlFor="ExtraMozarella">Extra Mozarella</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="Artischocken"/>
                            <label htmlFor="Artischocken">Artischocken</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="Artischocken"/>
                            <label htmlFor="Artischocken">Artischocken</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="Champignons"/>
                            <label htmlFor="Champignons">Champignons</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="CrèmeFraîche"/>
                            <label htmlFor="CrèmeFraîche">Crème Fraîche</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="Jalapeños"/>
                            <label htmlFor="Jalapeños">Jalapeños</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="Knoblauch"/>
                            <label htmlFor="Knoblauch">Knoblauch</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="Mascarpone"/>
                            <label htmlFor="Mascarpone">Mascarpone</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="Olivenschwarz"/>
                            <label htmlFor="Olivenschwarz">Oliven schwarz</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="Pouletfleisch"/>
                            <label htmlFor="Pouletfleisch">Pouletfleisch</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="Rindfleischgehackt"/>
                            <label htmlFor="Rindfleischgehackt">Rindfleisch gehackt</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="Rucola"/>
                            <label htmlFor="Rucola">Rucola</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="Salamischarf"/>
                            <label htmlFor="Salamischarf">Salami scharf</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="Schinken"/>
                            <label htmlFor="Schinken">Schinken</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="Spinat"/>
                            <label htmlFor="Spinat">Spinat</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="Thon"/>
                            <label htmlFor="Thon">Thon</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="Pesto"/>
                            <label htmlFor="Pesto">Pesto</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="PlantbasedPouletstücke"/>
                            <label htmlFor="PlantbasedPouletstücke">Plantbased Pouletstücke</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="Cheddar"/>
                            <label htmlFor="Cheddar">Cheddar</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="VeganeKäseAlternative"/>
                            <label htmlFor="VeganeKäseAlternative">Vegane Käse Alternative</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="Ananas"/>
                            <label htmlFor="Ananas">Ananas</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="Birne"/>
                            <label htmlFor="Birne">Birne</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="Chickenpops"/>
                            <label htmlFor="Chickenpops">Chicken pops</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="FrischeTomaten"/>
                            <label htmlFor="FrischeTomaten">Frische Tomaten</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="Kapern"/>
                            <label htmlFor="Kapern">Kapern</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="Mais"/>
                            <label htmlFor="Mais">Mais</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="MozzarellaBufala"/>
                            <label htmlFor="MozzarellaBufala">Mozzarella Bufala</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="Peperoni"/>
                            <label htmlFor="Peperoni">Peperoni</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="RacletteKäse"/>
                            <label htmlFor="RacletteKäse">Raclette Käse</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="Rohschinken"/>
                            <label htmlFor="Rohschinken">Rohschinken</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="Salami"/>
                            <label htmlFor="Salami">Salami</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="Sardellen"/>
                            <label htmlFor="Sardellen">Sardellen</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="Speck"/>
                            <label htmlFor="Speck">Speck</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="Tabasco"/>
                            <label htmlFor="Tabasco">Tabasco</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="Zwiebeln"/>
                            <label htmlFor="Zwiebeln">Zwiebeln</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="PlantbasedGehacktes"/>
                            <label htmlFor="PlantbasedGehacktes">Plantbased Gehacktes</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="Ziegenkäse"/>
                            <label htmlFor="Ziegenkäse">Ziegenkäse</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="karamellisierteZwiebel"/>
                            <label htmlFor="karamellisierteZwiebel">karamellisierte Zwiebel</label>
                        </li>
                        <li>
                            <input type="checkbox" onChange={handleTopping} name="KeinMozzarella"/>
                            <label htmlFor="KeinMozzarella">Kein Mozzarella</label>
                        </li>
                    </ul>
                </div>
            </div>
            <button className={styles.createButton} onClick={handleFinish}>Create</button>
        </div>
    )
}