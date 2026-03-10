pipeline {
    agent any
    stages {
        stage('Installation') {
            steps { 
                bat 'npm install' 
            }
        }
        stage('Test') {
            steps { 
                bat 'npm test' 
            }
        }
        stage('Build Manuel') {
            steps { 
                echo 'Application prête !' 
            }
        }
    }
    post {
        success { 
            echo 'Bravo, déploiement réussi !' 
        }
    }
}