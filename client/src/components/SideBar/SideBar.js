import React from 'react';
import {SidebarBLur, SidebarCont, SidebarMenu} from "./sidebarelements";

const SideBar = ({isOpen, toggle}) => {
    return (
        <SidebarMenu isOpen={isOpen} onClick={toggle}>
            <SidebarBLur>

            </SidebarBLur>
            <SidebarCont>
                <div className={'d-flex flex-column mt-2 mb-2'}>
                    <p>
                        Home
                    </p>
                    <p>
                        About
                    </p>
                    <p>
                        Product
                    </p>
                    <p>
                        Get in touch
                    </p>
                </div>
            </SidebarCont>
        </SidebarMenu>
    );
};

export default SideBar;