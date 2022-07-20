pipeline {
  agent any
  tools {
    nodejs 'NodeJS 18.6.0'
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