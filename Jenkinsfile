pipeline {
    agent {
        docker {
            image 'node:19-bullseye-slim' 
        }
    }
	environment {
        CI = 'true'
		NODE_ENV = 'production'
    }
    stages {
        stage('Build') { 
            steps {
				sh 'uname -a'
                sh 'npm install --loglevel=verbose'
				sh 'npm install react-scripts@3.4.1 -g'
				sh 'npm clean-install --only=production'
            }
        }
    }
}

