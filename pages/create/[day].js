import ListsAPI from "../../lib/api/Lists";
import CreatePizza from "../../components/CreatePizza";

export default function CreatePage() {
    return(
        <div>
            <CreatePizza/>
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

export async function getServerSideProps(context) {
    const day = context.params.day
    const list = await ListsAPI.readAll();
    return {
        props: { list, day }
    }
}