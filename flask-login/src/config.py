class config:
    SECRET_KEY ='123'

class DevelopmentConfig(config):
    
    DEBUG = True
    MYSQL_HOST ='localhost'
    MYSQL_USER = 'root'
    MYSQL_PASSWORD = ''
    MYSQL_DB ='andaia'

config={
    'development':DevelopmentConfig
}