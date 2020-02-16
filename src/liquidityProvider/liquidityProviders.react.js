
import React, {useState ,useEffect } from "react";
import axios from "axios";
import {
 
  Card,
  Page,
  Grid,
  Form
} from "tabler-react";
import SiteWrapper from ".././SiteWrapper.react";
import C3Chart from "react-c3js";

class LiquidityProviders extends React.Component { 


  constructor(props) {
    super(props);
    this.state = {value: '' , balances : [] , data: []};
    
    this.handleChange = this.handleChange.bind(this);
   
  }

  //  var [data, setData] = useState([])
  //  var [balances, setBalances] = useState([ {name: 'www.site1.com', upload: 200, download: 200, total: 400},
  //                                           {name: 'www.site2.com', upload: 100, download: 300, total: 400},
  //                                           {name: 'www.site3.com', upload: 300, download: 200, total: 500},
  //                                           {name: 'www.site4.com', upload: 400, download: 100, total: 500}]);
  //  var [ dataPoint1,setDataPoint1 ] =useState([]);

  async handleChange(event) {

    try { 
     

    
    this.setState({value: event.target.value});
    this.state.balances = []
    // this.setState({balances:[]});
    switch (event.target.value)
    {
      case 'ETH' :
        console.log('ETH')
        
        this.state.balances.push( [this.state.data.balances.ETH.address,parseFloat(this.state.data.balances.ETH.balanceShort) ])
        console.log(this.state.balances)
        
  
        break;  
     case 'BTC' :
        console.log('btc')
        this.state.balances.push( [this.state.data.balances.BTC.address ,parseFloat(this.state.data.balances.BTC.balanceShort)] ) 
        this.setState({balances: this.state.balances  })
        console.log(this.state.balances)
      
        break;
      case 'AE' :
        console.log('AE')
       this.state.balances.push( [this.state.data.balances.AE.address ,parseFloat(this.state.data.balances.AE.balanceShort)] ) 
       
       console.log(this.state.balances)  
      break;
        default :
        console.log('default')
        this.state.balances.push([this.state.data.balances.ETH.balanceShort , parseFloat(this.state.data.balances.ETH.address)] );
    }
    
    // 78/*425
    // console.log(this.state.balances)
 
     }catch(error)
       {
         console.log(error)
       }




  }

  async componentDidMount()
  {
     await axios.get('https://spacejelly.network/listener/provider/info')
     .then((res) => {
           this.setState({ data: res.data})
           this.state.balances.push( [this.state.data.balances.ETH.address,parseFloat(this.state.data.balances.ETH.balanceShort) ])
           this.setState({ balances : this.state.balances }) 
     })
     console.log(this.state.balances)
  }

  
//  async  getPrice()
//    {
//        try {
//         await axios.get('https://spacejelly.network/listener/provider/info')
//      .then((res) => {
//            this.setState({ data : res.data})
         
          
//      })
//      //console.log(balances)
//        } catch (error) {
//            console.log(error)
//        }

//  }




    render() {
      return (
  <SiteWrapper>
      <Page.Content title="Liquidity provider">
      <Grid.Row cards={true}>
           
           <Card>
                  <Card.Header>
                    <Card.Title>Providers by tokens </Card.Title>
                  </Card.Header>
                  <Card.Body>
                  <Form.Group 
               label="Currency" >
                <Form.Select value={this.state.value} onChange={this.handleChange} >
                  <option value="ETH" >ETH</option>
                  <option value="BTC">BTC</option>
                  <option value="AE">AE</option>
                </Form.Select>
              </Form.Group>
                  <C3Chart
                      style={{ height: "20rem" }}
                      data={{
                        columns: this.state.balances,
                        type: "pie", // default type of chart
                        // keys: {
                        //   // x: 'name', // it's possible to specify 'x' when category axis
                        //   value: [name,'total']
                        // }
                      }}
                      legend={{
                        show: false, //hide legend
                      }}
                      padding={{
                        bottom: 0,
                        top: 0,
                      }}
                    />
                  
             </Card.Body>
          </Card>
      </Grid.Row>
       </Page.Content>     
   </SiteWrapper>
  )}


}

export default LiquidityProviders;