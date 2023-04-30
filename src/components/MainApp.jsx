import classes from './mainApp.css';
import Header from "./Templates/Wrapper/Header";
import  Aside  from "./Templates/Wrapper/Aside";
import Main from './Templates/Wrapper/Main';




export const MainApp = () => {
    return (
        
        <div>
            <Header />
            <Aside />
            <Main/>
            {/* <Footer /> */}
        </div>
    );
}