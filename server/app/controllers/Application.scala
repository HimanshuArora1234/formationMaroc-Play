package controllers

import play.api._
import play.api.mvc._
import play.api.libs.json._

import services._
import models._

class Application extends Controller {

  def index = Action {
    Ok(views.html.index())
  }

  def allProfils = Action {
    val profilServices = new ProfilsService()
    Ok(Json.toJson(profilServices.getAll))
  }

  /**
   * Controller to update a profil after validating JSON request body.
   * Use `/api/profil` as call endpoint from front end API.
   * @return the update profil
   */
  def updateProfil = Action(BodyParsers.parse.json)  { implicit request =>
    request.body.validate[Profil].fold(
      errors => {
        BadRequest(Json.obj("status" ->"KO", "message" -> JsError.toJson(errors)))
      },
      profil => {
        new ProfilsService().updateProfil(profil)
        Ok(Json.toJson(profil))
      }
    )
  }


}
