// src/pages/api/auth/[...auth].ts
// This code handles the GitHub login proxy for Decap CMS
import { DecapCMSAuth } from 'astro-decap-cms-oauth';

// The default configuration is correct for GitHub using the environment variables
export const { GET, POST } = DecapCMSAuth({
  provider: 'github'
});