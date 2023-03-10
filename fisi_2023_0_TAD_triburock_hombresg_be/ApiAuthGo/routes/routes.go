package routes

import (
	"github.com/OskarCG/go-auth/controllers"
	"github.com/gofiber/fiber/v2"
)

func Setup(app *fiber.App){
	app.Post("/api/registro",  controllers.Register)
	app.Post("/api/login",  controllers.Login)
	app.Get("/api/usuario",  controllers.User)
	app.Post("/api/logout",  controllers.Logout)
}