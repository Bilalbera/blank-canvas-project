CREATE INDEX IF NOT EXISTS idx_series_created_at ON public.series(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_episodes_created_at ON public.episodes(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_friend_requests_receiver ON public.friend_requests(receiver_id, status);
CREATE INDEX IF NOT EXISTS idx_conversation_members_user ON public.conversation_members(user_id);