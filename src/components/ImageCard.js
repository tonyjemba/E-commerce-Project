import React from 'react';
import ListComponent from '../containers/ListComponent';
import styled from 'styled-components';
import '../css/imagecard.css';
import '../media/imagecard_media.css';

const ImageCard = ({ image, links, category }) => {
	return (
		<HoverEffects className="size imagecontainer">
			{/* passing image as prop */}
			<img src={image} alt="commodity" />
			<div className=" bg-white-80 disaper transparent ba b--black-30 animated faster flex justify-center zoom zomOut cat-selection">
				<div className=" flex tc w-80 flex-column justify-center">
					<div>{category}</div>
					<ListComponent listData={links}  />
				</div>
			</div>
			<div className=" cat-name stopanime flex items-center justify-center f5 pointer zomOut2 zoom2 animated faster tc bg-white-80 transparent  ">{category}</div>
		</HoverEffects>
	);
};

const HoverEffects = styled.div`
//styled components
.animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .animated.faster {
    -webkit-animation-duration: 500ms;
    animation-duration: 500ms;
  }
@-webkit-keyframes zomOut {
    from {
      opacity: 1;
    }
  
    50% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
  
    to {
      opacity: 0;
    }
  }
  
  @keyframes zomOut {
    from {
      opacity: 1;
    }
  
    50% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
  
    to {
      opacity: 0;
    }
  }
  
  .zomOut {
    -webkit-animation-name: zomOut;
    animation-name: zomOut;
  }  
  @-webkit-keyframes zoom2 {
    from {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
  
    50% {
      opacity: 1;
    }
  }
  
  @keyframes zoom2 {
    from {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
  
    50% {
      opacity: 1;
    }
  }
.zoom2 {
    -webkit-animation-name: zoom2;
    animation-name: zoom2;
  }
:hover{
    .animated {
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
      }
      .animated.faster {
        -webkit-animation-duration: 500ms;
        animation-duration: 500ms;
      }
      
      @-webkit-keyframes zoom {
        from {
          opacity: 0;
          -webkit-transform: scale3d(0.3, 0.3, 0.3);
          transform: scale3d(0.3, 0.3, 0.3);
        }
      
        50% {
          opacity: 1;
        }
      }
      
      @keyframes zoom {
        from {
          opacity: 0;
          -webkit-transform: scale3d(0.3, 0.3, 0.3);
          transform: scale3d(0.3, 0.3, 0.3);
        }
      
        50% {
          opacity: 1;
        }
      }
    .zoom {
        -webkit-animation-name: zoom;
        animation-name: zoom;
      }
      
@-webkit-keyframes zomOut2 {
    from {
      opacity: 1;
    }
  
    50% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
  
    to {
      opacity: 0;
    }
  }
  
  @keyframes zomOut2 {
    from {
      opacity: 1;
    }
  
    50% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
  
    to {
      opacity: 0;
    }
  }
  
  .zomOut2 {
    -webkit-animation-name: zomOut2;
    animation-name: zomOut2;
  } 
    }
}
`;
export default ImageCard;
