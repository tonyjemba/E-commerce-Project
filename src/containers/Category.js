import React from 'react';
import ImageCard from '../components/ImageCard';
import '../css/category.css'
import '../media/category_media.css';



const Category = ({category}) => {
    return(
        <div >
            {/* <ImageCard width={"370px"} height={"270px"}  >
            <div className="cat_name">{category}</div>

            </ImageCard> */}
          <div className="gridContainer">
             <ImageCard links={["click","here","to","redirect"]} category="FROM DB"/>
             <ImageCard links={["passed","as","props"]} category="MEN"/>
             <ImageCard links={["dynamic","data","from","datatbase"]} category="ACCESSORIES"/>
          </div>

        </div>
    )
}

export default Category;