
import { Divider, Menu, Segment } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

export function WarehouseMenu() {
 

    return (<div>
         <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name='posts'            
            content="Klientų sąrašas"
              as={NavLink}
              exact
              to="/"
          />
          <Menu.Item
            name='new'
            content="Kurti naują Klientą"
              as={NavLink}
              exact
              to="/create"
          /> 
          <Menu.Item
            name='new'
            content="Statistika"
              as={NavLink}
              exact
              to="/statistic"
          />             
        </Menu>
      </Segment>
      <Divider hidden></Divider>            
    </div>);
}
