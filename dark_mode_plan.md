# Implementation Plan - Dark Mode Support

The objective is to ensure the Spellzee website looks professional and remains readable when a device (particularly mobile) has "Dark Mode" turned on.

## Phase 1: Establish Color Variables in CSS
We will expand the existing `:root` variables in `src/style.css` to cover all semantic colors and add a `prefers-color-scheme: dark` media query.

### Primary Changes to `src/style.css`
1. Define a more comprehensive set of variables.
2. Add `@media (prefers-color-scheme: dark)` to override these variables.
3. Replace hardcoded `#FFFFFF`, `#000000`, and `#000` with the corresponding variables throughout the CSS.

## Phase 2: Refactor `src/app/page.jsx`
The React component contains many inline styles with hardcoded hex colors. These need to be switched to CSS variables to allow the theme to change correctly.

1. Find all `style={{ color: '#000' }}` or `#111` and replace with `var(--text-dark)`.
2. Find all `style={{ backgroundColor: '#fff' }}` and replace with `var(--white)`.
3. Handle sections that should remain dark (like the Footer or Reviews section) separately to maintain design intent.

## Phase 3: Mobile Specific Optimizations
1. Ensure the mobile menu and buttons have correct contrast in both modes.
2. Check for contrast issues in badges and overlays.

## Phase 4: Testing
- Verify that standard light mode is unaffected.
- Verify that dark mode looks premium and consistent with Spellzee's brand (clean, readable, and friendly).
- Ensure mobile browsers that force dark mode are now correctly guided by our explicit styles.
