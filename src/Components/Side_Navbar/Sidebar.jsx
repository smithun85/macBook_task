import React, { Children } from 'react'
import { IoMdAdd } from 'react-icons/io'
import { BsPerson } from 'react-icons/bs'
import {AiOutlineFolderOpen} from 'react-icons/ai'
import {GrDocumentUpload} from 'react-icons/gr'
import {CgLaptop, CgNotes} from 'react-icons/cg'
import {CiSettings} from 'react-icons/ci'
import {FiLogOut} from 'react-icons/fi'
import {Link, NavLink } from 'react-router-dom'
import wave from '../../Assets/wave.jpg'

const Sidebar = ({ children }) => {

  const menuItem = [
    {
      path:'/new',
      name:'New',
      icon: <IoMdAdd/>
    },
    {
      path:'/patient',
      name:'Patient',
      icon: <BsPerson/>
    },
    {
      path:'/folder',
      name:'Folder',
      icon: <AiOutlineFolderOpen/>
    },
    {
      path:'/upload',
      name:'Upload',
      icon: <GrDocumentUpload/>
    },
    {
      path:'/report',
      name:'Report',
      icon: <CgNotes/>
    },
    {
      path:'/setting',
      name:'Setting',
      icon: <CiSettings/>
    },
    {
      path:'/logout',
      name:'Logout',
      icon: <FiLogOut/>
    }
  ]

  return (
    <div className="container">
    
      <div className="sidebar">
        <div className="top_section">

          <div className="image">
            <Link to='/'><img src={wave} alt='image'/></Link>
          </div>

        </div>
        
       
        {
          menuItem.map( (item, index) => {
            return (<NavLink to={item.path} key={index} className='link'>
              <div className="icon">{item.icon}</div>
              <div className="link_text">{item.name}</div>
            </NavLink>)  
          })
        }


      </div>
      <main>{ children }</main>
    </div>


  )
}

export default Sidebar