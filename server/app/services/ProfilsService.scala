package services

import play.api.Configuration
import play.api.db.DB
import anorm._
import anorm.SqlParser._

import play.api.Play.current

import models.Profil

class ProfilsService {

  val profilRowParser = for {
    idProfil <- get[String]("id_profil")
    libelle <- get[String]("libelle")
    status <- get[String]("status")
    dateCreation <- get[String]("date_creation")
    creePar <- get[String]("cree_par")
  } yield Profil(
    idProfil,
    libelle,
    status,
    dateCreation,
    creePar
  )

  private def getAllQuery = SQL"""
    SELECT * FROM profils
  """

  def getAll:List[Profil] = {
    DB.withConnection{implicit c =>
      getAllQuery.as(profilRowParser *)
    }
  }
}
