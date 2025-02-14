import "./Response.css"

export function Response(){
    return(
        <div className="response">
            <div className="response_img">
                <img src="https://landy-web.netlify.app/img/svg/graphs.svg" alt=""/>
            </div>
            <div className="response_content">
                <h1>Light, fast & responsive</h1>
                <p>This template is ready to use, so you don't need to change anything at a component level, unless you want to customize the default styling.</p>
                <div className="why">
                    <div className="antD">
                        <img src="https://landy-web.netlify.app/img/svg/notes.svg" alt=""/>
                        <p>Why Antd?</p>
                        <span>Ant Design is a React UI library that has a lot of easy-to-use components for building elegant UI.</span>
                    </div>
                    <div className="styled">
                        <img src="https://landy-web.netlify.app/img/svg/notes.svg" alt=""/>
                        <p>Why styled-components?</p>
                        <span>Styled Components gives you total control over your components.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}