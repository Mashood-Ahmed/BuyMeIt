import React from 'react';
import {FaTimes} from 'react-icons/fa';
import {SideNav, SidebarWrapper, Item, CloseIcon, SubList, SubListWrapper, SubItem, SubItemLink} from './Sidebar.js';

import {Categories, Deals, Settings} from './data.js'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SideNav isOpen={isOpen} onClick={toggle}>
        <SidebarWrapper> 
            <Item onClick={toggle}>
              <CloseIcon isOpen={isOpen}>
                <FaTimes/>
              </CloseIcon>
            </Item>
            <Item>Deals</Item>
            <SubList>
                <SubListWrapper>
                  {Deals
                  .map(data => (
                    <SubItem key={data.id}>
                      <SubItemLink to="/">{data.name}</SubItemLink>
                    </SubItem>
                  ))}
                </SubListWrapper>
            </SubList>
            <Item>Categories</Item>
            <SubList>
                <SubListWrapper>
                  {Categories.map(data => (
                    <SubItem key={data.id}>
                      <SubItemLink to="/products">{data.name}</SubItemLink>
                    </SubItem>
                  ))}
                </SubListWrapper>
            </SubList>
            <Item>Help & Settings</Item>
            <SubList>
                <SubListWrapper>
                  {Settings.map((data, i) => (
                    <SubItem className='settings' key={i}>
                      <SubItemLink to={data.link}>{data.name}</SubItemLink>
                    </SubItem>
                  ))}
                </SubListWrapper>
            </SubList>
        </SidebarWrapper>
    </SideNav>
  )
}

export default Sidebar