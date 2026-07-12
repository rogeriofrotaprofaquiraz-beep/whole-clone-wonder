CREATE POLICY "admin_upload_course_materials"
ON storage.objects FOR INSERT TO authenticated
WITH CHECK (bucket_id = 'course-materials' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "admin_update_course_materials"
ON storage.objects FOR UPDATE TO authenticated
USING (bucket_id = 'course-materials' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "admin_delete_course_materials"
ON storage.objects FOR DELETE TO authenticated
USING (bucket_id = 'course-materials' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "auth_read_course_materials"
ON storage.objects FOR SELECT TO authenticated
USING (bucket_id = 'course-materials');