# Homepage direction: Tree Field

This is a dark-only portfolio. The locked ink canvas and natural palette are part of the identity, not a missing theme state.

## Visual thesis

The site is a black-stage composition with one continuous signature image: an abstract paper tree. Content does not sit in panels or cards. It passes through the tree field as large, quiet typography.

## System decisions

- **Display type:** DM Sans at a light weight. Hierarchy comes from scale and tight tracking, not boldness.
- **Utility type:** DM Mono for small labels, navigation, states, and metadata.
- **Active color:** Lichen `#A7B58A`. It is the only interactive accent.
- **Base colors:** Ink `#10120F`, parchment `#F4F0E7`, moss `#30372D`, and fog `#B7B5AA`.
- **Surface rule:** No filled cards, ornamental dividers, or section panels. Whitespace and type create grouping.
- **Composition:** Large left-aligned editorial statements and deliberately offset project or credit entries.
- **Density:** Low. Each view concentrates on one message or one content grouping.

## Interaction decisions

- The paper tree is a page-wide field, not a hero-only illustration.
- The tree drifts only through scroll position and fine-pointer movement. It never loops for attention.
- The header stays minimal: wordmark, three primary links, and an optional motion pause control.
- Hero links use bare text and lead to the four portfolio areas.
- Entries materialize on arrival using opacity, a small upward translation, and a light blur. Motion is removed under reduced-motion preferences.
- All motion uses transform, opacity, or filter. Scroll position is observed through CSS scroll timelines and IntersectionObserver rather than a scroll event listener.

## Content model

| Area | Production content needed |
| --- | --- |
| Design | Case-study title, discipline, short summary, outcome, prototype URL or embed, imagery if available |
| Music | Release title, role, year, label, Spotify URL, Apple Music URL |
| About | Short professional biography, résumé or LinkedIn URL, optional portrait |
| Contact | Preferred email and any social or professional profile links |
