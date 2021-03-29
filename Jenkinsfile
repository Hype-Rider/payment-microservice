pipeline {
    agent any
    triggers {
        githubPush()
    }

    stages {
        stage('build') {
            steps {
                script{
                    docker.withRegistry('https://656157171339.dkr.ecr.us-west-1.amazonaws.com', 'ecr:us-west-1:ecr-credentials') {
                        def image = docker.build('payment-service')
                        image.push()
                    }
                }
            }
        }
        stage('release') {
            steps {
                script {
                    sh ''
                    build_json = sh(label: 'Retrieve Build Info', script: "aws ecs register-task-definition --region us-west-1 --cli-input-json file://task-definitions.json", returnStdout: true)
                    echo build_json
                    build_map = readJSON text: build_json
                    // echo build_map
                    sh "aws ecs update-service --region us-west-1 --cluster hype-rider-dev --service payment-service --task-definition ${build_map.taskDefinition.family}:${build_map.taskDefinition.revision}"
                }
            }
        }
    }
}