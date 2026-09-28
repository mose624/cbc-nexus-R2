-- Supabase migration: Create facebook_posts table
-- Run this in the Supabase SQL editor to create the table

CREATE TABLE IF NOT EXISTS facebook_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  admin_id TEXT NOT NULL,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  image_url TEXT,
  image_key TEXT,
  website_url TEXT,
  facebook_post_id TEXT UNIQUE,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'scheduled', 'published', 'failed')),
  error_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  published_at TIMESTAMP WITH TIME ZONE
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_facebook_posts_admin ON facebook_posts(admin_id);
CREATE INDEX IF NOT EXISTS idx_facebook_posts_status ON facebook_posts(status);
CREATE INDEX IF NOT EXISTS idx_facebook_posts_created ON facebook_posts(created_at DESC);