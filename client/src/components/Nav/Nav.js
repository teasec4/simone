import React from 'react';
import {NavContainer} from "./navelements";
import { motion } from 'framer-motion'
import {FaBars} from "react-icons/fa";

const Nav = ({isOpen, toggle}) => {
    return (
        <NavContainer>
            <div className={'container-fluid position-relative'}>

                    <ul className={'container d-sm-flex justify-content-between d-none'}>
                        <motion.li
                            initial={{opacity:0, color:'#101010'}}
                            animate={{opacity:1,  color:"#E4C3B1"}}
                            transition={{delay:3.5, duration:0.5}}
                        >
                            Home
                        </motion.li>
                        <motion.li
                            initial={{opacity:0, color:'#101010'}}
                            animate={{opacity:1,  color:"#E4C3B1"}}
                            transition={{delay:4, duration:0.5}}
                        >
                            About
                        </motion.li>
                        <motion.li
                            initial={{opacity:0, color:'#101010'}}
                            animate={{opacity:1,  color:"#E4C3B1"}}
                            transition={{delay:4.5, duration:0.5}}
                        >
                            Product
                        </motion.li>
                        <motion.li
                            initial={{opacity:0, color:'#101010'}}
                            animate={{opacity:1,  color:"#E4C3B1"}}
                            transition={{delay:5, duration:0.5}}
                        >
                            <motion.span
                                initial={{ color:'#fff', backgroundColor:"#475132", padding:"0px 0px", borderRadius:'0px'}}
                                animate={{ color:"#771300", backgroundColor:'#fff', padding:"10px 20px",borderRadius:'5px'}}
                                transition={{delay:5.5, duration:1}}
                            >
                                Get in touch
                            </motion.span>
                        </motion.li>
                    </ul>

                <div className={'d-block d-sm-none'} style={{height:'80px'}}>
                        <div className={'position-absolute top-50 end-0 translate-middle d-flex align-items-center fs-2'}
                                    style={{color:'#fff'}}
                                    onClick={toggle}
                        >
                            <FaBars/>
                        </div>
                </div>
            </div>
        </NavContainer>
    );
};

export default Nav;