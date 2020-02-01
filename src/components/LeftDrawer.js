import React, {Component}from 'react';
import {Drawer,Icon,Collapse,Divider} from 'antd';
import ListComponent from '../containers/ListComponent';
import Icons from './Icons';


const {Panel} = Collapse;
class LeftDrawer extends Component {
            
    render (){
        const customPanelStyle = {
            background: '#ffffff',
            border: 0,
          };
        return(
                <Drawer
                placement={this.props.placement}
                closable={this.props.closable}
                onClose={this.props.onClose}
                visible={this.props.visible}
                >
                     <div className="mt3 w-100 flex flex-row ">
               <input placeholder="Search Products..." type="text" spellcheck="false" className="  black fw4 f4 h3 w-100 bb-1 bl-0 br-0 bt-0 pt4 " style={{outline:'none',textDecoration:'none'}}/>
               <div className="pointer mr-auto self-center hover-black pt4">
                    <Icon type="search" style={{fontSize:'20px',marginLeft:'2px'}}/>
               </div>
               
                        </div>
                        <div className="bg-red mt3">
                            <Collapse
                            accordion
                            bordered={false}
                            key="1"
                            >
                            <Panel header="CATERGORIES" key="1" style={customPanelStyle}>
                                <Collapse
                                accordion
                                bordered={false}
                                key="2"
                                >
                            <Panel header="WOMEN'S" key="2" style={customPanelStyle}>
                                <ListComponent listData={['cat1','cat2','cat3','cat4','cat5','cat6','cat7','cat8','cat9']}/>
                            </Panel>
                            <Panel header="MEN'S" key="3" style={customPanelStyle}>
                            <ListComponent listData={['cat1','cat2','cat3','cat4','cat5','cat6','cat7','cat8','cat9']}/>

                            </Panel>
                            <Panel header="ELECTRONICS" key="4" style={customPanelStyle}>
                            <ListComponent listData={['cat1','cat2','cat3','cat4','cat5','cat6','cat7','cat8','cat9']}/>

                            </Panel>
                            <Panel header="OTHERS" key="5" style={customPanelStyle}>
                            <ListComponent listData={['cat1','cat2','cat3','cat4','cat5','cat6','cat7','cat8','cat9']}/>

                            </Panel>

                                </Collapse>
                            </Panel>
                            <Panel header="WOMEN'S" key="6" style={customPanelStyle}>
                            <Collapse
                                accordion
                                bordered={false}
                                key="3"
                                >
                            <Panel header="CLOTHING" key="7" style={customPanelStyle}>
                            <ListComponent listData={['cat1','cat2','cat3','cat4','cat5','cat6','cat7','cat8','cat9']}/>

                            </Panel>
                            <Panel header="SHOES" key="8" style={customPanelStyle}>
                            <ListComponent listData={['cat1','cat2','cat3','cat4','cat5','cat6','cat7','cat8','cat9']}/>

                            </Panel>
                            <Panel header="ACCESSORIES" key="9" style={customPanelStyle}>
                            <ListComponent listData={['cat1','cat2','cat3','cat4','cat5','cat6','cat7','cat8','cat9']}/>

                            </Panel>

                                </Collapse>
                            </Panel>
                            <Panel header="MEN'S" key="10" style={customPanelStyle}>
                            <Collapse
                                accordion
                                bordered={false}
                                key="4"
                                >
                            <Panel header="CLOTHING" key="11" style={customPanelStyle}>
                            <ListComponent listData={['cat1','cat2','cat3','cat4','cat5','cat6','cat7','cat8','cat9']}/>

                            </Panel>
                            <Panel header="SHOES" key="12" style={customPanelStyle}>
                            <ListComponent listData={['cat1','cat2','cat3','cat4','cat5','cat6','cat7','cat8','cat9']}/>

                            </Panel>
                            <Panel header="ACCESSORIES" key="13" style={customPanelStyle}>
                            <ListComponent listData={['cat1','cat2','cat3','cat4','cat5','cat6','cat7','cat8','cat9']}/>

                            </Panel>

                                </Collapse>
                            </Panel>
                            </Collapse>
                        </div>

                        <div className="mt3 mb2">
                            <ListComponent listData={['BEST SELLERS','SELL','BUY NOW!']}/>
                        </div>
                       
                       <div className="mt6">
                                <Divider className="mt0 mb2"/>
                                <div className="w-100 flex flex-column">
						<div className="f6 black">NEWSLETTER SUBSCRIPTION</div>
						<div className="black-40 tc">
							Sign up for Grabit updates to receive information about new arrivals, future events and
							specials.
						</div>
					</div>
                    <div className="w-100 mt2  flex flex-row justify-between">
						<div className="ba w-70 h-100 b--black-40 ">
							<input
								placeholder="Enter Email Address "
                                type="email"
								style={{outline:'none',border:'none',paddingLeft:'2px',textDecoration:'none',height:'100%',width:'100%',fontSize:'14px'}}
                                onChange = {this.handleEmailInput}
                                spellCheck="false"
								required
							/>
						</div>
						<div className="pointer self-center bgc hover-bg-black hover-white bg-animate ba w-30 h-100 tc justify-center items-center flex ml1 f7 ">Subscribe!</div>
					</div>
                    <div className="w-100 mt4 tc">
							<div className="black pointer  mb2">INFORMATION</div>
							<ListComponent listData={['About Us','Customer Service',"Blog","FAQs",'Contact Us']}/>
							</div>
                            <div className="w-100 mt2 tc">
							<div className="black pointer  mb2">HERE TO HELP</div>
									<div className=" pointer black-40">Have a question?You may also check our FAQs</div>
							<div className="black pointer mt1 mb1">Customer Services</div>
							<div className="flex flex-row items-center pointer">
								<Icon type="phone" style={{color:'black',paddingRight:'3px'}}/>
								<div>Call Us: +256 754579213</div>
							</div>
							<div className="flex flex-row mt2  pointer">
							<Icon type="schedule" style={{color:'black',paddingTop:'5px',paddingRight:'3px'}} />
							<div className="flex ma0 flex-column">
								<div className="balck-40">Mon-Fri: 8:00 am - 7:00 pm</div>
								<div className="balck-40">Sat: 9:00 am - 6:00 pm</div>
								<div className="balck-40">Sun: 9:00 am - 1:00 pm</div>
							</div>
							</div>
							<div className="flex flex-row mt2 items-center pointer">
							<Icon type="mail" style={{color:'black',paddingRight:'3px'}} />
							<div className="balck-40 underline hover-black">Send us an Email</div>
							</div>
							</div>
                            <div className="w-100 mt3 ">
							<div className="black pointer  mb2">FOLLOW US</div>
							<div className="flex pl4  flex-row">
							<div><Icons iconType={['facebook','twitter','google-plus','instagram','slack','github']}/></div>
							<div ><ListComponent listData={['Facebook','Twitter',"Google","Instagram",'slack','github']} /></div>
							</div>
							</div>
                       </div>
                       <Divider className="mb0 mt3 bg-black-40 " />
                       <div className=" w-100 mt2 tc loh ma0">
					<div className-="h-100  flex items-center  w-100">
					© 2020 Grabit Fashion Store . All Rights Reserved. Ecommerce Software by Jemba Tony.
					</div>
					
			</div>
                </Drawer>
        )
    }
}

export default LeftDrawer;