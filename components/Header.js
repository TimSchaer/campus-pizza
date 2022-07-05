import Image from "next/image";
import styles from "./Header.module.css"
import Link from "next/link";

export default function Header() {
    return (
        <>
            <header className={styles.header}>
                <Link href={"/"}><img src="../public/pizza.png"/></Link>
                <Link href={"/"}><h1>Campus Pizza</h1></Link>

            </header>
        </>    
    )

}