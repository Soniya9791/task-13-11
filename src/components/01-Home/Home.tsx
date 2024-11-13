import React from 'react';
import "../01-Home/Home.css";

const Home: React.FC = () => {
    return (
        <div className="home-container">
            {/* Search Bar */}
            <div className="homegroup">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="homesearch-icon">
                    <g>
                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                    </g>
                </svg>
                <input
                    id="query"
                    className="homeinput"
                    type="search"
                    placeholder="Search..."
                    name="searchbar"
                />
            </div>

            {/* Cards Section */}
            <div className="homecards-container ">
                <div className="homecard">
                    <img src="https://i.pinimg.com/236x/ad/01/2f/ad012f82a3f34d0bc459d9106b44e084.jpg" alt="Item 1" className="homecard-image" />
                    <h3>Vegetables</h3>
                  
                </div>
                <div className="homecard">
                    <img src="https://i.pinimg.com/236x/18/2b/4f/182b4f49029a889e493c8527acf57699.jpg   " alt="Item 2" className="homecard-image" />
                    <h3>Women dress</h3>
                    
                </div>
                <div className="homecard">
                    <img src="https://i.pinimg.com/236x/c2/33/16/c23316afbc663d24d722d8588de2f926.jpg" alt="Item 3" className="homecard-image" />
                    <h3>Cosmetics</h3>
                   
                </div>
                <div className="homecard">
                    <img src="https://i.pinimg.com/236x/a3/39/a5/a339a5b05541aceba1804a0521a7ad21.jpg" alt="Item 3" className="homecard-image" />
                    <h3>Men dress</h3>
                   
                </div>
                <div className="homecard">
                    <img src="https://i.pinimg.com/736x/53/0b/73/530b73b40dbb92fb2c247b1f6c5ef76a.jpg" alt="Item 3" className="homecard-image" />
                    <h3>Electronics</h3>
                   
                </div>
                <div className="homecard">
                    <img src="https://i.pinimg.com/474x/89/44/65/894465bfcf59dcac7d3a5d52b20f2b3f.jpg" alt="Item 3" className="homecard-image" />
                    <h3>fruits</h3>
                   
                </div>
               
            </div>


            <div className="homecards-container1 ">
                <div className="homecard1">
                    <img src="https://i.pinimg.com/236x/ad/01/2f/ad012f82a3f34d0bc459d9106b44e084.jpg" alt="Item 1" className="homecard-image" />
                    <h3>Vegetables</h3>
                  
                </div>
               
               
            </div>

        </div>
    );
};

export default Home;
