import { Component } from "react";
import Header from "../Header";
import AllProductsView from '../AllProductsView'

class HomeRoute extends Component{

    render(){
        return(
            <>
            <Header/>
            <div>
                <div>
                   <AllProductsView />
                </div>
            </div>
            </>
        )
    }
}
export default HomeRoute