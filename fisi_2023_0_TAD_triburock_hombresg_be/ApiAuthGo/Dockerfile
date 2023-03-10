# Imagen base
FROM golang:latest

# Carpeta de trabajo
WORKDIR /app

# Copiar archivos de la aplicación
COPY . .

# Compilar la aplicación
RUN go build -o api-auth

# Exponer el puerto 8080
EXPOSE 8000

# Comando por defecto
CMD ["./api-auth"]