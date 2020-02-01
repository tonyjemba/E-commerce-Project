import React, { Component } from 'react';
import {Icon} from 'antd';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import '../css/brand.css';
 
// list of items
const list = [
  { name: 'brand1' },
  { name: 'brand2' },
  { name: 'brand3' },
  { name: 'brand4' },
  { name: 'brand5' },
  { name: 'brand6' },
  { name: 'brand7' },
  { name: 'brand8' },
  { name: 'brand9' }
];
 
// One item component
// selected prop will be passed
const MenuItem = ({text, selected}) => {
  return <div
    className={`itemStyle ${selected ? 'active' : ''}`}
    >{text}</div>;
};
 
// All items component
// Important! add unique key
export const Menu = (list, selected) =>
  list.map(el => {
    const {name} = el;
 
    return <MenuItem text={name} key={name} selected={selected} />;
  });
 
 
const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};
 
 
const ArrowLeft = Arrow({ text: <Icon type="left"/>, className: 'arrow-prev hover-black' });
const ArrowRight = Arrow({ text: <Icon type="right" />, className: 'arrow-next hover-black' });
 
const selected = 'item1';
 
export default class Brand extends Component {
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
      <div className="App">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}