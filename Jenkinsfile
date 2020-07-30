pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                bat 'npm run test'
            script{
             allure([
             includeProperties: false, jdk: '', results: [[path: 'allure-results']]
             ])
             }
            }
        }
        stage('Deploy') {
            steps {
                println "Deploy"
            }
        }
    }
}
