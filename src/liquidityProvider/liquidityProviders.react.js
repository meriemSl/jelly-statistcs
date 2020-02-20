
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
import d3 from "d3" ;
class LiquidityProviders extends React.Component { 


  constructor(props) {
    super(props);
    this.state = {value: "ETH" , balances : [] , data: [] , ETH:'ETH' , total : 0};
    
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
        color: {
          pattern: ['#1ca2b8', '#1ca2b8', '#1ca2b8', '#1ca2b8'],
          threshold: {
            values: [30, 60, 90, 100]
          }
        },
        legend : {
          show: false, //hide legend
          position: 'right'
        },
        pie : {
          // max: this.limit,
          label: {
            ratio : 2, 
            format: function (value, ratio,id) {
              value = (value)+self.state.value;
              return [id,value].join(); 
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
      this.state.value=event.target.value
      this.state.balances.length = 0 ;

        
           this.state.balances.push( [this.state.data.balances[event.target.value].address,parseFloat(this.state.data.balances[event.target.value].balanceShort) ])
           this.state.total = parseFloat(this.state.data.balances[event.target.value].balanceShort)
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
           this.state.balances.push( [this.state.data.balances[this.state.ETH].address,parseFloat(this.state.data.balances.ETH.balanceShort) ])
           this.setState({ balances : this.state.balances }) 
           this.setState({ total : parseFloat(this.state.data.balances.ETH.balanceShort) }) 
     })
    //  this.state.totale = parseFloat(this.state.data.balances.ETH.balanceShort)
     console.log(this.state.balances)
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
                  <option value="DAI">WBTC</option>
                </Form.Select>
              </Form.Group>
              <span>
                <h5>Total tokens:</h5> {this.state.total} 
              </span>
              <div id="pie1"></div>
                   
             </Card.Body>
          </Card>
      </Grid.Row>
       </Page.Content>     
   </SiteWrapper>
  )}


}

export default LiquidityProviders;