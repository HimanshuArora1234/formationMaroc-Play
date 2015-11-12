package models

import play.api.libs.json.Json

case class Profil(
  idProfil: String,
  libelle: String,
  status: String, //Active, Inactive
  dateCreation: String,
  creePar: String
)

object Profil {
  implicit val fmt = Json.format[Profil]
}
