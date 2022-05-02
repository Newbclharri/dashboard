const SentimentAnalysis = (props)=>{
    return(
        <div className="Sentiment-Analysis widget">
            <section className="stats">
                <p>Sentiment Analysis</p>
                <p><span>{props.numPos}</span>Positive Reviews</p>
                <p><span>{props.numNeut}</span>Neutral Reviews</p>
                <p><span>{props.numNeg}</span>Negative Reviews</p>
            </section>

        </div>
    )
}

export default SentimentAnalysis