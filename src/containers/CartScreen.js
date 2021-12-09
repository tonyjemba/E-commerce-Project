import React,{Component} from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import '../css/CartScreen.css';

class CartScreen extends Component{

    constructor (props) {
        super(props);
        this.state = { country: '',
                        region: '',
                        zipcode:''
                     };
      }

      handleZipCode = (event) => {
		this.setState({zipcode: event.target.value});
	}  
  selectCountry  = (val) => {
    this.setState({ country: val });
  }
 
  selectRegion = (val) => {
    this.setState({ region: val });
  }
    render(){
        const { country, region } = this.state;
        return(
            <div>
                <div className="ml3 mt2 "><span className="pointer hover-black">Home</span> / Cart</div>
                <div className="w-100 tc f3 black fw5">Cart</div>

                <div className="flex flex-row pa2">
                    <div>table</div>
                    <div className="flex flex-column contbg">
                        <div className="black mt1 mb2">CART TOTAL</div>
                        <div className="black ">Estimate Shipping and TAX</div>
                        <div className="black-70 ">Enter your destination to get a shipping estimate.</div>
                        <div className="black">COUNTRY*</div>
                        <div className="flex flex-column">
                         <CountryDropdown
                            value={country}
                            onChange={(val) => this.selectCountry(val)} />

                        <div className="black">REGION*</div>

                            <RegionDropdown
                            country={country}
                            value={region}
                            onChange={(val) => this.selectRegion(val)} />
                        </div>
                        <div className="black">ZIP/POSTAL CODE*</div>
                        <div>
                        <input
								placeholder="ZIP/POSTAL CODE "
                                type="text"
								// style={{outline:'none',border:'none',paddingLeft:'5px',textDecoration:'none',height:'10%',width:'100%'}}
								onChange = {this.handleZipCode}
								required
                                spellCheck="false"
                                className="outline-0 no-underline b--none ba w-100"
							/>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default CartScreen;
