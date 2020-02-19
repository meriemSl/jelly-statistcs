
import React, {useState ,useEffect } from "react";
import axios from "axios";
import {
 
  Card,
  Page,
  Grid,
  colors,
} from "tabler-react";
import SiteWrapper from ".././SiteWrapper.react";
import C3Chart from "react-c3js";

class LiquidityProviders extends React.Component { 


  constructor(props) {
    super(props);
    this.state = {balances : [] , data: []};
    
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
           this.state.balances.push( ["eth", ((res.data.balances.ETH.balanceShort * res.data.prices.ETH.USDT )/0.994) ])
           this.state.balances.push( ["dai", ((res.data.balances.DAI.balanceShort * res.data.prices.DAI.USDT )/0.994) ])
           this.state.balances.push( ["AE", ((res.data.balances.AE.balanceShort * res.data.prices.AE.USDT )/0.994) ])
           this.state.balances.push( ["BTC", ((res.data.balances.BTC.balanceShort * res.data.prices.BTC.USDT )/0.994) ])
           this.setState({ balances : this.state.balances }) 
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
                
                  <C3Chart 

                      style={
                             { height: "20rem"   }}
                      data={{
                        columns: this.state.balances,
                        type: "pie", 
                       
                      }}
                      legend={{
                        show: true, //hide legend
                        position: 'right'
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