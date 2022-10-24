pipeline {
    agent {
        docker {
            image 'node:19-bullseye-slim' 
            args '-p 3000:3000' 
        }
    }
	environment {
        CI = 'true'
		NODE_ENV = 'production'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'
				sh 'npm install react-scripts@3.4.1 -g'
				sh 'npm clean-install --only=production'
            }
        }
    }
}

