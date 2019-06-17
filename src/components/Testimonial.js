import React from 'react';

//Redux
import {connect} from 'react-redux';
import {getInfo} from  '../actions/testimonialActions';

class Testimonial extends React.Component {
    
    state = {
        showTest1: true,
        showTest2: false
      }

    componentDidMount(){
        this.props.getInfo();
    }

    handleClickRight = () => {
        this.setState({
            showTest1: !this.state.showTest1,
            showTest2: !this.state.showTest2
        })
    }
    
        handleClickLeft = () => {
        this.setState({
            showTest1: !this.state.showTest1,
            showTest2: !this.state.showTest2
        })
    }

    render() {

        const {title, test1, test2} = this.props;
        // console.log(test1);

        return(
            <React.Fragment>
            <div className="testimonial">
                <div className="testimonial_clm1">
                    <div className="testimonial_title">
                        <p className="title_text">{title.title}</p>
                    </div>
                </div>
                <div className="testimonial_clm2">
                    <div className="testimonial_content"> 
                                        
                        <div className="testimonial_text"> 
                            {this.state.showTest1?   
                            <div className="testimonial_1">
                                <div className="column1">
                                    <h2 className="name">{test1.name}</h2>
                                    <p className="position">{test1.position}</p>
                                </div>
                                <div className="column2">
                                    <p className="comment">{test1.comment}</p>
                                </div>
                            </div> 
                            :null
                            }
                            {this.state.showTest2?   
                            <div className="testimonial_2">
                                <div className="column1">
                                    <h2 className="name">{test2.name}</h2>
                                    <p className="position">{test2.position}</p>
                                </div>
                                <div className="column2">
                                    <p className="comment">{test2.comment}</p>
                                </div> 
                            </div> 
                            :null 
                            }    
                        </div>                 
                    </div>
                    {this.state.showTest1? 
                    <div className="testimonial_page">
                             <p className="page">1/2</p>
                    </div>
                    :null}
                    {this.state.showTest2? 
                    <div className="testimonial_page">
                             <p className="page">2/2</p>
                    </div>
                    :null}
                    <button onClick={this.handleClickRight} className="testimonial_arrowl">
                        <i  className="fas fa-arrow-left"></i>
                    </button>
                    <button className="testimonial_arrowr">
                        <i onClick={this.handleClickRight} className="fas fa-arrow-right"></i> 
                    </button>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    title: state.title.title,
    test1: state.test1.test1,
    test2: state.test2.test2,
})

export default connect(mapStateToProps, {getInfo}) (Testimonial);