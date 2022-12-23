
pipeline {
    agent { label 'JDK-11'}
    triggers {
        pollSCM('* * * * *')
    }
    stages {
        stage('vcs') {
            agent { label 'build' }
            steps {
                git branch: 'dev', url: 'https://github.com/WorkshopsByKhaja/saleor-dashboard.git'
            }
        }
        stage('docker image build') {
            agent { label 'build' }
            steps {
                sh 'docker image build -t one:1.0 .'
            }
        }
        stage('push image to registry') {
            agent { label 'build' }
            steps {
                sh 'docker image push longflew/laxmitinku:1.0.'
            }
        }
        stage('create terraform infrastructre') {
            agent { label 'terraform' }
            steps {
                git url: 'git clone https://github.com/hashicorp/learn-terraform-provision-eks-cluster'
                sh 'terraform init && terraform apply -auto-approve'
            }
        }
    }
}
