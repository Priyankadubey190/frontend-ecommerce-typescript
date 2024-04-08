import React from "react";
import styles from "./address.module.scss";
export default function Address() {
  return (
    <div className={styles.addressmy}>
      <div className={styles.container}>
        <div className={styles.top}>
          <span className={styles.sp1}>Home</span>
          <i className={styles.fas_fa_chevron_right}></i>
          <span className={styles.sp2}>Checkout</span>
        </div>
        <div className={styles.bottom}>
          <div className={styles.left}>
            <span>Checkout</span>
            <div className={styles.col}>
              <div className={styles.colt}>
                <div className={styles.on_or}>1</div>
                <span>Login or Signup</span>
              </div>
              <div className={styles.colb}>
                <span id="p_login_name"></span>
                <span id="p_login_number"></span>
              </div>
            </div>

            <div className={styles.adcol2}>
              <div className={styles.col2tp}>
                <div className={styles.on_wh}>2</div>
                <span>Shipping Address & Billing Address</span>
              </div>
              <center className={styles.cen}>Please Add Address!</center>
              <div className={styles.adcol2b}>
                <center className={styles.cen2_bold}>New Address</center>
                <div className={styles.adbot}>
                  <div className={styles.adlef}>
                    <p>
                      Customer Tag Name <span className={styles.str}>*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Provide Tag Like Home/Office to Identified Customer Addre"
                      className={styles.adinp}
                    />

                    <p>
                      Customer Mobile <span className={styles.str}>*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Enter the customer mobile Number"
                      className={styles.adinp}
                      id="mob"
                    />
                    <p>
                      Pincode <span className={styles.str}>*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Enter the customer pincode"
                      className={styles.adinp}
                      id="pin"
                    />
                  </div>

                  <div className={styles.adrig}>
                    <p>
                      Customer Name <span className={styles.str}>*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Enter the customer name"
                      className={styles.adinp}
                      id="name"
                    />

                    <p>
                      Alternate Phone (Optional){" "}
                      <span className={styles.str}>*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Enter the Alternate Phone"
                      className={styles.adinp}
                    />

                    <p>
                      Locality <span className={styles.str}>*</span>
                    </p>

                    <select name="" id="" className={styles.opt}>
                      <option value="" className={styles.opt}>
                        {" "}
                        Select Locality
                      </option>
                    </select>
                  </div>
                </div>
                <p>
                  Address <span className={styles.str}>*</span>
                </p>
                <textarea
                  name=""
                  id="add"
                  cols={30}
                  rows={10}
                  className={styles.adinp2}
                  placeholder="Enter the customer address"
                ></textarea>

                <div className={styles.adbot}>
                  <div className={styles.adlef}>
                    <p>District </p>
                    <br />
                    <input
                      type="text"
                      placeholder="Enter the District"
                      className={styles.adinp}
                      id="dis"
                    />

                    <p>
                      City <span className={styles.str}>*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Enter the City"
                      className={styles.adinp}
                      id="city"
                    />
                  </div>

                  <div className={styles.adrig}>
                    <p>
                      Landmark <span className={styles.str}>*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Enter the landmark"
                      className={styles.adinp}
                      id="lam"
                    />

                    <p>
                      State <span className={styles.str}>*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Enter State"
                      className={styles.adinp}
                      id="state"
                    />
                  </div>
                </div>
                <br />
                <div className={styles.check}>
                  <div className={styles.checklef}>
                    <input type="checkbox" name="" id="" />{" "}
                    <span className={styles.cheksp}>Primary Address</span>
                  </div>
                  <div className={styles.checkrit}>
                    <input type="checkbox" name="" id="" />{" "}
                    <span className={styles.cheksp}>Shipping Address</span>
                  </div>
                </div>
                <a href="secondcheck.html">
                  <button className={styles.btnsv}>SAVE AND CONTINUE</button>
                </a>
              </div>
            </div>

            <div className={styles.col3}>
              <div className={styles.on_or}>3</div>
              <span>Products</span>
            </div>
            <div className={styles.col3}>
              <div className={styles.on_or}>4</div>
              <span>Shipping Method</span>
            </div>
            <div className={styles.col3}>
              <div className={styles.on_or}>5</div>
              <span>Choose Payment Mode</span>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.to}>
              <span className={styles.lef}>Order Summary </span>
              <span className={styles.rig}>( 763a89#### )</span>
            </div>
            <div className={styles.ritop}>
              <div className={styles.di1ritop}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Tag_font_awesome.svg/768px-Tag_font_awesome.svg.png"
                  alt=""
                  className={styles.cop}
                />
                <span>Use Coupon Code</span>
              </div>
              <h3>Enter your coupon code if you have one.</h3>
              <div className={styles.copcode}>
                <input
                  type="text"
                  placeholder="Enter Your Coupon Code"
                  id="e_coupon"
                />
                <button id="copbtn"> APPLY</button>
              </div>
            </div>
            <div className={styles.price}>
              <div className={styles.itepr}>
                <p>Items Price (without tax):</p>
                <p>
                  <b>₹</b> <span id="p_wot">0.00</span>
                </p>
              </div>

              <div className={styles.itepr}>
                <p>CGST:</p>
                <p>
                  <b>₹</b>
                  <span id="p_cgst"> 0.00</span>
                </p>
              </div>
              <div className={styles.itepr}>
                <p>SGST:</p>
                <p>
                  <b>₹</b>
                  <span id="p_sgst"> 0.00</span>
                </p>
              </div>
              <div className={styles.itepr}>
                <p className={styles.bold}>SubTotal:</p>
                <p>
                  <b>₹</b>
                  <span id="sub_total"> 0.00</span>
                </p>
              </div>
              <div className={styles.itepr}>
                <p>Discount Price:</p>
                <p>
                  <b>₹</b>
                  <span id="dis_p"> 0.00</span>
                </p>
              </div>
              <div className={styles.itepr}>
                <p>Pai Wallet :</p>
                <p>
                  <b>₹</b> <span>0.00</span>{" "}
                </p>
              </div>
              <div className={styles.itepr}>
                <p>Gift Wrap :</p>
                <p>
                  <b>₹</b> <span>0.00</span>{" "}
                </p>
              </div>
              <div className={styles.itepr}>
                <p>Shipping Charge :</p>
                <p>
                  <b>₹</b> <span>0.00</span>{" "}
                </p>
              </div>
              <div className={styles.itepr}>
                <p className={styles.bold}>Total Price :</p>
                <p>
                  <b>₹</b> <span id="tot_p">0.00</span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
