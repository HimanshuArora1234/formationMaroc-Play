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

  private def updateQuery(profil:Profil) = SQL("""
    UPDATE profils
    SET libelle = {libelle}
    , status = {status}
    , date_creation = {date_creation}
    , cree_par = {cree_par}
    WHERE id_profil = {id_profil}
  """).on(
    'id_profil -> profil.idProfil,
    'libelle -> profil.libelle,
    'status -> profil.status,
    'date_creation -> profil.dateCreation,
    'cree_par -> profil.creePar
  )

  def getAll:List[Profil] = {
    DB.withConnection {implicit c =>
      getAllQuery.as(profilRowParser *)
    }
  }

  def updateProfil(profil:Profil) = {
    DB.withConnection { implicit c =>
      updateQuery(profil).executeUpdate
    }
  }
}
