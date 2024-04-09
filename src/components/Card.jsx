

export default function Card(props){

    return (
        <a href={props.link} className="flex flex-col w-64 items-center border-2 border-orange-500 rounded-lg overflow-hidden dark:text-white hover:border-orange-800 group">
            <h2 className="text-xl font-bold mb-2 bg-orange-500 group-hover:bg-orange-800 w-full text-center">{props.title}</h2>
            <div className="flex flex-col items-center p-4">
                <p className="mb-2 p-2 line-clamp-5">{props.body}</p>
            </div>
        </a>



    )
}