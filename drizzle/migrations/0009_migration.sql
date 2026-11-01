ALTER TABLE public.access_rules ADD COLUMN IF NOT EXISTS user_id uuid;
DROP INDEX IF EXISTS public.access_rules_uniq;
CREATE UNIQUE INDEX access_rules_uniq ON public.access_rules (COALESCE(class_id,'00000000-0000-0000-0000-000000000000'::uuid), role, feature_key, COALESCE(profile_id,'00000000-0000-0000-0000-000000000000'::uuid), COALESCE(user_id,'00000000-0000-0000-0000-000000000000'::uuid));
CREATE INDEX IF NOT EXISTS access_rules_user_idx ON public.access_rules(user_id);