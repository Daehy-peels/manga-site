// src/pages/api/auth/[...auth].ts
// This code handles the GitHub login proxy for Decap CMS
import { DecapCMSAuth } from 'astro-decap-cms-oauth';


export const { GET, POST } = DecapCMSAuth({
  provider: 'github'
});