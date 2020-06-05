import React from 'react';
import SignUpFormContainer from '../session_form/signup_form_container'
import Carousel from '../carousel/carousel';



class Splash extends React.Component {
    constructor(props) {
        super(props)
        
    }

    

    render() {
        let img = [gifs.shelf_filter, gifs.show_shelf, gifs.sign_up]
        return (
            <div className="background-and-signup-box">
                <div className="sign-up-form-box">
                    <p className="sign-up-form-title">New Here? Sign Up Below!</p>
                    <SignUpFormContainer />
                </div>
                <div className="background-box">
                    <img src={images.books} className="background-img" title="Credit: https://www.aier.org/article/another-stack-of-books-you-should-read/" />
                </div>
                <div className="flavor-text-box">
                    <div className="flavor-text">
                        Find your future reads here! Live the future, past and present through the words on the page. 
                    </div>
                </div>
                <Carousel images={img}/>
              
            </div>
        )
    }

}


export default Splash;
