import React from 'react';
import './css/footer.scss';
function footer(){
    return(
        <div className ="footer">
        
                <div className="footer__helpline">
                <h4>Helpline Number</h4>
                <p>+91-11-23978046</p>
                <h4>Toll Free</h4>
                <p>1075</p>
                <h4>Email</h4>
                <p>ncov2019@gov.in</p>
                </div>
                <div className="footer__developer">
                <h4>Download Arogya Setu App</h4>
                <p>Toll Free : 1075</p>
                <h4>Developed by</h4>
                <p>Abhijith Kannan</p>
                </div>
            
        </div>
    )
}

export default footer;