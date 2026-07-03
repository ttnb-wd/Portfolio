# 🔍 SEO Validation Guide

Use this guide to validate your SEO implementation after deployment.

---

## 🧪 Pre-Deployment Validation

### 1. Check Build Success
```bash
npm run build
```
✅ Should complete without errors  
✅ Should show routes: `/`, `/robots.txt`, `/sitemap.xml`

### 2. Verify Domain URLs Updated
Search for placeholder URL:
```bash
# Windows (PowerShell)
Select-String -Path "app\layout.tsx","app\sitemap.ts","app\robots.ts" -Pattern "your-domain.vercel.app"

# Should return NO results if updated correctly
```

### 3. Verify OG Image Exists
```bash
# Windows
dir public\og-image.png
```
✅ File should exist and be 1200x630px

---

## 🌐 Post-Deployment Validation

After deploying, test these URLs:

### 1. Robots.txt
Visit: `https://yourdomain.com/robots.txt`

**Should see**:
```
User-Agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /*.json$
Disallow: /private/

User-Agent: Googlebot
Allow: /
Crawl-delay: 0

Sitemap: https://yourdomain.com/sitemap.xml
```

### 2. Sitemap
Visit: `https://yourdomain.com/sitemap.xml`

**Should see**:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com</loc>
    <lastmod>2024-XX-XX</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- More URLs for #about, #skills, etc. -->
</urlset>
```

### 3. View Page Source
Visit: `https://yourdomain.com` and view source (Ctrl+U)

**Verify these exist**:

✅ **Meta Description**:
```html
<meta name="description" content="Experienced Frontend Developer from Myanmar...">
```

✅ **Open Graph Tags**:
```html
<meta property="og:title" content="Shin Htet Maung - Frontend Developer Portfolio">
<meta property="og:description" content="Experienced Frontend Developer...">
<meta property="og:image" content="https://yourdomain.com/og-image.png">
```

