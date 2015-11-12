# --- !Ups
CREATE TABLE profils (
  id_profil VARCHAR2(50) NOT NULL PRIMARY KEY,
  libelle VARCHAR2(250),
  status VARCHAR2(10) NOT NULL,
  date_creation VARCHAR2(50),
  cree_par VARCHAR2(50)
);

INSERT INTO profils (id_profil, libelle, date_creation, cree_par, status)
VALUES ('39692c85-abb0-4126-9ed5-4d6f57310416', 'CHARGE CLIENTELE PROFESSIONNEL0S', '26/10/2015', 'ADMIN', 'Incctive');

INSERT INTO profils (id_profil, libelle, date_creation, cree_par, status)
VALUES ('07116381-1fd6-416b-aff4-d5011d19beb0', 'RESPONSABLE DE POINT DE VENTE', '05/10/2015', 'ARORA', 'Active');

INSERT INTO profils (id_profil, libelle, date_creation, cree_par, status)
VALUES ('bf41aea8-8ac1-4964-9532-65a1155a4e33', 'DIRECTEUR DE SECTEUR GRANDES ENTREPRISES', '01/02/2015', 'GALLOIS', 'Inactive');

INSERT INTO profils (id_profil, libelle, date_creation, cree_par, status)
VALUES ('770b780f-e87b-457a-9a9b-87e41fffed15', 'DIRECTEUR DE SECTEUR', '11/10/2014', 'EXPERT', 'Active');

INSERT INTO profils (id_profil, libelle, date_creation, cree_par, status)
VALUES ('120b780f-e87b-457a-9a9b-87e41fffed10', 'DIRECTEUR DE FINANCE', '12/12/2015', 'EXPERT-CALF', 'Active');

# --- !Downs
DROP TABLE profils;
