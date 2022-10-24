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
		stage('Package') { 
            steps {
                sh 'tar zcf build.tar.gz build/*'
            }
        }
		stage('SSH-publish-transfer') {
			steps {
				sshPublisher(
					continueOnError: false, 
					failOnError: true,
					publishers: [
						sshPublisherDesc(
						configName: "mprill-gonito-front-dev",
						transfers: [sshTransfer(
							sourceFiles: 'build.tar.gz',
							execCommand: 'tar zxf build.tar.gz -O public_html'
							)],
						verbose: true
						)
					]
				)
			}
		}
		stage('SSH-publish-permissions') {
			steps {
				sshPublisher(
					continueOnError: false, 
					failOnError: true,
					publishers: [
						sshPublisherDesc(
						configName: "mprill-gonito-front-dev",
						transfers: [sshTransfer(execCommand: 'chmod o+rX public_html')],
						verbose: true
						)
					]
				)
			}
		}
	}
}

