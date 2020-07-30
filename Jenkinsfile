pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                println "Build"
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
                println "Deploy"
            }
        }
    }
}
