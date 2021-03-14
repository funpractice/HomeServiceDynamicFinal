import React from 'react'
import AccountDropDown from '../account-dropdown/account-dropdown.components'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarRoute, SidebarWrapper, SideBtnWrap, SidebarMenu } from './sidebar.styles'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import CartModal from '../cart-modal/cart-modal.component';
import {useHistory} from 'react-router-dom';
import { Cart } from '../navabar/navbar.styles';

const Sidebar = ({isOpen, toggle}) => {
    const [modalShow, setModalShow] = React.useState(false);

    let historylink=useHistory();
    const signout=()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("customer_id");

    }
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='home' onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='faq' onClick={toggle}>FAQ</SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>Contact</SidebarLink>
                    {localStorage.getItem("token")!==null?<AccountDropDown />:<div></div>}
                    

                    {/* <SidebarLink to='signup' onClick={toggle}>Sign Up</SidebarLink> */}
                { 
                           localStorage.getItem("token")!==null?<Cart 
                    style={{fontSize:"1.5rem"}}
                           >Cart
                    <ShoppingCartOutlinedIcon 
                    style={{paddingLeft:"10px", fontSize:35, marginRight:"25px"}}
                    onClick={() =>localStorage.getItem("token")===null ?historylink.push("/signin") :setModalShow(true)}/>
                    <CartModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    /></Cart>:<div></div>
                }
                </SidebarMenu>
                <SideBtnWrap>
                    {localStorage.getItem("token")===null? <SidebarRoute to='signin'>Sign In</SidebarRoute>:<SidebarRoute to='/' onClick={signout}>Sign out</SidebarRoute>}
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
