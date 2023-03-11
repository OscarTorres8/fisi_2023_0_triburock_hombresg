package models

type Usuario struct{
	UsuarioId uint `gorm:"column:UsuarioId"`
	Nombre string	`gorm:"column:Nombre"`
	Apellido string `gorm:"column:Apellido"`
	Email string `gorm:"column:Email"`
	DNI string `gorm:"column:DNI"`
	Telefono string `gorm:"column:Telefono"`
	Contrasenia []byte `json:"-" gorm:"column:Contrasenia"`
}