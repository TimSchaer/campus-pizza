import styles from './ListDayPizza.module.css';
import {useRouter} from "next/router";
import ListsAPI from "../lib/api/Lists";
import {useEffect, useState} from "react";

export default function ListDayPizza({ orders, day }) {
    const router = useRouter()

    const handleCreate = async () => {
        await router.push(`/create/${day}`);
    }
    const handleDelete = async (e) => {
        await ListsAPI.delete(e.target.name.toString())
        await router.push(`/days/${day}`)

    }

    return (
        <div>
            <div className={styles.list_container}>
                <h2 className={styles.listTitle}>{day}</h2>
                <table className={styles.table}>
                    <tr>
                        <th>Name</th>
                        <th>Teig</th>
                        <th>Sauce</th>
                        <th>Topping 1</th>
                        <th>Topping 2</th>
                        <th>Topping 3</th>
                        <th>Lieferzeit</th>
                        <th></th>
                    </tr>
                    {orders.map((order) => {
                        return (
                                <tr>
                                    <td className={styles.hover}>{order.name}</td>
                                    <td className={styles.hover}>{order.teig}</td>
                                    <td className={styles.hover}>{order.sauce}</td>
                                    <td className={styles.hover}>{order.toppings[0]}</td>
                                    <td className={styles.hover}>{order.toppings[1]}</td>
                                    <td className={styles.hover}>{order.toppings[2]}</td>
                                    <td className={styles.hover}>{order.lieferzeit}</td>
                                    <td><button name={order.id}  className={styles.deleteButton} type="button" onClick={handleDelete}>x</button></td>
                                </tr>

                        )
                    })}

                </table>
                <button className={styles.createButton} type="button" onClick={handleCreate}>Create</button>

            </div>
        </div>
    )
}
