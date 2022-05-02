const Reviews = (props)=>{
    return(
        <div className="Reviews widget">            
            <section class="stats">
                <p>Reviews</p>
                <h1>{props.numReviews}</h1>
                <p>You got {props.percentage} more reviews than last week.</p>
            </section>
        </div>
    )
}
export default Reviews