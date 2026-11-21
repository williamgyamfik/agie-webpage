# TODO

## Membership sign-up form

"Join Us Now" (`components/JoinSection.tsx`) and "Become a Member"
(`components/JoinCTA.tsx`) currently link to `/contact`. Both should go to a
real membership form.

**Recommended approach:** a native `/join` page on the site that posts to a
Next.js route handler, which validates the data and appends a row to a Google
Sheet via a Google Apps Script web app (optionally sending a welcome email).
The committee manages members from the Sheet.

**Quick interim option:** create a Google Form and link the buttons to it.
This can be swapped for the native form later without changing the page layout.

Alternatives considered: form service (Tally / Formspree / Jotform), or a full
database (e.g. Supabase) if member accounts, a directory or online payments are
needed later.

### Decisions needed

- [ ] Hosting: where is the site deployed? (Route handlers need a server/serverless host, e.g. Vercel.)
- [ ] Is there a membership fee? If so: bank transfer instructions vs. online payment (Stripe).
- [ ] Who on the committee owns the Sheet and follows up on new sign-ups?
- [ ] Should the contact and newsletter forms use the same backend?

### Implementation checklist

- [ ] Fields: name, email, phone (optional), city, status (student / working / other), how they heard about us, interests (events, volunteering, mentoring), consent checkbox.
- [ ] GDPR: consent checkbox + short privacy notice (what is collected, why, who has access, how to request deletion). Collect only what is needed; restrict Sheet access.
- [ ] Spam protection: honeypot field; add Cloudflare Turnstile if needed.
- [ ] Build `/join` page and route handler; keep the Apps Script URL in a server-side env var.
- [ ] Point "Join Us Now" and "Become a Member" at `/join`.

## Related loose ends

- [ ] All three forms (home `ContactSection.tsx`, `/contact` `ContactForm.tsx`, `NewsLetter.tsx`) use the `sendViaEmailApp()` stop-gap in `lib/mailto.ts` (opens the visitor's email app). Replace with the same backend as above; the newsletter may want a mailing-list service instead.
- [ ] Confirm the real contact details in `contactInfo` (`constants.ts`), now used everywhere: currently `info@ghanaiansinestonia.ee` / `+372 5555 1234`. The old /contact page showed `info@ghanainestonia.org` / `+372 555 12345` — one of these pairs is wrong.
- [ ] Social links (`socialLinks` in `constants.ts`) point to `#` — add real URLs.
- [ ] Have a native speaker confirm the hero greetings (`components/Home/Hero.tsx`): Ewe "Woezɔ" (plural "Mia woezɔ") and the spelling of Ga "Obaake" (sometimes written "Oobake"). Twi "Akwaaba" is fine.
- [ ] Gallery (`app/gallery/page.tsx`) has only 3 photos, and they look like stock photos rather than A.G.I.E events (e.g. `gallery3.jpg` is a street scene with French shop signs). Replace/add real event photos — and get consent from people pictured.
- [ ] Privacy policy page: needed for GDPR once forms collect data; add `/privacy-policy` and link it from the footer.
- [ ] Events "Learn more" buttons (`components/Events.tsx`) don't link anywhere.
- [ ] All events are dated 2025 — update them, or auto-hide / move past events to a "Past events" list.
