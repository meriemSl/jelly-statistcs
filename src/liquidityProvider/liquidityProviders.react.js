
import React, {useState ,useEffect } from "react";
import axios, * as others from 'axios';
import {
 
  Card,
  Page,
  Grid,
  Form
} from "tabler-react";
import SiteWrapper from ".././SiteWrapper.react";
import C3Chart from "react-c3js";
import c3 from "c3";


class LiquidityProviders extends React.Component { 


  constructor(props) {
    super(props);
    this.state = {value: '' , balances : [ ] , data: []};
    
    this.handleChange = this.handleChange.bind(this);
   
  }
  async renderChart(event) {
    try { 
      var self = this;
    (function() {
        self.chart = c3.generate({
        bindto: "#pie1",
        data : {
          columns: self.state.balances,
          type: 'pie',

        },
        pie : {
          // max: this.limit,
          label: {
            ratio : 2, 
            format: function (value, ratio,id) {
              return id;
            }
          },
          
        },
      });
    })();
  }catch(error)
   { console.log(error)}
 
  }
  async handleChange(event) {

    try { 

      this.setState({value: event.target.value});

       this.state.balances.length = 0 ;
      this.setState({balances:[]});
      // console.log(this.state.balances)
      switch (event.target.value)
       {
        case 'ETH' :
           this.state.balances.push( [this.state.data.balances.ETH.address,parseFloat(this.state.data.balances.ETH.balanceShort) ])
        break;  
       
        case 'BTC' :
           this.state.balances.push( [this.state.data.balances.BTC.address ,parseFloat(this.state.data.balances.BTC.balanceShort)] ) 
        break;
        case 'AE' :
          this.state.balances.push( [this.state.data.balances.AE.address ,parseFloat(this.state.data.balances.AE.balanceShort)] ) 
        break;
        case 'DAI' :
          this.state.balances.push( [this.state.data.balances.DAI.address ,parseFloat(this.state.data.balances.DAI.balanceShort)] ) 
        break;
        default :
        console.log('default')
        this.state.balances.push([this.state.data.balances.ETH.balanceShort , parseFloat(this.state.data.balances.ETH.address)] );
    }

    this.renderChart()

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
     console.log('la'+this.state.balances)
     this.renderChart()
  }
  
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
                  <option value="DAI">DAI</option>
                </Form.Select>
              </Form.Group>
              <div id="pie1"></div>
                   
             </Card.Body>
          </Card>
      </Grid.Row>
       </Page.Content>     
   </SiteWrapper>
  )}


}

export default LiquidityProviders;