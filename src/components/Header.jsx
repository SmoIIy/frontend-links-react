


export default function Header(props){
    return (
        <header className="flex flex-col justify-center items-center font-mono h-64 dark:text-white bg-slate-900">
            <h1 className="lg:text-8xl sm:text-5xl text-4xl">{props.title}</h1>
            <p>{props.body}</p>
        </header>
    )
}