✅ **Twitter Card**:
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:creator" content="@shinhtetmaung">
```

✅ **JSON-LD Schemas** (3 scripts):
```html
<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Person"...}
</script>
```

---

## 🔗 External Validation Tools

### 1. Google Tools

#### Rich Results Test
1. Go to: https://search.google.com/test/rich-results
2. Enter your URL
3. Click "Test URL"

**Expected Results**:
- ✅ Valid Person schema
- ✅ Valid WebSite schema
- ✅ Valid ProfessionalService schema
- ❌ No errors

#### Mobile-Friendly Test
1. Go to: https://search.google.com/test/mobile-friendly
2. Enter your URL
3. Click "Test URL"

**Expected**: ✅ Page is mobile-friendly

#### PageSpeed Insights
1. Go to: https://pagespeed.web.dev/
2. Enter your URL
3. Check both Mobile and Desktop

**Expected Scores**:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- **SEO: 95-100** ⭐

### 2. Schema Validator
1. Go to: https://validator.schema.org/
2. Paste your homepage URL
3. Click "Run Test"

**Expected**: ✅ All 3 schemas valid with no errors

### 3. Social Media Validators

#### Facebook Sharing Debugger
1. Go to: https://developers.facebook.com/tools/debug/
2. Enter your URL
3. Click "Debug"

**Check**:
- ✅ Image appears (1200x630px)
- ✅ Title is correct
- ✅ Description is correct
- ✅ No warnings

#### Twitter Card Validator
1. Go to: https://cards-dev.twitter.com/validator
2. Enter your URL
3. View preview

**Check**:
- ✅ Large image card shows
- ✅ Image loads correctly
- ✅ Title and description correct

#### LinkedIn Post Inspector
1. Go to: https://www.linkedin.com/post-inspector/
2. Enter your URL
3. Click "Inspect"

**Check**:
- ✅ Preview looks professional
- ✅ Image and text correct

---

## 🔍 Manual SEO Checks

### Heading Hierarchy
View page source and verify:
- ✅ Only ONE `<h1>` tag (in Hero)
- ✅ Multiple `<h2>` tags (section titles)
- ✅ No skipped heading levels

### Semantic HTML
Check that these elements exist:
- ✅ `<section>` for each major section
- ✅ `<main>` wrapping primary content
- ✅ `<nav>` for navigation
- ✅ `<footer>` for footer
- ✅ `<article>` where appropriate

### Image Alt Text
- ✅ OG image has descriptive alt text
- ✅ Any other images have alt attributes

### Canonical URL
```html
<link rel="canonical" href="https://yourdomain.com">
```
✅ Should match your actual domain

---

## 📊 Google Search Console Setup

After deployment, set up monitoring:

### 1. Add Property
1. Go to: https://search.google.com/search-console
2. Click "Add Property"
3. Enter your domain
4. Choose HTML tag verification
5. Use the verification code you added to `layout.tsx`

### 2. Submit Sitemap
1. In Search Console, go to "Sitemaps"
2. Enter: `sitemap.xml`
3. Click "Submit"
4. Wait for Google to process (24-48 hours)

### 3. Request Indexing
1. Go to "URL Inspection"
2. Enter your homepage URL
3. Click "Request Indexing"
4. Repeat for key pages

### 4. Monitor Performance
Check these regularly:
- **Coverage**: Ensure all pages are indexed
- **Performance**: Track clicks and impressions
- **Core Web Vitals**: Monitor performance metrics
- **Mobile Usability**: Check for mobile issues

---

## ✅ SEO Checklist

Print this and check off as you complete:

### Pre-Deployment
- [ ] Domain URL updated in 3 files
- [ ] OG image created (1200x630px)
- [ ] Google verification code added
- [ ] Build completes successfully
- [ ] No TypeScript errors

### Post-Deployment
- [ ] `/robots.txt` accessible
- [ ] `/sitemap.xml` accessible
- [ ] View source shows meta tags
- [ ] View source shows JSON-LD schemas
- [ ] Rich Results Test passes
- [ ] Mobile-Friendly Test passes
- [ ] PageSpeed SEO score 95+
- [ ] Schema Validator passes
- [ ] Facebook preview works
- [ ] Twitter card shows correctly
- [ ] LinkedIn preview works

### Google Search Console
- [ ] Property added and verified
- [ ] Sitemap submitted
- [ ] Homepage indexing requested
- [ ] Coverage report shows no errors
- [ ] Mobile usability shows no issues

### Monitoring (Ongoing)
- [ ] Check Search Console weekly
- [ ] Monitor organic traffic
- [ ] Track keyword rankings
- [ ] Review Core Web Vitals
- [ ] Update content quarterly

---

## 🚨 Common Issues & Fixes

### Issue: Sitemap 404
**Fix**: Ensure `app/sitemap.ts` exists and build completed successfully

### Issue: OG Image Not Showing
**Fixes**:
1. Verify file exists at `/public/og-image.png`
2. Check file is exactly 1200x630px
3. Clear Facebook cache in Sharing Debugger
4. Wait 24 hours for CDN propagation

### Issue: Schema Errors
**Fixes**:
1. Validate JSON syntax at validator.schema.org
2. Ensure all URLs use your actual domain
3. Check commas and brackets in JSON-LD

### Issue: Low SEO Score
**Check**:
1. All meta tags present
2. Heading hierarchy correct
3. Images have alt text
4. Page loads fast (<3s)
5. Mobile responsive

### Issue: Not Appearing in Search
**Timeline**: Allow 2-4 weeks for initial indexing
**Actions**:
1. Submit sitemap in Search Console
2. Request indexing for homepage
3. Share on social media for backlinks
4. Check robots.txt isn't blocking

---

## 📈 Success Metrics

After 30 days, you should see:

- ✅ All pages indexed in Google
- ✅ Appearing in search for your name
- ✅ Appearing for "Frontend Developer Myanmar"
- ✅ Rich previews working on social media
- ✅ Organic traffic starting to grow
- ✅ Search Console shows no errors

---

## 🎯 Pro Tips

1. **Be Patient**: SEO takes 2-4 weeks to show results
2. **Share Strategically**: Post on LinkedIn, Twitter to build backlinks
3. **Update Regularly**: Fresh content helps rankings
4. **Monitor Keywords**: Track what brings visitors
5. **Optimize Continuously**: Use Search Console insights

---

**Need Help?** Reference the full `SEO.md` documentation for detailed troubleshooting.

Good luck! 🚀
