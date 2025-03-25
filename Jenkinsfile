pipeline {
    agent any

    environment {
        NODE_ENV = "production"
    }

    stages {
        stage('Clonar repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/TU_USUARIO/cambar-web-app.git'
            }
        }

        stage('Instalar dependencias') {
            steps {
                sh 'npm install'
            }
        }

        stage('Compilar proyecto') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Desplegar') {
            steps {
                sh 'rm -rf /var/www/cambar.com.mx/*'
                sh 'cp -r dist/* /var/www/cambar.com.mx/'
            }
        }
    }

    post {
        success {
            echo '✅ Despliegue completado correctamente.'
        }
        failure {
            echo '❌ Error en el pipeline.'
        }
    }
}