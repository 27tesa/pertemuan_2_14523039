import React from 'react';
import Header from './Header';
import Footer from './Footer';

//create component
function App(){
    return(
        <div>
            <h1>Hello React</h1>
            <Header />
            <Header />
            <Header />
            <Footer />
        </div>
    );
}

//export component
export default App;