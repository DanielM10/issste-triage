import React, { Component } from 'react';
import Swal from 'sweetalert2'
import Cookies from 'js-cookie';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FontAwesomeIcon from '@fortawesome/fontawesome-free';
import '../Header/Header.css';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mostrar : false,
			user: {},
			disabledInputs: false,
			loading: false,
			messageShow: false,
			messageType: '',
			messageText: '',
			name: '',
			email: '',
			username: '',
			newpassword: '',
			role: 1,
			client_id: 0,
			country: '',
			state: '',
			city: '',
			phone: '',
			company: '',
			company_position: '',
			sales_contact: '',
			comments: '',
			clients: [],
			carriers: [],
			oldChecked: [],
			checked: [],
			initialPagesStatus: [],
			pages: [],
			roles: [],
			multiselector: [],
			multiClients: [],
			multiCarriers: [],
			selectedClients: [],
			defaultClients: [],
			defaultCarriers: []
		};
		this.closesession = this.closesession.bind(this);
	}
	closesession(){
		Swal.fire({
			title: 'Do you want to close your session?',
			showDenyButton: true,
			showCancelButton: false,
			confirmButtonText: 'End session',
			denyButtonText: `Cancel `,
		  }).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
			  Swal.fire('Session ended!', '', 'success').then((result) => {
				Cookies.remove('Logged', { path: 'http://localhost:3000' })
				Cookies.remove('Name', { path: 'http://localhost:3000' })
				Cookies.remove('Position', { path: 'http://localhost:3000' })
				window.location.href = '/';				
			  })
			} 
		  })
	}
	
	componentDidMount(){
		debugger;
		if(Cookies.get('Logged')=="true"){
		   this.setState({'mostrar':true});
		}
	}
	render(){ 
		debugger;
		if(this.state.mostrar==true){		
	return(
		<div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<img
              src="/Images/logog.png"
              width="3%"
              height="4%"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
	<p className='whites'> {Cookies.get("positionName")} - {Cookies.get("Name")} </p>
      <Container>
	  <Navbar.Brand href="/Dashboard">

          </Navbar.Brand>
        <Navbar.Brand href="/Dashboard"><i class="fa-solid fa-chart-line"></i>Dashboard</Navbar.Brand>
        <Navbar.Toggle bg="dark"/> 
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
		  <Nav.Link href="/Settings"><i class="fa-solid fa-screwdriver-wrench"></i>Settings</Nav.Link>
            <Nav.Link href="/Tracking"><i class="fa-solid fa-truck"></i>Tracking</Nav.Link>
            {/* <Nav.Link href="/Clients">Clients</Nav.Link> */}
			<Nav.Link href="/MonthlyReport"><i class="fa-solid fa-list"></i>Reports</Nav.Link>
			<Nav.Link href="/Users"><i class="fa-solid fa-users"></i>Users</Nav.Link>
			<Nav.Link href="/Monitoring"><i class="fa-solid fa-signal"></i>Monitoring</Nav.Link>
			<Nav.Link href="/Devices"><i class="fa-solid fa-tachograph-digital"></i>Devices</Nav.Link>
            {/* <NavDropdown title="Reports" id="basic-nav-dropdown">
              <NavDropdown.Item href="/MonthlyReport">Prod Report</NavDropdown.Item>             
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
	  <button type="button" class="btn btn-outline-warning" onClick={()=>this.closesession()}><i class="fa-solid fa-arrow-right-from-bracket"></i></button>
    </Navbar>
		</div>

	);
	}
}
}