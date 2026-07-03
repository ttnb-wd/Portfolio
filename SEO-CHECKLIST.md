# 🚀 SEO Pre-Launch Checklist

Complete these tasks before deploying your portfolio to production.

---

## ⚠️ CRITICAL (Must Complete)

### 1. Update Domain URL
- [ ] `app/layout.tsx` - Line 21: `const siteUrl = "https://your-domain.vercel.app"`
- [ ] `app/sitemap.ts` - Line 4: `const baseUrl = "https://your-domain.vercel.app"`
- [ ] `app/robots.ts` - Line 4: `const baseUrl = "https://your-domain.vercel.app"`

**Replace with**: Your actual domain (e.g., `https://shinhtetmaung.com`)

### 2. Create Open Graph Image
- [ ] Create image: `1200x630px` PNG or JPG
- [ ] Save as: `/public/og-image.png`
- [ ] Include: Your name, title, and key technologies
- [ ] Use brand colors: Blue (#2563EB) on white background
- [ ] Keep file size under 1MB

**Tools**: Canva, Figma, or [OG Image Playground](https://og-playground.vercel.app/)

### 3. Add Google Verification
- [ ] Go to [Google Search Console](https://search.google.com/search-console)
- [ ] Add your website
- [ ] Get verification meta tag code
- [ ] Update in `app/layout.tsx` - Line 130: `google: "your-google-verification-code"`

---

## 📝 RECOMMENDED (Should Complete)

### 4. Verify Social Media Links
- [ ] GitHub URL is correct in `app/layout.tsx` - Line 178
- [ ] LinkedIn URL is correct in `app/layout.tsx` - Line 179
- [ ] Twitter handle is correct in `app/layout.tsx` - Line 108 and 109

### 5. Optional Search Engine Verifications
- [ ] Bing Webmaster Tools verification (optional)
- [ ] Yandex Webmaster verification (optional)

---

## 🧪 POST-DEPLOYMENT TESTS

After deploying, test these:

### Social Media Previews
- [ ] [Facebook Debugger](https://developers.facebook.com/tools/debug/) - Paste your URL
- [ ] [Twitter Card Validator](https://cards-dev.twitter.com/validator) - Paste your URL
- [ ] [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) - Paste your URL

### Structured Data
- [ ] [Google Rich Results](https://search.google.com/test/rich-results) - Test your homepage
- [ ] [Schema Validator](https://validator.schema.org/) - Validate JSON-LD

### Technical SEO
- [ ] Visit: `yourdomain.com/robots.txt` - Should be accessible
- [ ] Visit: `yourdomain.com/sitemap.xml` - Should show all pages
- [ ] [Google Lighthouse](https://pagespeed.web.dev/) - Run SEO audit (Target: 95+)

### Search Console Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Request indexing for homepage
- [ ] Enable URL inspection
- [ ] Set up email alerts for crawl errors

---

## ✅ WHAT'S ALREADY DONE

You don't need to do anything for these:

- ✅ Meta tags and descriptions
- ✅ Comprehensive keywords (60+)
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ JSON-LD structured data (3 schemas)
- ✅ Semantic HTML structure
- ✅ Perfect heading hierarchy (H1 → H2)
- ✅ Robots.txt configuration
- ✅ Sitemap generation
- ✅ Canonical URLs
- ✅ Mobile responsive
- ✅ Fast performance
- ✅ Accessibility compliant

---

## 🎯 QUICK START

**Minimum to launch**:
1. Replace `https://your-domain.vercel.app` with your real domain (3 files)
2. Create `/public/og-image.png` (1200x630px)
3. Add Google verification code
4. Deploy!

**Time required**: ~15 minutes

---

## 📞 NEED HELP?

If you get stuck:
1. Read the full `SEO.md` file for detailed instructions
2. Check Next.js docs: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
3. Schema.org docs: https://schema.org/

---

**Current Status**: ⚠️ Needs 3 updates → Then ✅ Production Ready!
