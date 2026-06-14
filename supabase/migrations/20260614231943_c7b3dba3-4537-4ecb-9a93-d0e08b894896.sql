
CREATE POLICY "player avatars self read" ON storage.objects FOR SELECT TO authenticated
  USING (bucket_id = 'player-avatars' AND auth.uid()::text = (storage.foldername(name))[1]);
CREATE POLICY "player avatars self write" ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'player-avatars' AND auth.uid()::text = (storage.foldername(name))[1]);
CREATE POLICY "player avatars self update" ON storage.objects FOR UPDATE TO authenticated
  USING (bucket_id = 'player-avatars' AND auth.uid()::text = (storage.foldername(name))[1]);
CREATE POLICY "player avatars self delete" ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'player-avatars' AND auth.uid()::text = (storage.foldername(name))[1]);
