# Setup

Clone this repository using
```
git clone https://github.com/AlanAdamik/fullstack-case-study.git
cd fullstack-case-study
```

Open 2 terminals and run :
```
cd backend-nestjs && npm i && npm run start:dev
```

```
cd frontend-react && npm i && npm start
```

- `http://localhost:3333` to access the API
- `http://localhost:3000` to access the frontend 


# Exercise 1 : Handle pagination in the frontend
    - two buttons prev/next cycle through the appointments
    - prev button should be disabled on first page
    - next button should be disabled on last page
    - pages are 10 items long
    
# Exercise 2 :  Handle pagination in backend
    - migrate the pagination to the backend
    - buttons behavior should stay the same
