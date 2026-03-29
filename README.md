# Wiser Generations — wisergenerations.com
### Enterprise Academy™ · Life Is a Project™

Built with Next.js 14, Tailwind CSS, Supabase, Stripe, and Resend.

---

## What This Is

A complete marketing + ecommerce website for the Life Is a Project™ program. It includes:
- 8 public pages (homepage, about, program, pricing, CAPM, blog, community, contact)
- Stripe checkout for 4 pricing tiers
- Contact and enrollment forms saved to Supabase
- Automated emails via Resend
- Password-protected admin dashboard
- 3 SEO-ready blog posts
- Auto-generated sitemap.xml and robots.txt

---

## How to Deploy (No Code Required)

### Before You Start — Accounts You Need

| Service | URL | Purpose |
|---------|-----|---------|
| GitHub | github.com | Stores your code |
| Vercel | vercel.com | Hosts your website |
| Supabase | supabase.com | Stores form submissions |
| Stripe | stripe.com | Processes payments |
| Resend | resend.com | Sends emails |

---

### Step 1 — Put This Code on GitHub

1. Go to **github.com** → click the green **New** button
2. Repository name: `wisergenerations-website`
3. Set to **Public** → click **Create repository**
4. On your computer, open Terminal (Mac) or Command Prompt (Windows)
5. Navigate to this folder: `cd path/to/wisergenerations`
6. Run these commands one at a time:
   ```
   git init
   git add .
   git commit -m "Initial deployment"
   git remote add origin https://github.com/YOUR_GITHUB_USERNAME/wisergenerations-website.git
   git push -u origin main
   ```

---

### Step 2 — Set Up Your Database (Supabase)

1. Go to **supabase.com** → log in → click **New Project**
2. Name: `wisergenerations` · Region: US East · click **Create**
3. Once created, click **SQL Editor** in the left sidebar
4. Paste and run this SQL:

```sql
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE program_interest (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  age TEXT,
  registrant_type TEXT,
  delivery_preference TEXT,
  diploma_status TEXT,
  sponsor_name TEXT,
  sponsor_email TEXT,
  how_heard TEXT,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE enrollments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  stripe_session_id TEXT UNIQUE NOT NULL,
  stripe_payment_intent TEXT,
  customer_email TEXT NOT NULL,
  customer_name TEXT,
  product_name TEXT NOT NULL,
  amount_paid INTEGER NOT NULL,
  currency TEXT DEFAULT 'usd',
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

5. Go to **Project Settings → API** and copy:
   - **Project URL** → this is your `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** key → this is your `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role** key → this is your `SUPABASE_SERVICE_ROLE_KEY`

---

### Step 3 — Set Up Payments (Stripe)

1. Go to **stripe.com** → log in or activate your account
2. Click **Products** → **Add product** — create these 4 products:

| Product Name | Price | Type |
|---|---|---|
| Life Is a Project™ — Digital Access | $497 | One-time |
| Life Is a Project™ — Digital + Community | $697 | One-time |
| Life Is a Project™ — In-Person Cohort | $997 | One-time |
| Life Is a Project™ — Complete Program | $1,497 | One-time |

3. For each product, click it and copy the **Price ID** (starts with `price_`)
4. Go to **Developers → API Keys** and copy:
   - **Publishable key** (starts with `pk_`) → `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - **Secret key** (starts with `sk_`) → `STRIPE_SECRET_KEY`
5. Create a coupon: **Coupons → Create coupon** → Code: `LAUNCH25` → 25% off → Once

---

### Step 4 — Set Up Email (Resend)

1. Go to **resend.com** → sign up (free: 3,000 emails/month)
2. Click **Domains → Add Domain** → enter: `wisergenerations.com`
3. Resend shows you DNS records — add them to Bluehost:
   - In Bluehost: Domains → Manage → DNS → add each TXT record Resend gives you
4. Once verified (15–60 min), go to **API Keys → Create API Key**
5. Copy the key (starts with `re_`) → this is your `RESEND_API_KEY`

---

### Step 5 — Deploy to Vercel

1. Go to **vercel.com** → click **Add New → Project**
2. Click **Import** next to `wisergenerations-website`
3. Before clicking Deploy, click **Environment Variables** and add all of these:

