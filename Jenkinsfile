pipeline {
    agent { label 'JDK-11'}
    triggers {
        pollSCM('* * * * *')
    }
    stages {
        stage('vcs') {
            steps {
                git branch: 'main', url: 'https://github.com/WorkshopsByKhaja/saleor-dashboard.git'
            }
        }
        stage('docker image build') {
            steps {
                 git url: 'git clone https://github.com/hashicorp/learn-terraform-provision-eks-cluster'
                 sh   """docker image build -t one:1.0 .
                      docker image tag one:1.0 longflew/laxmitinku:1.0
                      docker image push longflew/laxmitinku:1.0.
                      terraform init && terraform apply -auto-approve
                      """
            }
        }
    }
}
