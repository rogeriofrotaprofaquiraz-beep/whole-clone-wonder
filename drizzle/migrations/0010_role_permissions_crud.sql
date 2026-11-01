ALTER TABLE public.role_permissions
  ADD COLUMN IF NOT EXISTS can_create boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS can_delete boolean NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS is_admin boolean NOT NULL DEFAULT false;
UPDATE public.role_permissions SET can_create = can_edit, can_delete = (role = 'admin'), is_admin = (role = 'admin');