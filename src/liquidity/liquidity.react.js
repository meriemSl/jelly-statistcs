
import React from "react";
import axios from "axios";
import {
 
  Card,
  Page,
  Grid,
} from "tabler-react";
import SiteWrapper from ".././SiteWrapper.react";
import C3Chart from "react-c3js";
import d3 from "d3"

class LiquidityProviders extends React.Component { 


  constructor(props) {
    super(props);
    this.state = {balances : [] , data: [], total:0  , tokens : ["ETH" ,"BTC" , "AE" , "DAI" , "WBTC"]}; 
    this.handleChange = this.handleChange.bind(this);
   
  }



  async handleChange(event) {

    try { 
    this.setState({value: event.target.value});
     
    
   
    
    
 
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
           console.log(this.state.tokens.length)
           for ( var i = 0 ; i < this.state.tokens.length ; i++)
           {   
             console.log('lal')
             this.state.balances.push( [this.state.tokens[i], ((res.data.balances[this.state.tokens[i]].balanceShort * res.data.prices[this.state.tokens[i]].USDT )/res.data.prices.USDT.USDT) ])
             this.state.total += ((res.data.balances[this.state.tokens[i]].balanceShort * res.data.prices[this.state.tokens[i]].USDT )/res.data.prices.USDT.USDT)
            }
  
           this.setState({ balances : this.state.balances }) 
           this.setState ({ total : this.state.total})
     })
     console.log(this.state.balances)
  }

render() {

  return (
        
  <SiteWrapper>
      <Page.Content style={ {backgroundColor: 'blue' }}>
      <Grid.Row cards={true}>
           
           <Card > 
                  <Card.Header>
                    <Card.Title>Liquidity value in dollar </Card.Title>
                  </Card.Header>
                  <Card.Body>
                  <span>
                   <h5>Total tokens:</h5> {this.state.total} $ 
                 </span>
                  <C3Chart 

                      style={
                             { height: "20rem",
                               margin : "20px"  ,
                              
                            }}
                      data={{
                        columns: this.state.balances,
                        type: "pie", 
                       
                      }}
                      colors ={{
                        pattern:   ['#0065A3', '#767670', '#D73648', '#7FB2CE', '#00345B']
                       }}

                      legend={{
                        show: true, //hide legend
                        position: 'bottom'
                      }}
                      pie ={ {
                        // max: this.limit,
                        label: {
                          threshold: 0.02,
                          ratio : 2.1, 
                          format: function (value, ratio,id) {
                            // value = (parseFloat(self.state.data.balances[this.state.ETH].USDT )/0.994) 
                            value = "$" + Number(value).toFixed(2);
                            return [id,value].join(); 
                          },
                          position: 'outer-middle'
                        },
                        
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