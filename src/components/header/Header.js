import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import "./style.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assests/movix-logo.svg";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const openSearch = ()=>{
    setMobileMenu(false);
    setShowSearch(true);
  }

  const openMobileMenu = ()=>{
    setMobileMenu(true);
    setShowSearch(false);
  }

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo">
          <img src={logo} alt=""/>
        </div>
        <ul className="menuItems">
          <li className="menuItem" 
            onClick={()=>navigate("")}>
            Movies
          </li>
          <li className="menuItem">TV Shows</li>
          <li className="menuItem">
            <HiOutlineSearch/>
          </li>
        </ul>

        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={()=> setMobileMenu(false)}/>
          {
            mobileMenu ? <VscChromeClose/> : <SlMenu onClick={openMobileMenu}/>
          }
        </div>
      </ContentWrapper>
      <div className="searchBar">
        <ContentWrapper>
        <div className="searchBar">
          <ContentWrapper>
              <div className="searchInput">
                  <input
                      type="text"
                      placeholder="Search for a movie or tv show...."
                      onChange={(e) => setQuery(e.target.value)}
                      // onKeyUp={searchQueryHandler}
                  />
                  <VscChromeClose
                      onClick={() => setShowSearch(false)}
                  />
              </div>
          </ContentWrapper>
      </div>
        </ContentWrapper>
      </div>
    </header>
  )
}

export default Header