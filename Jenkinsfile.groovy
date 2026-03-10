pipeline {
    agent any
    tools { nodejs 'node20' } // On utilise le nom créé à la Mission 1
    stages {
        stage('Installation') {
            steps { bat 'npm install' }
        }
        stage('Test') {
            steps { bat 'npm test' }
        }
        stage('Build Manuel') {
            steps { echo 'Application prête !' }
        }
    }
    post {
        success { echo 'Bravo, déploiement réussi !' }
    }
}