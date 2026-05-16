pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Android Tests') {
            steps {
                sh 'npm run test:android'
            }
        }

        stage('Run iOS Tests') {
            steps {
                sh 'npm run test:ios'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'evidence/screenshots/**/*.png'
            echo 'Execution completed'
        }
    }
}
