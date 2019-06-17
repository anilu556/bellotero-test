import React from 'react';

//Redux
import {connect} from 'react-redux';
import {getDescription, getValueI, getValueE} from  '../actions/configuratorActions';

class Configurator extends React.Component {


    state = {
            food: 0,
            annual: 0
        }

    getFood() {
            const estimated = this.props.valueIngredients * 0.3
            return estimated
    }

    getAnnual() {
        const estimated = this.props.valueEmployees * 1337 + this.getFood()
        return estimated
    }

    componentDidMount(){
        this.props.getDescription();
    }

    render() {

        const {desc, titleConf, valueIngredients, valueEmployees} = this.props;
        // console.log(titleConf)

        return(
            <React.Fragment>
            <div className="configurator">
                <div className="configurator_1">
                    <div className="configurator_title">
                        <p className="title_text">
                            {titleConf.slice(0, 14)}
                        </p>
                    </div>    
                    <div className="configurator_title2">
                        <p className="title_text">
                            {titleConf.slice(15, 27)}
                        </p>
                    </div>
                    <div className="configurator_text">
                        <p className="configurator_text">
                            {desc}
                        </p>
                    </div>        
                </div>   
                <div className="configurator_2">
                    <div className="configurator_monthly">
                        <div className="monthly_1">  
                            <div className="monthly_1_text"> Monthly <br/> ingredient spending</div>
                        </div>    
                        <div className="monthly_rectangle">
                            <div className="monthly_1_price">$</div>
                            <div className="monthly_1_number">{valueIngredients}</div>
                        </div>
                        <div className="monthly_2">   
                            <input 
                                type="range" 
                                className="custom-range" 
                                id="valueI" 
                                min={10}
                                max={100}
                                value= {valueIngredients}
                                onChange={e => this.props.getValueI(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="configurator_full">
                        <div className="full_1">  
                            <div className="full_1_text"> Full-time employees that process invoices</div>
                        </div>  
                        <div className="full_rectangle">
                            <div className="full_1_number">{valueEmployees}</div>
                        </div>
                        <div className="full_2">   
                            <input 
                                type="range" 
                                className="custom-range" 
                                id="valueE" 
                                min={1}
                                max={10}
                                value= {valueEmployees}
                                onChange={e => this.props.getValueE(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="configurator_totals">
                        <div className="totals_1">  
                            <span className="totals_price">$</span><span className="totals_number">{this.getFood().toFixed(2)}</span>
                            <div className="total_text">Estimated cost food savings</div>
                        </div>
                        <div className="totals_2">   
                            <span className="totals_price">$</span><span className="totals_number">{this.getAnnual().toFixed(2)}</span>
                            <div className="total_text">Your estimated annual savings</div>
                        </div> 
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    desc: state.desc.desc,
    titleConf: state.titleConf.titleConf,
    valueIngredients: state.valueIngredients.valueIngredients,
    valueEmployees: state.valueEmployees.valueEmployees
})

export default connect(mapStateToProps, {getDescription, getValueI, getValueE}) (Configurator);