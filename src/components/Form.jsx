


export default function Form(){
    return (
        <form className="border-2 border-orange-500 w-64 rounded-md overflow-hidden flex flex-col items dark:text-white">
            <h3 className="text-center text-xl p-0 bg-orange-500">Form</h3>

        <div className="flex flex-col p-4">
            <label htmlFor="name" className=""> Navn </label>
                <input
                type="text"
                name="name"
                id="name"
                placeholder="Navn på siden"
                className="rounded-lg  dark:bg-slate-600 dark:text-white"
                />
                
        </div>
        <div className="flex flex-col p-4">
            <label htmlFor="link" className=""> Link</label>
                <input
                type="url"
                name="link"
                id="link"
                placeholder="https://whatever.com"
                className="rounded-lg  dark:bg-slate-600 dark:text-white"
                />
        </div>





        <div className="flex flex-col p-4">
            <label htmlFor="description" className=""> Beskrivelse </label>
            <textarea
                rows="6"
                name="description"
                id="description"
                placeholder="Skriv kort hvad siden går ud på"
                className="rounded-lg  dark:bg-slate-600 dark:text-white"
            ></textarea>
        </div>




        <button className="bg-orange-500 w-20 my-4 mx-auto text-center px-4 py-1 rounded-lg">
            Gem
        </button>
    </form>
    )
}