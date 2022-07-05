import styles from './ListDayNames.module.css';
import Link from 'next/link';
import {useEffect, useState} from "react";

export default function ListDayNames({ orders, day }) {


    return orders && (
        <div className={styles.list_container}>
            <h2>
                <Link href={`days/${day}`}><a className={styles.listTitle}>{day}</a></Link>
            </h2>
            {orders.map((order) => {
                return (
                    <div key={order.id} className={styles.name_container}>
                        <p>{order.name}</p>
                    </div>
                )
            })}
        </div>

    )
}