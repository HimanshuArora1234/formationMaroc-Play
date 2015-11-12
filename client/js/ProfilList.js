import React, { PropTypes } from 'react';

import { profilStatusToggle } from './actions';

export default class ProfilList extends React.Component {

  constructor(props) {
    super(props);

    this.renderProfil = this.renderProfil.bind(this);
    this.cmp = this.cmp.bind(this);
  }

  render() {

    return (
      <div id="pageContainer">
        <header id="topHeader">
          <div>
            <img className="logo-ca" src="/assets/images/logoca.png" alt="Logo CA" />
            <div className="userContainer">
              <div className="userId">
                <span className="userName">Sylvie MARTIN</span><br />
                <span className="userRole">Conseillère Crédit Agricole</span>
              </div>
              <img className="avatar" src="/assets/images/avatar.png" alt="avatar" />
            </div>
          </div>
        </header>
        <main id="mainContainer">

            <div className="grid-wrapper">
              {this.props.profils.sort((a, b) => this.cmp(a.libelle, b.libelle)).map(p => this.renderProfil(p))}
            </div>

        </main>
      </div>
    );
  }

  renderProfil(profil) {

    const isActive = profil.status === "Active";
    const activeClass = isActive ? 'icon-Check2 active' : 'icon-Check2 off active';
    const inactiveClass = isActive ? 'icon-Ban inactive' : 'icon-Ban off inactive';

    return (
      <div className="mini-box grid-item" key={profil.idProfil}>
        <div>
          <div className="box-title">{profil.libelle}</div>
          <div className="info">
            <span className="number">10</span><span> utilisateurs</span>
          </div>
          <div className="info">
            <h3 className="label">Création</h3>
            <p>{profil.creePar}</p>
            <h3 className="label">Date</h3>
            <p>le {profil.dateCreation}</p>
          </div>
        </div>
        <div className="buttons">
          <div className="on-off">
            <span className={activeClass} />
            <input className="pointer" type="checkbox" checked={isActive} onChange={this.toggleStatus(profil)}/>
            <span className={inactiveClass} />
          </div>
          <span className="icon-Note pointer"></span>
          <span className="icon-Duplicate pointer"></span>
          <span className="icon-Bin pointer"></span>
        </div>
      </div>
    );
  }

  toggleStatus(profil) {
    return e => {
      e.preventDefault();
      const status = e.target.checked ? "Active" : "Inactive";
      profilStatusToggle(Object.assign({}, profil, {status: status}));
    };
  }

  cmp(x,y) {
    if(x.toLowerCase() !== y.toLowerCase()) {
        x = x.toLowerCase();
        y = y.toLowerCase();
    }
    return x > y ? 1 : (x < y ? -1 : 0);
    // or return x.localeCompare(y);
  }
}

ProfilList.propTypes = {
  profils: PropTypes.array.isRequired
};
