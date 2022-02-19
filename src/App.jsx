import './App.css';

function App() {
  return (
    <div className="App">

      {/* nav */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="./images/logo.PNG" alt="" height="50px" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav d-flex justify-content-center align-items-center ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><a className="nav-link " aria-current="page" href="#about">ABOUT US</a></li>
              <li className="nav-item"><a className="nav-link " aria-current="page" href="#feature">FEATURE</a></li>
              <li className="nav-item"><a className="nav-link " aria-current="page" href="#pricing">PRICING</a></li>
              <li className="nav-item"><a className="nav-link " aria-current="page" href="#trust">TRUSTED BY</a></li>
              <button className='signin'>Sign in</button>
              <button className='signup'>Sign up</button>
            </ul>
          </div>
        </div>
      </nav>

      {/* banner */}
      <section className="main">
        <div className="child px-3 pt-4">
          <h1 className="main_head fs-2"><span style={{ color: "rgb(24, 84, 180)" }}>Top chains.</span> Fastest speed. Enterprise infrastructure for 11 blockchains.</h1>
          <p className="cont_para col-lg-8 col-12 fw-300">We make it simple to power your blockchain applications and scale up as you grow. From elastic APIs & dedicated nodes, to powerful tools & analytics, all at your command through a simple control panel.</p>
          <p className='support_para w-100 fw-bold'>We currently support the following chains and clients:</p>
          <div className='support w-100'>
            <img className='mx-lg-2 mx-md-2' src="./images/avalanche.png" alt="" width="60px" />
            <img className='mx-lg-2 mx-md-2' src="./images/HarmonyONE.png" alt="" width="80px" />
            <img className='mx-lg-2 mx-md-2' src="./images/Ethereum.png" alt="" height="65px" />
            <img className='mx-lg-2 mx-md-2' src="./images/fuse.png" alt="" width="100px" />
          </div>
        </div>
        <div className=''>
          <form className="for_form bg-white rounded pe-5 ps-4 py-4" style={{ color: "black" }}>
            <div className="mb-2">
              <label className="block text-lite-gray text-sm font-medium mb-2" htmlFor="name">
                Company Name
              </label>
              <br />
              <input className="shadow-sm appearance-none border border-xl-gray rounded w-full py-2 ps-3 text-lite-gray leading-tight focus:outline-none focus:ring focus:border-teal-1000 " placeholder="Gemini Trading" type="text" />
            </div>
            <div className="mb-2">
              <label className="block text-lite-gray text-sm font-medium mb-2" htmlFor="full-name">
                Name for billing
              </label>
              <br />
              <input data-test="name-field" className="bg-white shadow-sm appearance-none border border-xl-gray rounded w-full py-2 ps-3 text-lite-gray leading-tight focus:outline-none focus:ring focus:border-teal-1000 " placeholder="Tyler Winklevoss" type="text" />
            </div>

            <div className="mb-2">
              <label className="block text-lite-gray text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <br />
              <input data-test="email-field" className="bg-white shadow-sm appearance-none border border-xl-gray rounded w-full py-2 ps-3 text-lite-gray leading-tight focus:outline-none focus:ring focus:border-teal-1000 " placeholder="tylerw@gemini.com" type="text" />
            </div>

            <div className="mb-3">
              <label className="block text-lite-gray text-sm font-medium mb-2" htmlFor="password">
                Password
              </label>
              <br />
              <input data-test="password-field" className="bg-white shadow-sm appearance-none border border-xl-gray rounded w-full py-2 ps-3 text-lite-gray leading-tight focus:outline-none focus:ring focus:border-teal-1000 " placeholder="••••••••" autoComplete="new-password" type="password" />
            </div>
            <button className='submit'>SUBMIT</button>
            <div className="text-xs text-gray-500 mx-auto text-start mt-1">QuickNode always keeps your<br />information safe &amp; secure.</div>
          </form>
        </div>
      </section>

      {/* Globally */}
      <div className="decore">
        <img src='./images/boxes1.png' alt="" />
      </div>
      <section id='about' className="global d-flex align-items-center" style={{ minHeight: "100vh" }}>
        <div className="container">
          <div className="row mx-0 d-flex align-items-center">
            <div className="col-lg-6 co-12 d-flex flex-column align-items-start" style={{ paddingTop: "105px" }}>
              <h1 className="main_head"><span style={{ color: "rgb(24, 84, 180)" }}>Top chains.</span> Fastest speed. Enterprise infrastructure for 11 blockchains.</h1>
              <div className="mob_global col-lg-6 col-12">
                <img src='./images/global.png' className="w-100" alt="" />
              </div>
              <p className="global_para fs-7 fw-300 pt-1">
                Get started developing immediately with a globally available, cache accelerated service with QuickNode API or when you have custom needs, spin up a dedicated node with unmetered responses in your preferred location using a dedicated QuickNode endpoint. Want better insights or a particular tools? Enable an add-on for your endpoint.</p>
              <button className='signin'>Compare us</button>
            </div>
            <div className="desk_global col-lg-6 col-12">
              <img src='./images/global.png' className="w-100" alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="decore2">
        <img src='./images/boxes2.png' alt="" />
      </div>

      {/* feature */}
      <div className="decore">
        <img src='./images/boxes1.png' alt="" />
      </div>
      <section id='feature' className="Virtuse_news ak_home_vituse">
        <div className="Virtuse_news_cont text-start">
          <h1 className="main_head text-start"><span style={{ color: "rgb(24, 84, 180)" }}>Featured</span> in the following</h1>
        </div>
        <div className="Virtuse_cards">
          <div className="card2" style={{ width: "18rem", height: "25rem" }}>
            <img src="./images/feature1.jpg" className="feat_img card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text2 text-start">
                "[QuickNode] plans to use the new funds to hire as many as 50 people after a 20-fold increase in revenue this year."
                <br />
                <br />
                <span style={{ color: "rgb(90,188,220)" }}>Nathan Crooks - October 27, 2021</span>
              </p>
              {/* <br /> */}
              <a className='' href="" style={{ color: "wheat" }}>learn More »</a>
            </div>
          </div>

          <div className="card2" style={{ width: "18rem", height: "25rem" }}>
            <img src="./images/feature2.jpg" className="feat_img w-100 card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text2 text-start">
                "[QuickNode] said it will use the new funds to expand its product offerings and support new chains, which it has done at a pace of “about one per month” since its seed round in May."
                <br />
                <br />
                <span style={{ color: "rgb(90,188,220)" }}>Eli Tan - October 27, 2021</span>
              </p>
              <a href="" style={{ color: "wheat" }}>learn More »</a>
            </div>
          </div>

          <div className="card2" style={{ width: "18rem", height: "25rem" }}>
            <img src="./images/feature3.jpg" className="feat_img card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text2 text-start">
                "Alexis Ohanian, the co-founder of Reddit [and 776], led a $5.3 million seed round investment in QuickNode, a company powering the future of a decentralized internet."
                <br />
                <br />
                <span style={{ color: "rgb(90,188,220)" }}>Steven Ehrlich - May 27, 2021</span>
              </p>
              <a href="" style={{ color: "wheat" }}>learn More »</a>
            </div>
          </div>
        </div>
        <button className="signin">View All</button>
      </section>
      <div className="decore2">
        <img src='./images/boxes2.png' alt="" />
      </div>

      {/* services */}
      <div id='pricing' className="decore">
        <img src='./images/boxes1.png' alt="" />
      </div>
      <div className='services container-fluid'>
        <div className="Virtuse_news_cont text-center">
          <h1 className="main_head text-center"><span style={{ color: "rgb(24, 84, 180)" }}>Live</span> websites immediately
            with <span style={{ color: "rgb(24, 84, 180)" }}>WIRE_NODES</span> hosting</h1>
          <p className="Virtuse_head mb-0 text-center"></p>
          <p className="Virtuse_para mb-0 text-center ">
            The best choice for developers, hobbyists & web-scale blockchain apps.
          </p>
        </div>
        <div className='provider'>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className='mb-0 fw-bold' style={{ color: "rgb(24, 84, 180)", fontSize: "20px" }}>Node Runner Service</p>
                <p className='mb-1'>300 thousand responses / mo</p>
                <p><span style={{ color: "rgb(24, 84, 180)", fontSize: "40px" }}>$9</span>/mo</p>
                <ul>
                  <li><i className="me-2 fas fa-check" ></i> Usage Metrics</li>
                  <li><i className="me-2 fas fa-check" ></i> Community Support</li>
                  <li><i className="me-2 fas fa-check" ></i> HTTPS & WSS Endpoints</li>
                  <li><i className="me-2 fas fa-check" ></i> Overage is $0.10 per 10k</li>
                </ul>
              </div>
              <div className="flip-card-back">
                <button className='free_trial'>Get started - 7 day free trial</button>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className='mb-0 fw-bold' style={{ color: "rgb(24, 84, 180)", fontSize: "20px" }}>Full Blockchain Nodes</p>
                <p className='mb-1'>20 million responses / mo</p>
                <p><span style={{ color: "rgb(24, 84, 180)", fontSize: "40px" }}>$99</span>/mo</p>
                <ul>
                  <li><i className="me-2 fas fa-check" ></i> Launch Perks+</li>
                  <li><i className="me-2 fas fa-check" ></i> Live Chat Support</li>
                  <li><i className="me-2 fas fa-check" ></i> 100 Free Archive Calls</li>
                  <li><i className="me-2 fas fa-check" ></i> Overage is $0.07 per 10k</li>
                </ul>
              </div>
              <div className="flip-card-back">
                <button className='free_trial'>Open account</button>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className='mb-0 fw-bold' style={{ color: "rgb(24, 84, 180)", fontSize: "20px" }}>KVM servers</p>
                <p className='mb-1'>60 million responses / mo</p>
                <p><span style={{ color: "rgb(24, 84, 180)", fontSize: "40px" }}>$299</span>/mo</p>
                <ul>
                  <li><i className="me-2 fas fa-check" ></i> Pro Perks+</li>
                  <li><i className="me-2 fas fa-check" ></i> Priority Support</li>
                  <li><i className="me-2 fas fa-check" ></i> 300 Free Archive Calls</li>
                  <li><i className="me-2 fas fa-check" ></i> Overage is $0.05 per 10k</li>
                </ul>
              </div>
              <div className="flip-card-back">
                <button className='free_trial'>Open account</button>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className='mb-0 fw-bold' style={{ color: "rgb(24, 84, 180)", fontSize: "20px" }}>Premium Webhosting</p>
                <p className='mb-1'>500m+ responses / month</p>
                <p><span style={{ color: "rgb(24, 84, 180)", fontSize: "40px" }}>Let's talk</span></p>
                <ul>
                  <li><i className="me-2 fas fa-check" ></i> Volume Discounts</li>
                  <li><i className="me-2 fas fa-check" ></i> Faster SLA Time</li>
                  <li><i className="me-2 fas fa-check" ></i> Bespoke Solutions</li>
                  <li><i className="me-2 fas fa-check" ></i> White-Glove Support</li>
                </ul>
              </div>
              <div className="flip-card-back">
                <button className='free_trial'>Contact us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="decore2">
        <img src='./images/boxes2.png' alt="" />
      </div>

      {/* trusted */}
      <div id='pricing' className="decore">
        <img src='./images/boxes1.png' alt="" />
      </div>
      <div id='trust' className='trusted'>
        <div className="Virtuse_news_cont">
          <h1 className="main_head"><span style={{ color: "rgb(24, 84, 180)" }}>Trusted</span> by companies like</h1>
        </div>
        <div className='trusted_imgs'>
          <img src="./images/avalanche.png" alt="" width="100px" />
          <img src="./images/Ethereum.png" alt="" height="100px" />
          <img src="./images/fuse.png" alt="" width="150px" />
          <img src="./images/pocket.png" alt="" height="130px" />
          <img src="./images/xdai .png" alt="" width="100px" />
        </div>
      </div>
      <div className="decore2">
        <img src='./images/boxes2.png' alt="" />
      </div>

      {/* footer */}
      <div className='footer'>

        <div className="first_footer">
          <p className="ready_para text-center mb-4 ">
            Ready to live your website with WIRE_NODES
          </p>
          <h1 className="main_head mb-5">Get started in <span style={{ color: "rgb(24, 84, 180)" }}>seconds</span></h1>
          <button className='few_seconds'>Sign up for a free QuickNode account</button>
        </div>
        <div className='real_parent'>
          <div className='container real_footer mb-5'>
            <div>
              <img src="./images/logo.PNG" alt="" height="50px" />
            </div>

            <div className='foot_lists'>
              <div>
                <ul>
                  <li style={{ color: "grey" }}>Company</li>
                  <br />
                  <li>Pricing</li>
                  <li>Referral Program</li>
                  <li>We're Hiring!</li>
                  <li>Write for us, make money!</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li style={{ color: "grey" }}>Resources</li>
                  <br />
                  <li>Compare tool</li>
                  <li>Guides</li>
                  <li>Docs</li>
                  <li>Blog</li>
                  <li>FAQ</li>
                  <li>Privacy Policy</li>
                  <li>Support</li>
                </ul>
              </div>
            </div>

            <div className='foot_side'>
              <div>
                <p className='foot_side_head'>Want the latest news in Web3?</p>
                <p className='foot_side_para'>We send out the #Web3Vibes newsletter with the coolest stuff in Blockchain every month. Sign up below!</p>
              </div>
              <div>
                <input type="text" placeholder='Your email address...' />
                <button className='free_sub'>Subscribe Free</button>
              </div>
              <div className=''>
                <i className="fab fa-facebook fs-2 mt-4 me-4"></i>
                <i className="fab fa-twitter fs-2 mt-4 me-4"></i>
                <i className="fab fa-discord fs-2 mt-4 "></i>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
