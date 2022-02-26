import './App.css';
import Particles from "react-tsparticles";

function App() {


  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };


  return (
    <div className="App">

      {/* nav */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="./images/logo2.PNG" alt="" height="30px" />
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
          <h1 className="main_head fs-2"><span style={{ color: "rgb(0, 53, 138)" }}>Web3 infrastructure</span> at your fingertips. Get rewarded for building the future.</h1>
          <p className='support_para w-100 fw-bold'>We currently support the following chains and clients:</p>
          <div className='support w-100'>
            <img className='mx-lg-2 mx-md-2' src="./images/avalanche.png" alt="" width="60px" />
            <img className='mx-lg-2 mx-md-2' src="./images/HarmonyONE.png" alt="" width="80px" />
            <img className='mx-lg-2 mx-md-2' src="./images/Ethereum.png" alt="" height="65px" />
            <img className='mx-lg-2 mx-md-2' src="./images/fuse.png" alt="" width="100px" />
            <img className='mx-lg-2 mx-md-2' src="./images/xdai .png" alt="" width="70px" />
          </div>
        </div>
        <div className='d-flex flex-column'>
          <button className='banner_btns'>Node Runner</button>
          <button className='banner_btns'>Blockchain Nodes</button>
          <button className='banner_btns'>KVM Servers</button>
          <button className='banner_btns'>Web Hosting</button>
        </div>
      </section>

      {/* Globally */}
      <div className="decore">
        <img src='./images/boxes1.png' alt="" />
      </div>
      <section id='about' className="global d-flex align-items-center" style={{ minHeight: "100vh" }}>
        <div className="container">
          <div className="row mx-0 my-0 d-flex align-items-start">
            <div className="col-lg-6 co-12 d-flex flex-column align-items-start" style={{ paddingTop: "22px" }}>
              <div className="mob_global col-lg-6 col-12">
                <form className="for_form bg-white rounded pe-5 ps-4 py-4" style={{ color: "black" }}>
                  <div className="mb-2 w-100">
                    <label className="block text-lite-gray text-sm font-medium mb-2" htmlFor="name">
                      Company Name
                    </label>
                    <br />
                    <input className="shadow-sm appearance-none border border-xl-gray rounded w-full py-2 ps-3 text-lite-gray leading-tight focus:outline-none focus:ring focus:border-teal-1000 " placeholder="Gemini Trading" type="text" style={{ width: "100%" }} />
                  </div>
                  <div className="mb-2 w-100">
                    <label className="block text-lite-gray text-sm font-medium mb-2" htmlFor="full-name">
                      Name for billing
                    </label>
                    <br />
                    <input data-test="name-field" className="bg-white shadow-sm appearance-none border border-xl-gray rounded w-full py-2 ps-3 text-lite-gray leading-tight focus:outline-none focus:ring focus:border-teal-1000 " placeholder="Tyler Winklevoss" type="text" style={{ width: "100%" }} />
                  </div>

                  <div className="mb-2 w-100">
                    <label className="block text-lite-gray text-sm font-medium mb-2" htmlFor="email">
                      Email
                    </label>
                    <br />
                    <input data-test="email-field" className="bg-white shadow-sm appearance-none border border-xl-gray rounded w-full py-2 ps-3 text-lite-gray leading-tight focus:outline-none focus:ring focus:border-teal-1000 " placeholder="tylerw@gemini.com" type="text" style={{ width: "100%" }} />
                  </div>

                  <div className="mb-3 w-100">
                    <label className="block text-lite-gray text-sm font-medium mb-2" htmlFor="password">
                      Password
                    </label>
                    <br />
                    <input data-test="password-field" className="bg-white shadow-sm appearance-none border border-xl-gray rounded w-full py-2 ps-3 text-lite-gray leading-tight focus:outline-none focus:ring focus:border-teal-1000 " placeholder="••••••••" autoComplete="new-password" type="password" style={{ width: "100%" }} />
                  </div>
                  <button className='submit'>SUBMIT</button>
                  <div className="text-xs text-gray-500 mx-auto text-start mt-1">Wire Nodes always keeps your information safe &amp; secure.</div>
                </form>
              </div>
              <p className="global_para fs-5 fw-300 pt-1">
                Get started today with a dedicated node unmetered responses. Need web3 infrastructure for your blockchain project or have any questions in general?</p>
            </div>
            <div className="desk_global col-lg-6 col-12">
              <form className="for_form bg-white rounded pe-5 ps-4 py-4" style={{ color: "black" }}>
                <div className="mb-2 w-100">
                  <label className="block text-lite-gray text-sm font-medium mb-2" htmlFor="name">
                    Company Name
                  </label>
                  <br />
                  <input className="shadow-sm appearance-none border border-xl-gray rounded w-full py-2 ps-3 text-lite-gray leading-tight focus:outline-none focus:ring focus:border-teal-1000 " placeholder="Gemini Trading" type="text" style={{ width: "100%" }} />
                </div>
                <div className="mb-2 w-100">
                  <label className="block text-lite-gray text-sm font-medium mb-2" htmlFor="full-name">
                    Name for billing
                  </label>
                  <br />
                  <input data-test="name-field" className="bg-white shadow-sm appearance-none border border-xl-gray rounded w-full py-2 ps-3 text-lite-gray leading-tight focus:outline-none focus:ring focus:border-teal-1000 " placeholder="Tyler Winklevoss" type="text" style={{ width: "100%" }} />
                </div>

                <div className="mb-2 w-100">
                  <label className="block text-lite-gray text-sm font-medium mb-2" htmlFor="email">
                    Email
                  </label>
                  <br />
                  <input data-test="email-field" className="bg-white shadow-sm appearance-none border border-xl-gray rounded w-full py-2 ps-3 text-lite-gray leading-tight focus:outline-none focus:ring focus:border-teal-1000 " placeholder="tylerw@gemini.com" type="text" style={{ width: "100%" }} />
                </div>

                <div className="mb-3 w-100">
                  <label className="block text-lite-gray text-sm font-medium mb-2" htmlFor="password">
                    Password
                  </label>
                  <br />
                  <input data-test="password-field" className="bg-white shadow-sm appearance-none border border-xl-gray rounded w-full py-2 ps-3 text-lite-gray leading-tight focus:outline-none focus:ring focus:border-teal-1000 " placeholder="••••••••" autoComplete="new-password" type="password" style={{ width: "100%" }} />
                </div>
                <button className='submit'>SUBMIT</button>
                <div className="text-xs text-gray-500 mx-auto text-start mt-1">Wire Nodes always keeps your information safe &amp; secure.</div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="decore2">
        <img src='./images/boxes2.png' alt="" />
      </div>

      {/* feature */}
      {/* <div className="decore">
        <img src='./images/boxes1.png' alt="" />
      </div>
      <section id='feature' className="Virtuse_news ak_home_vituse">
        <div className="Virtuse_news_cont text-start">
          <h1 className="main_head text-start"><span style={{ color: "rgb(0, 53, 138)" }}>Featured</span> in the following</h1>
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
      </div> */}

      {/* services */}
      <div className='services container-fluid'>
        <div className="Virtuse_news_cont text-center">
          <h1 className="main_head text-center">Get started immediatelly with WIREDNODES</h1>
          <p className="Virtuse_head mb-0 text-center"></p>
          <p className="Virtuse_para mb-0 text-center ">
            Choose your service below
          </p>
        </div>
        <div className='provider'>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className='mb-0 fw-bold' style={{ color: "rgb(24, 84, 180)", fontSize: "20px" }}>Node Runner Service</p>
                <p className='mb-1'>$130/mo</p>
                <p><span style={{ color: "rgb(24, 84, 180)", fontSize: "40px" }}>$130</span>/mo</p>
                <ul>
                  <li><i className="me-2 fas fa-check" ></i> Get rewarded by building web3 infrastructure</li>
                  <li><i className="me-2 fas fa-check" ></i> We manage the node for you</li>
                  <li><i className="me-2 fas fa-check" ></i> No hassle nor worries</li>
                </ul>
              </div>
              <div className="flip-card-back">
                <button className='free_trial'>Learn more</button>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className='mb-0 fw-bold' style={{ color: "rgb(24, 84, 180)", fontSize: "20px" }}>Full Blockchain Nodes</p>
                <p className='mb-1'>$40+/mo</p>
                <p><span style={{ color: "rgb(24, 84, 180)", fontSize: "40px" }}>$40+</span>/mo</p>
                <ul>
                  <li><i className="me-2 fas fa-check" ></i> Dedicated</li>
                  <li><i className="me-2 fas fa-check" ></i> No rate limiting or throttling</li>
                  <li><i className="me-2 fas fa-check" ></i> Customized to your needs</li>
                  <li><i className="me-2 fas fa-check" ></i> We will work with you to get best performance</li>
                </ul>
              </div>
              <div className="flip-card-back">
                <button className='free_trial'>Learn more</button>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className='mb-0 fw-bold' style={{ color: "rgb(24, 84, 180)", fontSize: "20px" }}>KVM Linux Servers</p>
                <p className='mb-1'>$7.95+/mo</p>
                <p><span style={{ color: "rgb(24, 84, 180)", fontSize: "40px" }}>$7.95+</span>/mo</p>
                <ul>
                  <li><i className="me-2 fas fa-check" ></i> 1 IPv4 address</li>
                  <li><i className="me-2 fas fa-check" ></i> IPv6 capable</li>
                  <li><i className="me-2 fas fa-check" ></i> Storage or Performance</li>
                  <li><i className="me-2 fas fa-check" ></i> Non Managed and Fully Managed</li>
                </ul>
              </div>
              <div className="flip-card-back">
                <button className='free_trial'>View plans</button>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <p className='mb-0 fw-bold' style={{ color: "rgb(24, 84, 180)", fontSize: "20px" }}>Premium Web Hosting</p>
                <p className='mb-1'>$14.95+/mo</p>
                <p><span style={{ color: "rgb(24, 84, 180)", fontSize: "40px" }}>$14.95+</span>/mo</p>
                <ul>
                  <li><i className="me-2 fas fa-check" ></i> DirectAdmin or Plesk</li>
                  <li><i className="me-2 fas fa-check" ></i> Free Let's Encrypt SSL</li>
                  <li><i className="me-2 fas fa-check" ></i> 1Gbps Bandwidth</li>
                  <li><i className="me-2 fas fa-check" ></i> Instant Setup</li>
                </ul>
              </div>
              <div className="flip-card-back">
                <button className='free_trial'>View plans</button>
              </div>
            </div>
          </div>
        </div>
        <div className='' style={{height: "100vh", zIndex: "-1"}}>
          <Particles
          style={{height: "100vh"}}
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "black",
                },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 3,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: false,
                  value: 5,
                },
              },
              detectRetina: true,
            }}
          />
        </div>
      </div>

      {/* trusted */}
      <div id='pricing' className="decore">
        <img src='./images/boxes1.png' alt="" />
      </div>
      <div id='trust' className='trusted'>
        <div className="Virtuse_news_cont">
          <h1 className="main_head">We work with these blockchains.</h1>
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

      {/* why run */}
      <div className="decore">
        <img src='./images/boxes1.png' alt="" />
      </div>
      <section id='about' className="global d-flex align-items-center" style={{ minHeight: "70vh" }}>
        <div className="container">
          <div className="row mx-0 d-flex align-items-center">
            <div className="col-lg-12 co-12 d-flex flex-column align-items-center" style={{ paddingTop: "105px" }}>
              <h1 className="main_head text-center mb-5">Why run a node?</h1>
              <p className="global_para fs-7 fw-300 pt-1 text-center">
                Nodes are what help the network verify transactions on the blockchain, and you get to be a part of this amazing blockchain. They keep things secure and help speed things up. Best of all, if you're machine is already running while mining then the impact to you is next to zero, just a little bit of disk space.</p>
            </div>
          </div>
        </div>
      </section>
      <div className="decore2">
        <img src='./images/boxes2.png' alt="" />
      </div>


      {/* footer */}
      <div className='footer'>
        <div className="first_footer">
          {/* <p className="ready_para text-center mb-4 ">
            Ready to live your website with WIRE_NODES
          </p> */}
          <h1 className="main_head mb-5">Need a website? Get started today!</h1>
          <button className='few_seconds'>Contact Us button</button>
        </div>
        <div className='real_parent'>
          <div className='container real_footer mb-5'>
            <div>
              <img src="./images/logo2.PNG" alt="" height="30px" width="200px" />
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
