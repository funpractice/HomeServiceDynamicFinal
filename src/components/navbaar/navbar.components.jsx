import React , {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa'
import {Nav, NavLogo, NavbarContainer, MobileIcon, NavItem, NavMenu, NavLinks, NavBtn, NavBtnLink, Cart,NavDrop} from "./navbar.styles"
import image from './crown.svg'
import { withRouter } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { animateScroll as scroll } from 'react-scroll';
import MyVerticallyCenteredModal from '../subServiceModal/subServiceModel.component'
import CartModal from '../cart-modal/cart-modal.component';
import AccountDropDown from '../account-dropdown/account-dropdown.components';
import {useHistory,useLocation} from 'react-router-dom';


const Navbar = ( {toggle,history} ) => {
    const [modalShow, setModalShow] = React.useState(false);
    let historylink=useHistory();
//     let  location = useLocation();
//     location = {
        
//         pathname:"/",
      
//         hash: "faq"
//     }
//     useEffect(()=> {
//         if (location.hash) {
//             let elem = document.getElementById(location.hash.slice(1))
//             if (elem) {
//                 elem.scrollIntoView({behavior: "smooth"})
//             }
//         } else {
//         window.scrollTo({top:1000,left:1000, behavior: "smooth"})
//         }
// }, [location,])
    // const [scrollNav, setscrollNav] = useState(false)

    // const changeNav = () => {
    //     if(window.scrollY >= 80){
    //         setscrollNav(true)
    //     }
    //     else{
    //         setscrollNav(false)

    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll',changeNav)
    // }, []);

     function scrollToServices(){
        history.push('/');
        console.log("okay")
        window.scroll({
            top: 2200,
            left:0,
            behavior: 'smooth'
          });
          
    }
    function scrollServices(){
    document.getElementById('faq').scrollIntoView({ 
        behavior: 'smooth' 
      });}
    // let myRef= [];

//     const handleOnClick = (event) => {
//   //.current is verification that your element has rendered
//   console.log(myRef[0]);
//   myRef[0].scrollIntoView(); 
// }

    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    const toggleSignIn = () =>{
        scroll.scrollToTop();
    }

   const signout=()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("customer_id");

    }

    return (   
        <>  
            <Nav /*scrollNav={scrollNav}*/>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}><img src={image} alt='logo' style={{height:"40px"}} /></NavLogo>
                    <MobileIcon onClick={toggle} >
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                            to='/'
                            onClick={e => {
                            e.preventDefault();
                            history.push('/');
                            }}
                            // smooth={true}
                            duration={500}
                            // spy={true}
                            exact='true'
                            offset={-80}
                            >Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                            to='/'
                            onClick={(e) => {e.preventDefault(); scrollToServices()}}
                            smooth={true}
                            duration={600}
                            spy={true}
                            exact='true'
                            offset={-120}
                            >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            onClick={(e) => {e.preventDefault(); history.push('/')}}
                            to='about'
                            smooth={true}
                            duration={700}
                            spy={true}
                            exact='true'
                            offset={-65}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            onClick={(e) => {e.preventDefault(); history.push('/')}}
                            to='faq'
                            smooth={true}
                            duration={800}
                            spy={true}
                            exact='true'
                            offset={-65}
                            >FAQ</NavLinks>
                        </NavItem>
                        <NavItem>
                            {/* <NavLinks 
                            onClick={(e) => {e.preventDefault(); history.push('/')}}
                            to='contact'
                            smooth={true}
                            duration={900}
                            spy={true}
                            exact='true'
                            offset={-55}
                            >Contact</NavLinks> */}
                        </NavItem>
                            {/* <NavLinks to='/#faq' >projects</NavLinks> */}
                      
                        {localStorage.getItem("token")!==null?<AccountDropDown />:<div></div>}

                    </NavMenu>
                    <NavBtn>
                        {
                            localStorage.getItem("token")===null? <NavBtnLink to='signin' onClick={toggleSignIn}>Sign In</NavBtnLink> :<NavBtnLink to='/' onClick={signout}>Sign out</NavBtnLink>
                        }
                       
                        
                           { 
                           localStorage.getItem("token")!==null?<Cart >
                    <ShoppingCartOutlinedIcon 
                    onClick={() =>localStorage.getItem("token")===null ?historylink.push("/signin") :setModalShow(true)}/>
                    <CartModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    /></Cart>:<div></div>
                }
                        
                    
                    </NavBtn>
                </NavbarContainer>
            </Nav>
{/*             
               <div style={{scrollBehavior: "smooth!important"}}>
            <h1 ><a href="/#contact">hi</a></h1>

               </div>              */}
         
            {/* <h1 ref={(ref) => { myRef[0] = ref }}>he</h1> */}
        </>
    )
}

export default withRouter(Navbar);
