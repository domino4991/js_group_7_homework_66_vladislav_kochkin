import React from 'react';
import Header from "../Header/Header";

const Layout = props => {
    return (
        <>
            <Header />
            <main className="Main-content">
                {props.children}
            </main>
        </>
    );
};

export default Layout;