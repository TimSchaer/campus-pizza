import ListDayPizza from "../../components/ListDayPizza";
import ListsAPI from "../../lib/api/Lists"
import { useRouter } from "next/router";


export default function detailDay({ list, day }) {


    return list&& (
        <div>
            <ListDayPizza orders={list.filter(a => a.tag == day)} day={day}/>
        </div>

    )

}


export async function getStaticPaths() {
    const lists = await ListsAPI.readAll()
    const paths = lists.map(list => (
        { 
            params: { day: list.tag.toString() } 
        })
    )
    return { paths, fallback: true }
}

export async function getStaticProps(context) {
    const day = context.params.day
	const list = await ListsAPI.readAll();
	return {
		props: { list, day }
	}
}
