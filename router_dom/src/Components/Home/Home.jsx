import "./Home.css"
export function Home(){
    return(
        <>
            <section class="hero">
        <div class="hero-content">
            <h2>Welcome to Delicious Recipes!</h2>
            <p>Your go-to place for tasty and easy-to-follow recipes!</p>
            <input type="text" placeholder="Search recipes..." class="search-bar"/>
        </div>
    </section>

    
    <section class="featured-recipes">
        <h2>Featured Recipes</h2>
        <div class="recipes">
            <div class="recipe-card">
                <img src="https://cdn.dummyjson.com/recipe-images/1.webp" alt="Recipe 1"/>
                <h3>Classic Margherita Pizza</h3>
                <p>A delicious recipe you will love to try!</p>
            </div>
            <div class="recipe-card">
                <img src="https://cdn.dummyjson.com/recipe-images/11.webp" alt="Recipe 2"/>
                <h3>Chicken Briyani</h3>
                <p>A mouthwatering dish to impress your guests.</p>
            </div>
            <div class="recipe-card">
                <img src="https://cdn.dummyjson.com/recipe-images/18.webp" alt="Recipe 3"/>
                <h3>Korean Bibimbap</h3>
                <p>Perfect for a cozy family dinner.</p>
            </div>
            <div class="recipe-card">
                <img src="https://cdn.dummyjson.com/recipe-images/7.webp" alt="Recipe 3"/>
                <h3>Tomato Basil Bruschetta</h3>
                <p>A delicious recipe you must try</p>
            </div>
        </div>
    </section>
        </>
    )
}