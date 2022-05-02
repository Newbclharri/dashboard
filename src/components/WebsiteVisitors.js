const WebsiteVisitors = (props)=>{
    return(
        <div className="Website-Visitors widget">
            <section class="stats">
                <p>Website Visitors</p>
                <p><span className="visitors">{props.numVisitors}</span> Visitors Today</p>
            </section>
        </div>
    )
}

export default WebsiteVisitors