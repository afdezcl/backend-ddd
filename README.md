# Setup application
- Run `docker-compose up -d` to launch Postgres database
- Run `npm i`
- Run `npm run dev`

# Endpoints
- GET `/status`. Health check
- GET `/courses`. To get the courses list
- GET `/courses/:id`. To get the course by id
- POST `/courses`. To save a course. Body: 
```
{
  "id": 'an uuid v4',
  "name": "name of the course",
  "duration": "duration in millis - string"
}
```

# Connect to database
You can use an UI application as Postico. Credentials:
- Username: askit
- Password: askit
- Port: 4005