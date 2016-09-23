import React, { Component } from 'react';
import './App.css';

class Empty extends Component {
  render() {
    const {algo} = this.props;
    return (<div className="cell">
        <div className="empty" />
        <div className="algo">{algo}</div>
        <div className="arrow" />
    </div>);
  }
}

class Org extends Component {
  render() {
    return (<div className="cell">
        <div className="org">
            {this.props.children}
        </div>
    </div>);
  }
}
class Cert extends Component {
  render() {
    const {subject, issuer, arrow, algo} = this.props;
    return (<div className="cell">
		<div className="cert">
			<ul>
				<li><label>Власник</label> {subject}</li>
				<li><label>Засвідчено</label> {issuer}</li>
			</ul>
		</div>
        <div className="algo">{algo}</div>
        {arrow && <div className="arrow" />}
    </div>); 
  }
}

class App extends Component {
    render() {
        return (<div className="App">
            <div className="App-header">
                <h2>Зараз</h2>

                <div className="line">
                    <Org>ЦЗО Мін’юста</Org>
                    <Cert issuer="ЦЗО" subject="ЦЗО" arrow algo="ДСТУ4145" />
                    <Empty algo="ДСТУ4145" />
                    <Empty algo="ДСТУ4145" />
                    <Empty algo="ДСТУ4145" />

                </div>
                <div className="line">
                    <Org>АЦСК</Org>
                    <Cert issuer="ЦЗО" subject="CA1" arrow algo="ДСТУ4145" />
                    <Cert issuer="ЦЗО" subject="CA2" arrow algo="ДСТУ4145" />
                    <Cert issuer="ЦЗО" subject="CA3" arrow algo="ДСТУ4145" />
                    <Cert issuer="ЦЗО" subject="CA4" arrow algo="ДСТУ4145" />
                </div>

                <div className="line">
                    <Org>Користувачи</Org>
                    <Cert issuer="CA1" subject="I. Prizvysko" />
                    <Cert issuer="CA2" subject="A. Familije" />
                    <Cert issuer="CA3" subject="J. Surname" />
                    <Cert issuer="CA4" subject="F. Namae" />
                </div>

                <h2>Буде</h2>

                <div className="line">
                    <Org>Мін’юст</Org>

                    <p>
                        Електронний реєстр АЦСК
                    </p>
                </div>

                <div className="line">
                    <Org>АЦСК</Org>
                    <Cert issuer="CA1" subject="CA1" arrow algo="ДСТУ4145"/>
                    <Cert issuer="CA2" subject="CA2" arrow algo="RSA 4096" />
                    <Cert issuer="CA3" subject="CA3" arrow algo="ECDSA"/>
                    <Cert issuer="CA4" subject="CA4" arrow algo="Ed25519" />
                </div>

                <div className="line">
                    <Org>Користувачи</Org>
                    <Cert issuer="CA1" subject="I. Prizvysko" />
                    <Cert issuer="CA2" subject="A. Familije" />
                    <Cert issuer="CA3" subject="J. Surname" />
                    <Cert issuer="CA4" subject="F. Namae" />
                </div>

            </div>
        </div>);
    }
}

export default App;
