import React from "react";
import "./Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

const fotter = () => {
  return (
    <div>
      <div className="mainfotter">
        <div className="parentsfotter">
          <div className="headingf">
            <div id="fimage">
              <img
              className="zz"
                id="fmage"
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt=""
              />
            </div>
            <div className="fselect">
              <span className="countryi">
                <div></div>
                <select id="country">
                  <option>India</option>
                  <option>America</option>
                  <option>Austrialia</option>
                  <option>Inodesia</option>
                  <option>Pkistan</option>
                </select>
              </span>
              <span className="languuage">
                <select id="llanguage">
                  <option>Hindi</option>
                  <option>English</option>
                  <option>Japniess</option>
                </select>
              </span>
            </div>
          </div>
          <div className="tabledata">
            <div className="table1">
              <div>
                <h4 id="mmmmgh">ABOUT ZOMATO</h4>
              </div>
              <div>
                <p id="pgh">Blog</p>
              </div>
              <div>
                <p id="pgh">Work With Us </p>
              </div>
              <div>
                <p id="pgh">Investor Relation</p>
              </div>
              <div>
                <p id="pgh">Report Fraud</p>
              </div>
              <div>
                <p id="pgh">Contact Us</p>
              </div>
            </div>
            <div className="table1">
              <div>
                <h4 id="mmmmgh">ZOMAVERS</h4>
              </div>
              <div>
                <p id="pgh">Zoamto</p>
              </div>
              <div>
                <p id="pgh">Blinkit</p>
              </div>
              <div>
                <p id="pgh">Feeding india </p>
              </div>
              <div>
                <p id="pgh">Hyprepure</p>
              </div>
              <div>
                <p id="pgh">Zomaland</p>
              </div>
            </div>
            <div className="table1">
              <div>
                <h4 id="mmmmgh">FOR RESTAURANT</h4>
              </div>
              <div>
                <p id="pgh">Partner With Us</p>
              </div>
              <div>
                <p id="pgh">Apps For You</p>
              </div>
            </div>
            <div className="table1">
              <div>
                <h4 id="mmmmgh">LEARN MORE</h4>
              </div>
              <div>
                <p id="pgh">Privacy</p>
              </div>
              <div>
                <p id="pgh">Security</p>
              </div>
              <div>
                <p id="pgh">Terms </p>
              </div>
              <div>
                <p id="pgh">Sitemap</p>
              </div>
            </div>
            <div className="table2">
              <div className="tablecontent">
                <div>
                  <h5 id="mmmmg">SOCIAL LINKS</h5>
                </div>
                <div id="icons">
                  <span id="iiiii">
                    <LinkedInIcon />
                  </span>{" "}
                  <span id="iiiii">
                    <InstagramIcon />
                  </span>{" "}
                  <span id="iiiii">
                    <TwitterIcon />
                  </span>{" "}
                  <span id="iiiii">
                    <YouTubeIcon />
                  </span>{" "}
                  <span id="iiiii">
                    <FacebookIcon />
                  </span>{" "}
                </div>
                <div><img  id='appimage' src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" /></div>
                <div>
                  {" "}
                  <img id="appimage2" src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="captions">
        <div className="pragraph">
          <div className="itmesss">
            <p>
              By continuing past this page, you agree to our Terms of Service,
              Cookie Policy, Privacy Policy and Content Policies. All trademarks
              are properties of their respective owners.
            </p>
            <p>2008-2024 © Zomato™ Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default fotter;
