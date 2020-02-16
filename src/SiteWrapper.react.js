import * as React from "react";
import { NavLink, withRouter } from "react-router-dom";
import {
  Site,
  Nav,
  Grid,
  List,
  Button,
  RouterContextProvider,
} from "tabler-react";


const navBarItems: Array<navItem> = [
  {
    value: "dashboard ",
    to: "/",
    icon: "home",
    LinkComponent: withRouter(NavLink),
    useExact: true,
  },

  {
    value: "liquidityProviders",
    to: "/liquidityProviders",
    icon: "check-square",
    LinkComponent: withRouter(NavLink),
    useExact: true,
  },
  
  {
    value: "liquidity ",
    to: "/liquidity",
    icon: "check-square",
    LinkComponent: withRouter(NavLink),
  },

 
];


class SiteWrapper extends React.Component {
  state = {};

  render(): React.Node {
   
    
    return (
      <Site.Wrapper
        headerProps={{
          href: "/",
          alt: "Tabler React",
          imageURL: "./images/jelly.png",  
        }}
        
        navProps={{ itemsObjects: navBarItems }}
        routerContextComponentType={withRouter(RouterContextProvider)}
        footerProps={{
          links: [
            <a href="/">First Link</a>,
            <a href="/">Second Link</a>,
            <a href="/">Third Link</a>,
          ],
          copyright: (
            <React.Fragment>
              Copyright © 2020
              <a href="."> Jelly dashboard</a>. Theme by
              All rights reserved.
            </React.Fragment>
          ),
          nav: (
            <React.Fragment>
              <Grid.Col auto={true}>
                <List className="list-inline list-inline-dots mb-0">
                  <List.Item className="list-inline-item">
                    <a href="./docs/index.html">Documentation</a>
                  </List.Item>
                </List>
              </Grid.Col>
             
            </React.Fragment>
          ),
        }}
      >
        {this.props.children}
      </Site.Wrapper>
    );
  }
}

export default SiteWrapper;
