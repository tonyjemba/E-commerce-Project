import React, { Component } from 'react';
import {Icon} from 'antd';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import ProductImage from '../components/ProductImage';
import ProductDescription from '../components/ProductDescription';
// import styled,{keyframes}from 'styled-components'
import '../css/componentScroll.css';
import '../media/homeproduct_media.css';



// class HomeProductScroll extends Component {

//   constructor(){
//     super();
//     this.state = {
//       scroll:'running'
//     }
//   }
//    Autoscroll =styled.div`
//   .card{
//    animation: ${this.move} 10s linear ${this.state.scroll} alternate-reverse infinite

//   }
// `
//   change = () => this.setState({scroll:'paused'});

//   // back = () => this.setState({scroll:'running'});

//   componentDidMount(){
//     setInterval(this.change,5000);
//   }
 
     
//   render(){
    
//     return(
//      alert(this.state.scroll)
//     )
//   }
   
// }


//  export default HomeProductScroll
// list of items
const list = [
  { name: 'item1' },
  { name: 'item2' },
  { name: 'item3' },
  { name: 'item4' },
  { name: 'item5' },
  { name: 'item6' },
  { name: 'item7' },
  { name: 'item8' },
  { name: 'item9' }
];
 
// One item component
// selected prop will be passed
const MenuItem = ({ selected}) => {
  return <div
    className={`menu-item `}
    >
     {/* pass in props fro their contents could use ie list array */}
      <ProductImage/>
      <ProductDescription/>
    </div>;
};
 
// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const {name} = el;
    return <MenuItem  key={name} selected={selected} />
      
    
  });
 
 
const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};
 
 
const ArrowLeft = Arrow({ text: <Icon type="left" />, className: 'arrow-prev hover-black' });
const ArrowRight = Arrow({ text:<Icon type="right"  />, className: 'arrow-next hover-black' });
 
const selected = 'item1';
 
export default class HomeProductScroll extends Component {
  constructor(props) {
    super(props);
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }
 
  state = {
    selected
  };
 
  onSelect = key => {
    this.setState({ selected: key });
  }
 
 
  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;
 
    return (
      <div >
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
          alignCenter
        />
      </div>
    );
  }
}