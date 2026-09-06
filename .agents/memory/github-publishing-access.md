---
name: GitHub publishing access
description: GitHub authorization limitation affecting automated repository pushes from this project.
---

GitHub repository reads work, but connector write requests are blocked by the Replit proxy security layer, and command-line Git authentication is separate from the connector authorization.

**Why:** Both GitHub's Git Data/Contents write APIs and the Git credential-helper push route failed despite successful repository reads and valid repository permissions.

**How to apply:** For future GitHub publishing, use the user's authenticated Replit Version Control interface to push, rather than repeating connector API writes or unauthenticated command-line pushes.