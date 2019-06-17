import React from 'react';
import logo from '../images/bellotero.png';
import {NavLink} from 'react-router-dom';

//Redux
import {connect} from 'react-redux';
import {getItems} from  '../actions/navbarActions';

class Navbar extends React.Component {

    componentDidMount(){
        this.props.getItems();
    }

    render() {

        const {items} = this.props;
        // console.log(items);

        return(
            <React.Fragment> 
                <div className="navbar">
                    <NavLink to="/page-1">
                    <img className="navbar_logo" src={logo} alt="logo" />  
                    </NavLink>
                    <ul className="navbar_menu">
                        {items.map((item, key) => 
                        <NavLink activeClassName="selected" key={key} to={`/${item.route}`}>
                            <li className="navbar_option">{item.text}</li>
                        </NavLink>  
                        )}
                    </ul>
                </div>   
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    items: state.items.items
})

export default connect(mapStateToProps, {getItems}) (Navbar);