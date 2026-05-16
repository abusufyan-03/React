const Contact = () => {
    return(
        <>
        <h1>Contact page</h1>
        <form>
            <input 
            type="text"
            className="border p-2 m-2" 
            placeholder="name"
            />
            <input 
            type="text"
            className="border p-2 m-2" 
            placeholder="message"
            />
            <button className="border border-black p-2 rounded-lg">Submit</button>
        </form>
        </>
    )
}

export default Contact