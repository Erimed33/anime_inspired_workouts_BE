-- Seed data for Anime Series
INSERT INTO anime_series (title, description) VALUES
('One Punch Man', 'A hero who can defeat any opponent with a single punch struggles to find a worthy opponent'),
('Solo Leveling', 'A weak hunter becomes the world’s strongest after discovering a mysterious power'),
('Dragon Ball Z', 'A Saiyan warrior battles powerful enemies to protect Earth');

-- Seed data for Workout Routines
INSERT INTO workout_routines (anime_id, title, description, difficulty, duration, exercises, source_url) VALUES
(1, 'Saitama’s 100 Push-Ups Workout', 'A workout inspired by Saitama’s daily routine of 100 push-ups, 100 sit-ups, and 10 km running', 'Hard', 60, '100 push-ups, 100 sit-ups, 100 mins running', 'https://superherojacked.com/2018/06/07/one-punch-man-workout/'),
(2, 'Solo Leveling Strength Training', 'Strength training routine inspired by Sung Jin-Woo’s intense training sessions', 'Medium', 45, '10 kilometer run, 100 squats, 100 pull-ups', 'https://superherojacked.com/2022/03/02/sung-jinwoo-workout/'),
(3, 'Hyperbolic Time Chamber Training', 'Heavy weights training inspired by Dragon Ball Z', 'Very Hard', 90, 'weightlifting, sprinting, high-intensity intervals', 'https://en.dragon-ball-official.com/news/01_676.html');
