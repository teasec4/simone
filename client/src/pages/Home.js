import React, {useState} from 'react';
import Hero from "../components/Hero/Hero";
import Page1 from "../components/Page1/Page1";
import Nav from "../components/Nav/Nav";
import SideBar from "../components/SideBar/SideBar";


const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle}/>
            <Nav toggle={toggle} isOpen={isOpen}/>
            <Hero/>
            <Page1/>
        </>
    );
};

export default Home;