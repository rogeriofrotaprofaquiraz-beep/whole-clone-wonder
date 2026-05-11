DROP VIEW IF EXISTS public.leaderboard;
CREATE VIEW public.leaderboard WITH (security_invoker = on) AS
SELECT 
  id, 
  username, 
  avatar_url, 
  rank_points, 
  wins, 
  losses, 
  level
FROM public.profiles
ORDER BY rank_points DESC;