import * as React from "react";

import {
  Page,
  Icon,
  Grid,
  Card,
  Text,
  Table,
  Progress,
  Dropdown,
  StatsCard,
} from "tabler-react";
import axios from "axios";
import SiteWrapper from ".././SiteWrapper.react";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { prices : [] , bitcoin :'' , eth :'' , dai:'' ,trx :'' ,ae:'', usdt:'' };
    
   
  }
  async componentDidMount()
  {
  
   await axios.get('https://spacejelly.network/price/')
    .then(res => {
     console.log(res.data)
     this.setState({prices : res.data})
     this.setState({bitcoin :Number(parseFloat(res.data.BTC.USDT).toFixed(2)) })
     this.setState({eth : Number(parseFloat(res.data.ETH.USDT).toFixed(5)) })
     this.setState({dai : Number(parseFloat(res.data.DAI.USDT).toFixed(5)) })
     this.setState({trx : Number(parseFloat(res.data.TRX.ETH).toFixed(5)) })
     this.setState({ae :  Number(parseFloat(res.data.AE.USDT).toFixed(5))})
     this.setState({usdt :  Number(parseFloat(res.data.USDT.USDT).toFixed(5)) })
     console.log(this.state.prices)
     
         })      
  }


render() {
  return (
    <SiteWrapper>
      <Page.Content title="Dashboard">
     
        <Grid.Row cards={true} >
          <Grid.Col width={6} sm={4} lg={2}>
            <StatsCard layout={1} movement={6} total={this.state.bitcoin} label="price Bitcoin" />
          </Grid.Col>
          <Grid.Col width={6} sm={4} lg={2}>
            <StatsCard
              layout={1}
              movement={-3}
              total={this.state.eth}
              label="ETH"
            />
          </Grid.Col>
          <Grid.Col width={6} sm={4} lg={2}>
            <StatsCard
              layout={1}
              movement={-2}
              total={this.state.dai}
              label="DAI"
            />
          </Grid.Col>
          <Grid.Col width={6} sm={4} lg={2}>
            <StatsCard layout={1} movement={9} total={this.state.trx} label="TRX" />
          </Grid.Col>
          <Grid.Col width={6} sm={4} lg={2}>
            <StatsCard
              layout={1}
              movement={3}
              total={this.state.ae}
              label="AE"
            />
          </Grid.Col>
        
          <Grid.Col width={6} sm={4} lg={2}>
            <StatsCard layout={1} movement={-1} total={this.state.usdt} label="USDT" />
          </Grid.Col>
          <Grid.Col lg={6}>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row cards deck>
          <Grid.Col width={12}>
            <Card>
              <Table
                responsive
                highlightRowOnHover
                hasOutline
                verticalAlign="center"
                cards
                className="text-nowrap"
              >
                <Table.Header>
                  <Table.Row>
                    <Table.ColHeader alignContent="center" className="w-1">
                      <i className="icon-people" />
                    </Table.ColHeader>
                    <Table.ColHeader>User</Table.ColHeader>
                    <Table.ColHeader>Usage</Table.ColHeader>
                    <Table.ColHeader alignContent="center">
                      Payment
                    </Table.ColHeader>
                    <Table.ColHeader>Activity</Table.ColHeader>
                    <Table.ColHeader alignContent="center">
                      Satisfaction
                    </Table.ColHeader>
                    <Table.ColHeader alignContent="center">
                      <i className="icon-settings" />
                    </Table.ColHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Col>
                      <div>Elizabeth Martin</div>
                      <Text size="sm" muted>
                        Registered: Mar 19, 2018
                      </Text>
                    </Table.Col>
                    <Table.Col>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>42%</strong>
                        </div>
                        <div className="float-right">
                          <Text.Small muted>
                            Jun 11, 2015 - Jul 10, 2015
                          </Text.Small>
                        </div>
                      </div>
                      <Progress size="xs">
                        <Progress.Bar color="yellow" width={42} />
                      </Progress>
                    </Table.Col>
                    <Table.Col alignContent="center">
                      <Icon payment name="visa" />
                    </Table.Col>
                    <Table.Col>
                      <Text size="sm" muted>
                        Last login
                      </Text>
                      <div>4 minutes ago</div>
                    </Table.Col>
                    <Table.Col alignContent="center">42%</Table.Col>
                    <Table.Col alignContent="center">
                      <Dropdown
                        trigger={
                          <Dropdown.Trigger
                            icon="more-vertical"
                            toggle={false}
                          />
                        }
                        position="right"
                        items={
                          <React.Fragment>
                            <Dropdown.Item icon="tag">Action </Dropdown.Item>
                            <Dropdown.Item icon="edit-2">
                              Another action{" "}
                            </Dropdown.Item>
                            <Dropdown.Item icon="message-square">
                              Something else here
                            </Dropdown.Item>
                            <Dropdown.ItemDivider />
                            <Dropdown.Item icon="link">
                              {" "}
                              Separated link
                            </Dropdown.Item>
                          </React.Fragment>
                        }
                      />
                    </Table.Col>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card>
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
        
        </Grid.Row>
      </Page.Content>
    </SiteWrapper>
  );
 }
}

export default Home;
