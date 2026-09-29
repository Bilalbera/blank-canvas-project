-- Founders can manage user roles from the founder panel.
GRANT INSERT, DELETE ON public.user_roles TO authenticated;

CREATE POLICY "roles founder insert"
ON public.user_roles FOR INSERT TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'founder'));

CREATE POLICY "roles founder delete"
ON public.user_roles FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'founder') AND role <> 'user');
