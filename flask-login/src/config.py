class Config:
    SECRET_KEY ='123'

#Conexion  a base de datos 
class DevelopmentConfig(Config):
    
    DEBUG = True
    MYSQL_HOST ='localhost'
    MYSQL_USER = 'root'
    MYSQL_PASSWORD = ''
    MYSQL_DB ='andaia'

config={
    'development':DevelopmentConfig
}