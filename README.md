# react-browser-safe-intent

A gesture-aware React hook utility for safely triggering browser-restricted APIs — like media playback, notifications, clipboard access, and geolocation — by modeling a trusted execution flow.

> Built to work with, not against, browser policies.

---

## 🔍 Why This Exists

Modern browsers restrict certain APIs unless the user has performed a trusted interaction (e.g. click, keypress). These include:

- `video.play()` with sound
- `navigator.clipboard.writeText()`
- `Notification.requestPermission()`
- `navigator.geolocation.getCurrentPosition()`

React provides no built-in way to manage this browser-level trust boundary.

This library introduces **gesture-gated execution primitives** — hooks that **queue actions** and execute them **only after gesture**.

---

## 🧠 Core Concepts

- **Gesture-aware execution**: Runs only after browser confirms user interaction.
- **Intent queue**: Stores API calls until it's safe to execute.
- **Hooks-first API**: Drop-in usage inside any React component.

---

## 🚀 Features

- ✅ `useGestureUnlock()`  
  Tracks whether a user gesture (click, keypress) has occurred.

- ✅ `useSafeMedia(ref, gesture, options)`  
  Plays and unmutes video/audio only after gesture is confirmed.

- ✅ `usePermissionIntent(type, gesture)`  
  Requests permission for `notifications` or `geolocation` post-gesture.

---

## 📦 Installation

```bash
npm install react-browser-safe-intent
