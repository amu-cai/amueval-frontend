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
                //sh 'npm install --loglevel=verbose'
				sh 'npm install'
				sh 'npm clean-install --only=production'
				sh 'npm run build'
            }
        }
		stage('SSH-publish') {
			steps {
				sshPublisher(
					continueOnError: false, 
					failOnError: true,
					publishers: [
						sshPublisherDesc(
						configName: "mprill-gonito-front-dev",
						transfers: [sshTransfer(
							sourceFiles: 'build/**',
							remoteDirectory: 'public_html'
							)],
						verbose: true
						)
					]
				)
			}
		}
	}
}

