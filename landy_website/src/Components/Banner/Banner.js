import "./Banner.css"
export let Banner =()=>{
    return(
        <div className="banner">
            <div className="banner_content">
                <h1>Landing page template for developers & startups</h1>
                <p>Beautifully designed templates using React.js, ant design and styled-components! Save weeks of time and build your landing page in minutes.</p>
                <div className="btns">
                    <button>Explore</button>
                    <button className="wt-bg">Learn more</button>
                </div>
            </div>
            <div className="banner_img">
                <img src="https://landy-web.netlify.app/img/svg/developer.svg" alt="alt"/>
            </div>
        </div>
    )
}