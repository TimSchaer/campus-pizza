import React, {useState} from "react";
import styles from "./PizzaBaseAndDough.module.css";

export default function PizzaBaseAndDough() {
    let dough = "";
    let base = "";
    let counter = 0;
    const [toppings, setToppings] = useState([]);


    function classicItalian() {
        dough = "classicItalian"
    }

    function americanStyle() {
        dough = "americanStyle"
    }

    function doubleCheeseDecker() {
        dough = "doubleCheeseDecker"
    }

    function calzone() {
        dough = "calzone"
    }

    function volkorn() {
        dough = "volkorn"
    }

    function cheesyCrusty() {
        dough = "cheesyCrusty"
    }

    function tomate() {
        base = "classicItalian"
    }

    function bbqSauce() {
        base = "bbqSauce"
    }

    function crèmeFraiche() {
        base = "crèmeFraiche"
    }

    function chiliTomatoSauce() {
        base = "chiliTomatoSauce"
    }

    const handleClick = function (e) {
        if (e.target.checked) {
            let topping = e.target.name
            setToppings(toppings => [...toppings, topping]);
            counter++;
        } else {
            let topping = e.target.name
            setToppings(toppings => toppings.filter(toppings => toppings !== topping ))
            counter--;
        }
        if (counter > 3) {
            counter--
            e.target.checked = false;
        }
    }


    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Teig wählen: </h2>
                <div>
                    <button className={styles.buttonDoughes} onClick={classicItalian}>Klassisch italienisch</button>
                    <button className={styles.buttonDoughes} onClick={americanStyle}>American style</button>
                    <button className={styles.buttonDoughes} onClick={volkorn}>Vollkorn</button>
                    <button className={styles.buttonDoughes} onClick={doubleCheeseDecker}>Double-Cheese-Decker</button>
                    <button className={styles.buttonDoughes} onClick={cheesyCrusty}>Cheesy crusty</button>
                    <button className={styles.buttonDoughes} onClick={calzone}>Calzone</button>
                </div>
            <h2 className={styles.header}>Sauce wählen: </h2>
            <div>
                <button className={styles.buttonBase} onClick={tomate}>Tomatensauce</button>
                <button className={styles.buttonBase} onClick={bbqSauce}>BBQ-Sauce</button>
                <button className={styles.buttonBase} onClick={crèmeFraiche}>Crème Fraiche</button>
                <button className={styles.buttonBase} onClick={chiliTomatoSauce}>Chili-Tomatensauce</button>
            </div>
                <h2 className={styles.header}>Toppings wählen: </h2>
                    <div className={styles.checkboxes}>
                        <input type="checkbox" onClick={handleClick} name="ExtraMozarella"/>
                        <label htmlFor="ExtraMozarella">Extra Mozarella</label>
                        <input type="checkbox" onChange={handleClick }name="Artischocken"/>
                        <label htmlFor="Artischocken">Artischocken</label>
                    </div>

        </div>
    )
}