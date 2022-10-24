pipeline {
    agent {
        docker {
            image 'node:19-bullseye-slim' 
        }
    }
	environment {
        CI = 'true'
		NODE_ENV = 'production'
		HOME = '.'
		npm_config_cache = 'npm_cache'
    }
    stages {
        stage('Build') { 
            steps {
				sh 'uname -a'
                sh 'npm install --loglevel=verbose'
				//sh 'npm install react-scripts@3.4.1'
				sh 'npm clean-install --only=production'
            }
        }
    }
}

