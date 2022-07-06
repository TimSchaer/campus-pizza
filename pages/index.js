import ListsAPI from "../lib/api/Lists"
import styles from "./index.module.css"
import ListDayNames from "../components/ListDayNames";

export default function HomePage({ list }) {
	const days = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"];

	return (
		<div className={styles.lists_container}>
			{days.map(day => {
				return (<ListDayNames key={day} orders={list.filter(a => a.tag == day)} day={day} />)
			})}
		</div>
	)

}
export async function getStaticProps() {
	const list = await ListsAPI.readAll();
	return {
		props: { list }
	}
}