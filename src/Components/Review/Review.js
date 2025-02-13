import "./Review.css"
import profile from "../../assets/profile.png"

export let Review = ()=>{
    return(
        <div className="review">
            <p>WORD OF THE PEOPLE</p>
            <h1>Here’s What People Have To Say Regarding Our Services</h1>
            <div className="cardsContainer">
                <div className="card">
                    <div className="profile">
                        <img src={profile} alt=""/>
                        <div className="profileDetails">
                            <p>John Smith</p>
                            <span>CEO of YAP</span>
                        </div>
                    </div>
                    <div className="card_content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at metus eu nisi cursus ultrices vel eu lectus. Nullam nec aliquam felis. Vivamus faucibus condimentum scelerisque. Mauris gravida magna nec neque euismod pretium.
                    Praesent quis justo erat. Sed accumsan maximus consequat. Maecenas gravida quam enim, nec facilisis nisi commodo sit amet. Nunc ultricies ipsum nec consequat consectetur
                    </div>
                </div>
                <div className="card">
                    <div className="profile">
                        <img src={profile} alt=""/>
                        <div className="profileDetails">
                            <p>John Smith</p>
                            <span>CEO of YAP</span>
                        </div>
                    </div>
                    <div className="card_content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at metus eu nisi cursus ultrices vel eu lectus. Nullam nec aliquam felis. Vivamus faucibus condimentum scelerisque. Mauris gravida magna nec neque euismod pretium.
                    
                    </div>
                </div>
                <div className="card">
                    <div className="profile">
                        <img src={profile} alt=""/>
                        <div className="profileDetails">
                            <p>John Smith</p>
                            <span>CEO of YAP</span>
                        </div>
                    </div>
                    <div className="card_content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at metus eu nisi cursus ultrices vel eu lectus. Nullam nec aliquam felis. Vivamus faucibus condimentum scelerisque. Mauris gravida magna nec neque euismod pretium.
                    Praesent quis justo erat. Sed accumsan maximus consequat. Maecenas gravida quam enim, nec facilisis nisi commodo sit amet.
                    </div>
                </div>
            </div>
        </div>
    )
}