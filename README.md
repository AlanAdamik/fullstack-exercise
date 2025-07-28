# Setup

Clone this repository using
```
git clone https://github.com/AlanAdamik/fullstack-exercise.git
cd fullstack-exercise
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

# Context

The app is responsible for displaying all the appointments that are booked in a showroom in a table.

The current state is that there are 1000 appointments, and no pagination was done before because it was assumed that there would be at most 20 to 30 appointments at most (so 1 page)

The product team decided to add a pagination, the tech team (you) is responsible for the implementation.

Since the number of appointments is supposedly very limited, the decision was made to paginate from the frontend.

# Exercise 1 : Frontend pagination

> During this part of the exercise, you will only modify frontend files

The acceptance criterias are :

    - two buttons prev/next cycle through the appointments
    - between the two buttons, we can see the current page
    - prev button should be disabled on first page
    - next button should be disabled on last page
    - pages are 100 items long
    
# Exercise 2 :  Backend pagination

> During this part of the exercise, you can modify any file you want

After testing, the product team determined that the performance of the pagination wasn't good enough.
So the tech team decided to switch the pagination to the backend side.

The acceptance criterias are essentially the same, only the pagination should be done in the backend now.

    - The backend endpoint is responsible for the pagination
