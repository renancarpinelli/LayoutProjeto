import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './layout.css'

const listaMenu = {
    listStyleType: 'none',
};

const listaMenuli = {
  display:'inline',
};

const iconStyles = {
  marginRight: 24,
};

class Layout extends Component {

  render() {
    return (
      
		  <MuiThemeProvider>
        <div>
          <AppBar
            title="Evobooks"
            iconElementRight={(
              <ul style={listaMenu}>
                <li style={listaMenuli}> <FlatButton label="HOME" /> </li>
                <li style={listaMenuli}> <FlatButton label="EDITAR" /> </li>
                <li style={listaMenuli}> <FlatButton label="SOBRE" /> </li>
                <li style={listaMenuli}> <FlatButton label="CONTATO" /> </li>
              </ul>
            )}
            showMenuIconButton={false}
          />

          {this.props.children}

          <footer id="footer">
            <div>
              <p id="textoRodape" style={{fontFamily: 'Roboto' }}>Evobooks - <a className="linkPreto" href="http://evobooks.com.br/cases/">http://evobooks.com.br/cases/</a></p>
            </div>
          </footer>
        </div>  
		  </MuiThemeProvider>    
    );
  }
}

export default Layout;