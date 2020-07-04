import React, { useState } from 'react';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Input,
  Col,
  Row,
  Card,
  CardBody
} from 'reactstrap';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const Categories = [
    {
      iconName: "Painter",
      title: "Painters",
      description: "Lorem ipsum",
      link: "http://google.com"
    },

    {
      iconName: "Plumber",
      title: "Plumbers",
      description: "Lorem ipsum",
      link: "http://google.com"
    },

    {
      iconName: "Mechanic",
      title: "Auto Mechanic",
      description: "Lorem ipsum",
      link: "http://google.com"
    },

    {
      iconName: "CCTV",
      title: "CCTV Installer",
      description: "Lorem ipsum",
      link: "http://google.com"
    },

    {
      iconName: "Carpenter",
      title: "Carpenter",
      description: "Lorem ipsum",
      link: "http://google.com"
    },

    {
      iconName: "Cleaners",
      title: "Gardener",
      description: "Lorem ipsum",
      link: "http://google.com"
    },

    {
      iconName: "Welder",
      title: "Welder",
      description: "Lorem ipsum",
      link: "http://google.com"
    },

    {
      iconName: "Cleaners",
      title: "Cleaner",
      description: "Lorem ipsum",
      link: "http://google.com"
    }
  ]

  const FooterTopCategories = [
    "Plumbers", "BrickLayers", "Electricians", "Carpenters", "Painters", "Welders", "Tilers", "Aluminium Roof", "Gardener", "Paving Stones", "Windows/Doors"
  ]

  const FooterQuickLinks = [
    {
      title: "Home",
      link: "#"
    },

    {
      title: "Our Contact Details",
      link: "#"
    },

    {
      title: "Artisan Registration",
      link: "#"
    },

    {
      title: "FAQ",
      link: "#"
    },

    {
      title: "Disclaimer",
      link: "#"
    },

    {
      title: "Data Privacy Policy",
      link: "#"
    },

    {
      title: "Tell a Friend",
      link: "#"
    },

    {
      title: "Bore Hole Services",
      link: "#"
    },

    {
      title: "Cleaning Services",
      link: "#"
    },

    {
      title: "Fumigation Services",
      link: "#"
    },

    {
      title: "Architects/Builders",
      link: "#"
    },

    {
      title: "Sewage Services",
      link: "#"
    },
  ]

  const FooterHomeServices = [
    {
      title: "Water Tanker",
      Link: "#"
    },

    {
      title: "Bore Hole Services",
      Link: "#"
    },

    {
      title: "Cleaning Services",
      Link: "#"
    },


    {
      title: "Fumigation Services",
      Link: "#"
    },

    {
      title: "Architects/Builders",
      Link: "#"
    },

    {
      title: "Sewage Services",
      Link: "#"
    },
    "#"
  ]

  return (
    <>
      <Container>
        <Navbar light className="bg-white py-md-3" expand="md">
          <NavbarBrand className="text-dark" href="/">Artisan Registry</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="mr-md-3 text-dark" href="/components/">Search</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="mr-md-3 text-dark" href="https://google.com">Contact us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="mr-md-3 text-dark" href="https://google.com">FAQs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="mr-md-3 px-3 border-dark text-dark" href="https://google.com">Login</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>


      <div className="py-3">
        <header>
          <Container className="">
            <div className="col-md-7">
              <h1 className="font-weight-bold">Find and hire efficient and skilled artisans around you.</h1>
              <p className="text-gray mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia congue velit, quis aliquam dolor gravida non. Etiam elementum aliquam dolor ut mollis. Nunc consectetur elementum dolor, eu aliquet justo sollicitudin a. Pellentesque ac quam accumsan, varius augue in, consectetur purus</p>

              <button className="btn btn-primary border-0 px-4 py-2 rounded-0">Get Started</button>
            </div>


            <div className="mx-3 d-flex flex-column flex-md-row justify-content-md-between shadow-sm border mt-5 mb-1">
              <div className="text-center p-2 p-md-0 w-75 my-auto">
                I'm looking for an

               <Input style={{ width: "120px", outline: 0 }} className="d-inline-block border-0 pr-2 text-primary" type="select" name="selectMulti" id="exampleSelectMulti">
                  <option>Electrician </option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>

                <span className="ml-3">around</span>

                <Input style={{ width: "120px", outline: 0 }} className="d-inline-block border-0 pr-2 text-primary" type="select" name="selectMulti" id="exampleSelectMulti">
                  <option>Yaba </option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </div>

              <div className="my-auto">
                <button className="btn btn-success btn-block px-4 py-3 rounded-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12H3M14 5L21 12L14 5ZM21 12L14 19L21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                </button>
              </div>
            </div>

            <div className="col-8 m-auto">
              <Row className="mx-3">
                <Col size="6" className="mt-5 text-center">
                  <img alt="icon" src={require("./icons/artisans.svg")} />
                  <p className="mb-0 mt-2 font-weight-bold">3130</p>
                  <p className="mb-0">Artisans</p>
                </Col>

                <Col size="6" className="mt-5 text-center">
                  <img alt="icon" src={require("./icons/clients.svg")} />
                  <p className="mb-0 mt-2 font-weight-bold">3130</p>
                  <p className="mb-0">Clients</p>
                </Col>

                <Col size="6" className="mt-5 text-center">
                  <img alt="icon" src={require("./icons/states.svg")} />
                  <p className="mb-0 mt-2 font-weight-bold">3130</p>
                  <p className="mb-0">States</p>
                </Col>

                <Col size="6" className="mt-5 text-center">
                  <img alt="icon" src={require("./icons/categories.svg")} />
                  <p className="mb-0 mt-2 font-weight-bold">3130</p>
                  <p className="mb-0">Categories</p>
                </Col>
              </Row>
            </div>

          </Container>
        </header>

        <main className="mt-md-5 pt-md-5">

          {/* Top Artisans */}
          <section id="Top Artisans" className="bg-light py-5 mt-5">
            <Container className="">
              <div className="text-center mt-4 mb-5">
                <h2>Top Artisans</h2>
                <p className="text-gray">A section of the top rated artisans on the platform across multiple categorie and locations, based on client reviews.</p>
              </div>

              <Row className="">
                <Col size="6">
                  <Card className="text-center border-0 mt-5">
                    <CardBody>
                      <img src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Artisan" style={{ marginTop: "-70px", width: "90px", height: "90px" }} className="img-fluid bg-white rounded-circle object-fit-cover shadow-sm" />

                      <p className="mb-0 mt-4">John Agbalumo</p>
                      <p className="mb-0 text-gray">Ilupeju, Lagos Welder</p>

                      <div className="d-flex flex-row justify-content-center mt-3">
                        <img src={require("./icons/Star.svg")} alt="Star" />
                        <img src={require("./icons/Star.svg")} alt="Star" />
                        <img src={require("./icons/Star.svg")} alt="Star" />
                        <img src={require("./icons/Star.svg")} alt="Star" />
                        <img src={require("./icons/Star.svg")} alt="Star" />
                      </div>

                      <button className="btn btn-primary border-0 px-4 py-2 mt-3 mb-2">View Profile</button>
                    </CardBody>
                  </Card>
                </Col>

                <Col size="6">
                  <Card className="text-center border-0 mt-5">
                    <CardBody>
                      <img src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Artisan" style={{ marginTop: "-70px", width: "90px", height: "90px" }} className="img-fluid bg-white rounded-circle object-fit-cover shadow-sm" />

                      <p className="mb-0 mt-4">John Agbalumo</p>
                      <p className="mb-0 text-gray">Ilupeju, Lagos Welder</p>

                      <div className="d-flex flex-row justify-content-center mt-3">
                        <img src={require("./icons/Star.svg")} alt="Star" />
                        <img src={require("./icons/Star.svg")} alt="Star" />
                        <img src={require("./icons/Star.svg")} alt="Star" />
                        <img src={require("./icons/Star.svg")} alt="Star" />
                        <img src={require("./icons/Star.svg")} alt="Star" />
                      </div>

                      <button className="btn btn-primary border-0 px-4 py-2 mt-3 mb-2">View Profile</button>
                    </CardBody>
                  </Card>
                </Col>

                <Col size="6">
                  <Card className="text-center border-0 mt-5">
                    <CardBody>
                      <img src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Artisan" style={{ marginTop: "-70px", width: "90px", height: "90px" }} className="img-fluid bg-white rounded-circle object-fit-cover shadow-sm" />

                      <p className="mb-0 mt-4">John Agbalumo</p>
                      <p className="mb-0 text-gray">Ilupeju, Lagos Welder</p>

                      <div className="d-flex flex-row justify-content-center mt-3">
                        <img src={require("./icons/Star.svg")} alt="Star" />
                        <img src={require("./icons/Star.svg")} alt="Star" />
                        <img src={require("./icons/Star.svg")} alt="Star" />
                        <img src={require("./icons/Star.svg")} alt="Star" />
                        <img src={require("./icons/Star.svg")} alt="Star" />
                      </div>

                      <button className="btn btn-primary border-0 px-4 py-2 mt-3 mb-2">View Profile</button>
                    </CardBody>
                  </Card>
                </Col>

                <Col size="6">
                  <Card className="text-center border-0 mt-5">
                    <CardBody>
                      <img src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Artisan" style={{ marginTop: "-70px", width: "90px", height: "90px" }} className="img-fluid bg-white rounded-circle object-fit-cover shadow-sm" />

                      <p className="mb-0 mt-4">John Agbalumo</p>
                      <p className="mb-0 text-gray">Ilupeju, Lagos Welder</p>

                      <div className="d-flex flex-row justify-content-center mt-3">
                        <img src={require("./icons/Star.svg")} alt="Star" />
                        <img src={require("./icons/Star.svg")} alt="Star" />
                        <img src={require("./icons/Star.svg")} alt="Star" />
                        <img src={require("./icons/Star.svg")} alt="Star" />
                        <img src={require("./icons/Star.svg")} alt="Star" />
                      </div>

                      <button className="btn btn-primary border-0 px-4 py-2 mt-3 mb-2">View Profile</button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>

          {/* Top Categories */}
          <section id="Top Categories" className="bg-light py-5">
            <Container className=" py-5">
              <div className="text-center mb-5">
                <h2>Top Categories</h2>
                <p className="text-gray">A section of the top rated job categories onthe platform, based on client requests</p>
              </div>

              <Row noGutters className=" text-center text-md-left">
                {Categories.map(category => {
                  const { iconName, title, description, link } = category;

                  return (
                    <Col key={title} sm="6" md="4" className="p-1">
                      <Card className="border-0">
                        <CardBody className="row">
                          <div className="col-md-4">
                            <img alt={title} src={require(`./icons/${iconName}.svg`)} className="img-fluid bg-white" style={{ width: "60px", height: "60px" }} />
                          </div>

                          <div className="col-md-8">
                            <p className="mb-0 mt-2 mt-md-0">{title}</p>
                            <p className="mb-3 text-gray">{description}</p>

                            <a className="text-underline" href={link}>Book now</a>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </section>
        </main>

        <footer className="bg-dark py-5">
          <Container className=" text-white">
            <div className="text-center mb-5">
              <p className="mb-0">&copy; Copyright Artisan Registry 2018 All Rights Reserved</p>
              <img src={require("./2.png")} className="img-fluid my-4" width="70px" alt="Lagos state government ministry of wealth creation and employment" />
            </div>

            <div className="col-md-10 m-auto text-center text-md-left">
              <Row>
                <Col sm="6" md="4">
                  <p className="text-primary">Top Categories</p>

                  <ul className="list-unstyled">
                    {FooterTopCategories.map(category => {
                      return (
                        <li key={category}>{category}</li>
                      );
                    })}
                  </ul>
                </Col>
                <Col sm="6" md="4">
                  <p className="text-primary">Quick links</p>
                  <ul className="list-unstyled">
                    {FooterQuickLinks.map(quickLink => {
                      return (
                        <li key={quickLink.title}>
                          <a className="text-white" href={quickLink.link}>
                            {quickLink.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </Col>
                <Col sm="6" md="4">
                  <p className="text-primary">Home Services</p>
                  <ul className="list-unstyled">
                    {FooterHomeServices.map(homeService => {
                      return (
                        <li key={homeService.title}>
                          <a className="text-white" href={homeService.Link}>
                            {homeService.title}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </Col>
              </Row>
            </div>
          </Container>
        </footer>
      </div>
    </>
  );
}

export default App;
