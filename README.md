
# Deployment Documentation

This documentation provides step-by-step instructions for deploying the application using Kubernetes.

## Prerequisites

Before proceeding with the deployment, ensure that you have the following prerequisites:

- Git: Install Git from https://git-scm.com.
- Docker: Install Docker from https://www.docker.com.
- Kubernetes cluster: Set up a Kubernetes cluster either locally or using a cloud provider or managed Kubernetes service.

## Deployment Steps

Follow these steps to deploy the application using Kubernetes:

1. Clone the Repository:

   - Open your terminal or command prompt.
   - Run the following command to clone the repository:
     ```
     git clone https://github.com/adityabanerjee992/sit737-2023-t2-prac7.git
     ```
   - Change into the cloned directory:
     ```
     cd sit737-2023-t2-prac7p
     ```
2. Set Up a Kubernetes Cluster:

   - Choose one of the following options to set up a Kubernetes cluster:
     - Local Cluster: Use a tool like Minikube or Docker Desktop to set up a local Kubernetes cluster.
     - Managed Kubernetes Service: Use a managed Kubernetes service like Google Kubernetes Engine (GKE), Amazon Elastic Kubernetes Service (EKS), or Azure Kubernetes Service (AKS).
3. Build the Docker Image:

   - Ensure that Docker is installed on your system.
   - Open your terminal or command prompt.
   - Change into the project directory (`sit737-2023-t2-prac7.1p`).
   - Run the following command to build the Docker image:
     ```
     docker build -t your-username/node-app .
     ```
   - Wait for the image to be built.
4. Push the Docker Image:

   - Push the Docker image to a Docker registry accessible from your Kubernetes cluster. For example, you can use Docker Hub, Google Container Registry (GCR), or Amazon Elastic Container Registry (ECR).
   - Run the following command to push the Docker image:
     ```
     docker push your-username/node-app
     ```
5. Deploy the Application on Kubernetes:

   - Open your terminal or command prompt.
   - Ensure that `kubectl` is properly configured to connect to your Kubernetes cluster.
   - Change into the project directory (`sit737-2023-t2-prac7.1p`).
   - Run the following command to create the deployment:
     ```
     kubectl apply -f my-app-deployment.yaml
     ```
   - Run the following command to create the service:
     ```
     kubectl apply -f my-app-service.yaml
     ```
6. Verify the Deployment:

   - Run the following commands to check the status of your deployment:
     ```
     kubectl get deployments
     kubectl get pods
     kubectl get services
     ```
7. Access the Application:

   - Obtain the external IP or domain name provided by your Kubernetes service:
     ```
     kubectl get services
     ```
   - Enter the external IP or domain name in a web browser, along with the appropriate port if specified.