| Variable Name | Where to Get It |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase Project Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase Project Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase Project Settings → API |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe Developers → API Keys |
| `STRIPE_SECRET_KEY` | Stripe Developers → API Keys |
| `STRIPE_WEBHOOK_SECRET` | Add this after deployment (Step 6) |
| `NEXT_PUBLIC_STRIPE_PRICE_DIGITAL` | Stripe Products → Digital Access → Price ID |
| `NEXT_PUBLIC_STRIPE_PRICE_COMMUNITY` | Stripe Products → Digital + Community → Price ID |
| `NEXT_PUBLIC_STRIPE_PRICE_INPERSON` | Stripe Products → In-Person Cohort → Price ID |
| `NEXT_PUBLIC_STRIPE_PRICE_COMPLETE` | Stripe Products → Complete Program → Price ID |
| `RESEND_API_KEY` | Resend API Keys |
| `RESEND_FROM_EMAIL` | crystal@wisergenerations.com |
| `NEXT_PUBLIC_BASE_URL` | https://wisergenerations.com |
| `ADMIN_PASSWORD` | Choose a strong password (you'll use this to log into /admin) |

4. Click **Deploy** — takes about 2 minutes

---

### Step 6 — Connect Your Domain

1. In Vercel: click your project → **Settings → Domains**
2. Type `wisergenerations.com` → click **Add**
3. Also add `www.wisergenerations.com`
4. Vercel shows you 2 DNS records. Go to Bluehost:
   - Domains → Manage wisergenerations.com → DNS
   - Add **A Record**: `@` → `76.76.21.21`
   - Add **CNAME**: `www` → `cname.vercel-dns.com`
5. Wait 15–60 minutes for DNS to update

---

### Step 7 — Add Stripe Webhook

1. Go to **stripe.com → Developers → Webhooks → Add endpoint**
2. Endpoint URL: `https://wisergenerations.com/api/webhook`
3. Select event: `checkout.session.completed`
4. Click **Add endpoint**
5. Click **Reveal** next to Signing secret → copy the value (starts with `whsec_`)
6. Go to Vercel → your project → Settings → Environment Variables
7. Add: `STRIPE_WEBHOOK_SECRET` = the value you copied
8. Click **Deployments → Redeploy** to apply the new variable

---

## Your Site Is Live ✓

| URL | What It Is |
|-----|------------|
| wisergenerations.com | Homepage + all marketing pages |
| wisergenerations.com/pricing | 4 Stripe checkout tiers |
| wisergenerations.com/blog | 3 SEO launch articles |
| wisergenerations.com/capm | PMI/CAPM pathway page |
| wisergenerations.com/contact | Contact form |
| wisergenerations.com/enroll | Program interest form |
| wisergenerations.com/admin | Admin dashboard (your ADMIN_PASSWORD) |
| learn.wisergenerations.com | Thinkific course portal (set up separately) |

---

## How to Do Common Tasks (No Code)

### Add a Blog Post
1. Create a new file in `content/blog/` — name it `your-post-title.md`
2. Start with this header:
   ```
   ---
   title: "Your Post Title Here"
   date: "2025-04-01"
   category: "Program Overview"
   summary: "One sentence summary that appears in search results."
   readTime: "5 min read"
   ---
   ```
3. Write your article below the `---` line using normal text
4. Push to GitHub — Vercel auto-deploys in 2 minutes

### View Form Submissions
1. Go to `wisergenerations.com/admin`
2. Enter your `ADMIN_PASSWORD`
3. Switch between tabs: Contact Forms, Program Interest, Enrollments
4. Click **Export CSV** to download any table

### Update Pricing
1. Create a new product in Stripe with the new price
2. Copy the new Price ID
3. Go to Vercel → your project → Settings → Environment Variables
4. Update the relevant `NEXT_PUBLIC_STRIPE_PRICE_*` variable
5. Redeploy

### Redeploy After Any Change
Just push to GitHub: `git add . && git commit -m "update" && git push`
Vercel detects the push and redeploys automatically in ~2 minutes.

### Add a Page
Create a new file in the `app/` folder. Example: `app/faq/page.tsx`
Copy any existing simple page as a starting template.

---

## Technical Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Database | Supabase (PostgreSQL) |
| Payments | Stripe Checkout |
| Email | Resend |
| Hosting | Vercel |
| Version Control | GitHub |

---

## Need Help?

| Issue | Support |
|-------|---------|
| Vercel deployment | vercel.com/docs |
| Stripe payments | support.stripe.com |
| Supabase database | supabase.com/docs |
| Resend email | resend.com/docs |
| Bluehost DNS | 1-888-401-4678 (24/7) |
| Thinkific (course platform) | support.thinkific.com |

---

*Enterprise Academy™ · Wiser Generations™ · Life Is a Project™*
*Crystal Stewart, The Project Management Evangelist™*
*© 2025 Enterprise Academy™. All rights reserved.*
