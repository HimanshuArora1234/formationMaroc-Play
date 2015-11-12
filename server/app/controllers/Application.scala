package controllers

import play.api._
import play.api.mvc._
import play.api.libs.json._

import services._

class Application extends Controller {

  def index = Action {
    Ok(views.html.index())
  }

  def allProfils = Action {
    val profilServices = new ProfilsService()
    Ok(Json.toJson(profilServices.getAll))
  }


}
