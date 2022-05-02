const AverageRating = (props)=>{
    return(
        <div className="Average-Rating widget">
            <section class="stats">
                <p>Average Rating</p>
                <h1>{props.rating}</h1>
                <p>{props.diff} points from last week</p>
            </section>
        </div>
    )
}

export default AverageRating