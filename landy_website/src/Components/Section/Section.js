import "./Section.css"
export function Section(){
    return(
        <div className="section">
            <div className="section_content">
                <h1>Ready made<br/> sections</h1>
                <p>Landy comes with a set of ready to use sections to help you easily create a landing page for your own brand, with all the content your startup desires. In order to replace any dummy elements (text, image, etc..) all you need to do is go to content folder and input your real content.</p>
            </div>
            <img src="https://landy-web.netlify.app/img/svg/product-launch.svg" alt=""/>
        </div>
    )
}

export let Section2 =()=>{
    return(
        <div className="section2">
            <div className="section_content2">
                <h1>That's about it!</h1>
                <p>If you are familiar with React, or SPA frameworks in general, there shouldn't be any confusing parts about this template. if not, you can always reach out to me and I'll try me best to answer your questions.</p>
            </div>
            <img src="https://landy-web.netlify.app/img/svg/waving.svg" alt=""/>
        </div>
    )
}