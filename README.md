# ab-media-assignment

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/SonuMunda/ab-media-assignment.git
```

### 2. Folder Structure

The repository is structured as follows:

- `client`: contains the client-side code
- `server`: contains the server-side code

### 3. Create Env Files to client and server folder

Create a new file named `.env` in both `client` and `server` folders. Add
the following lines to the `.env` file in the `server` folder:

## Client Side Env File

VITE_SERVER_URL = http://localhost:3000

## Server Side Env File

MONGO_URI = your _mongo_uri
PORT = 3000

### 4. Install Dependencies
Install the required dependencies for both client and server sides:

## Move to client folder

```bash
cd client
```

## Install client dependencies
```bash
npm install
```
same with server folder

### Starting the Application
To start the application, navigate to the `client` folder and run the following command:

```bash
npm run dev
```

To start the server side application run the following command in server folder
```bash 
npm start
```

*** Important : Make sure uncomment the feed data function in the server side to add the data to the database***

