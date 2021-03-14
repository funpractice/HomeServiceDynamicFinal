import React from 'react'
import Profile from '../../components/porfile/profile.component'
import Navbar from '../../components/navabar/navbar.components'
import Footer from '../../components/footer/footer.components'
import Login from '../../components/login/login.component'


const ProfilePage = () => {
    if(localStorage.getItem("token")===null){
        return (
            <div>
             
                <Login/>
              
            </div>
        )
    }else{
        return (
            <div>
                <Navbar />
                <Profile />
                <Footer />
            </div>
        )
    }
   
}

export default ProfilePage
