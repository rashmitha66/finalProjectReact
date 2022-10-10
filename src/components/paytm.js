import React, { Component } from "react";

//importing the images
import sbilogo from '../images/sbi.png';
import {Link} from 'react-router-dom';



class paytm extends Component {
//   constructor(props) {
//     super(props);
//     this.onSubmit = this.onSubmit.bind(this);
//     this.state = {
//       total: ""
//     };
//   }

//   componentDidMount() {
//     this.setState({
//       total: sessionStorage.getItem(TOTAL)
//     });
//   }

//   onSubmit(e) {
//     e.preventDefault();
//     this.props.history.push(`/thankyoupage`);
//   }

  render() {
    return (
      <div style={{ backgroundColor: "#D3D3D3" }}>
        <div className="container" style={{ marginTop: 0 }}>
          <center>
            <div className="card" style={{ width: 600 }}>
              <h5
                className="card-header info-color white-text text-center py-4"
                style={{ backgroundColor: "rgb(81, 31, 75) " }}
              >
                <strong style={{ color: "white" }}>
                  {" "}
                  <h2> Please pay your bill here</h2>
                </strong>
              </h5>
              <div className="logo">
                <img src={sbilogo} width="400" height="200" alt="" />
              </div>

              <h2> State Bank of India Payment Gateway </h2>
              <div className="card-body px-lg-5">
                <form
                  className="text-center"
                  style={{ color: "#757575" }}
                //   onSubmit={this.onSubmit}
                >
                  <label> Name on Card : </label>
                  <input
                    type="text"
                    placeholder="Name on Card"
                    className="form-control mb-4"
                  />
                  <label> Card Number : </label>
                  <input
                    type="text"
                    placeholder="Credit Card Number"
                    className="form-control mb-4"
                  />
                  <label>
                    {" "}
                    CVV :
                    <a
                      href="https://www.strategicprofitsinc.com/cvv_info/cvv_info.html"
                      target="_blank"
                    >
                      {/* <img src={cvv} width="20" height="20" alt="" /> */}
                    </a>
                  </label>
                  <input
                    type="text"
                    placeholder="CVV"
                    className="form-control mb-4"
                  />
                  <label> Amount : </label>
                  <input
                    type="text"
                    placeholder="10000"
                    className="form-control mb-4"
                    
                  />
                  <Link to ='/thanks'><button
                    className="btn btn-outline-primary btn-rounded btn-block z-depth-0 my-4 waves-effect"
                    type="submit"
                  >
                    PROCEED
                  </button></Link>
                </form>
              </div>
            </div>
          </center>
        </div>
      </div>
    );
  }
}

export default paytm;