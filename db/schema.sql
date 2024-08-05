CREATE TABLE anime_series (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,       -- Title is required
  description TEXT,                  -- Description can be NULL
          
);

CREATE TABLE workout_routines (
  id SERIAL PRIMARY KEY,
  anime_id INTEGER REFERENCES anime_series(id),
  title VARCHAR(100) NOT NULL,      
  description TEXT,                 
  difficulty VARCHAR(50),            
  duration INTEGER NOT NULL,         
  exercises TEXT NOT NULL,          
  source_url VARCHAR(100)            
);
