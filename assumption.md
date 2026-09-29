# TrailMate assumptions

- The PDF’s stated design-gap decisions override conflicting screenshots: detail retains bottom navigation; tabs use compass, flag, and user icons; saved stars are yellow.
- The supplied visual designs are the primary layout and style reference. Small responsive adjustments are acceptable.
- Placeholder entries are replaced with valid mock trail records.
- Difficulty is `easy`, `moderate`, or `hard`; the UI capitalizes these labels.
- Distance is stored in miles, elevation in feet, and duration in minutes. Time is formatted as hours/minutes.
- Trails include latitude/longitude and route coordinates for later mapping, but this version displays a static map-preview image.
- Search is case-insensitive by name. Search and the selected difficulty filter combine. Long card labels truncate with an ellipsis.
- Start Navigation confirms the action in-app; it does not launch real maps, device location, or turn-by-turn navigation.
- Saved trail IDs and profile preferences persist locally. There is no backend or real account.
- Log out shows the mock signed-out screen without erasing demo saved trails or preferences. “Continue as demo user” returns to Explore.
- Notifications are a persisted in-app toggle only; no system permission request or push notification is sent.
- Preferred units switch distance/elevation between imperial and metric values.
- About is static app information.
- Dark mode, authentication, real mapping, live location, and external navigation are out of scope.
- Controls have accessible labels, strong contrast, readable text, and practical touch targets.
- State is structured for a future authenticated, account-backed saved-trails implementation.
