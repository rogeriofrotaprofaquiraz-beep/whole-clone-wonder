CREATE OR REPLACE FUNCTION public.award_team_coins(_user_ids uuid[], _amount int)
RETURNS int
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE n int;
BEGIN
  IF NOT (public.has_role(auth.uid(), 'admin') OR public.has_role(auth.uid(), 'teacher')) THEN
    RAISE EXCEPTION 'Apenas professores podem premiar equipes';
  END IF;
  IF _amount < 1 OR _amount > 200 THEN RAISE EXCEPTION 'Valor inválido'; END IF;
  IF array_length(_user_ids, 1) > 60 THEN RAISE EXCEPTION 'Equipe grande demais'; END IF;
  UPDATE public.player_wallet
     SET coins = coins + _amount, lifetime_coins = lifetime_coins + _amount
   WHERE user_id = ANY(_user_ids);
  GET DIAGNOSTICS n = ROW_COUNT;
  RETURN n;
END $$;
REVOKE ALL ON FUNCTION public.award_team_coins(uuid[], int) FROM public, anon;
GRANT EXECUTE ON FUNCTION public.award_team_coins(uuid[], int) TO authenticated;