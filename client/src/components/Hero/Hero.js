import React from 'react';
import {HeroContainer} from "./heroelements";
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <HeroContainer>
            <motion.div className={'div1'}
                        initial={{x:"-100vw", backgroundColor:'#771300'}}
                        animate={{x:0, backgroundColor:'#475132'}}
                        transition={{ duration:1, when:'afterChildren'}}
            >
                <div>
                    <motion.h3
                        initial={{x:"100vw", color:'#101010'}}
                        animate={{x:0,  color:"#E4C3B1"}}
                        transition={{delay:1, duration:1}}
                    >
                        Dolce Far Niente
                    </motion.h3>
                    <motion.p
                        initial={{x:"100vw", color:'#101010'}}
                        animate={{x:0,  color:"#E4C3B1"}}
                        transition={{delay:1, duration:1}}
                    >
                        The Sweetness Of Doing Nothing
                    </motion.p>
                    <motion.h4 className={'mt-lg-5 mt-2'}
                        initial={{opacity:0, color:'#101010'}}
                        animate={{opacity:1,  color:"#E4C3B1"}}
                        transition={{delay:2, duration:1.5}}
                    >
                        Selling hobby pieces, such as plants, pot and arts
                    </motion.h4>
                </div>



            </motion.div>
        </HeroContainer>

    );
};

export default Hero;