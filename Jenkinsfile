pipeline {
  agent any
  tools {
    nodejs 'Node-18.6'
  }

  options {
    timeout(time: 2, unit: 'MINUTES')
  }

  stages {
    stage('Install dependencies') {
      steps {
        sh 'cd 01-jest && npm i'
      }
    }
    stage('Run tests') {
      steps {
        sh 'cd 01-jest && npm test'
      }
    }
  }
}