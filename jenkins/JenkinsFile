pipeline {
    agent {
        kubernetes {
            defaultContainer 'nodejs-container'
            yamlFile 'nodejs-pod.yaml'
        }
    }
    stages {
        stage("Kubernetes Test") {
            steps {
                sh '''
                    node --version
                '''
            }
        }
    }
}