# React 19 Strict Mode useEffect Bug

This repository demonstrates a common issue encountered when migrating to React 19, specifically concerning the use of `useEffect` within strict mode.  The bug involves unnecessary re-renders caused by side effects within `useEffect`, resulting in performance degradation.

## Bug Description

React 19's stricter mode enforces a more rigorous approach to side effects. In the provided example, a simple console log inside `useEffect` leads to double rendering, impacting performance, especially with more complex components.  This is often not observed in previous React versions without strict mode enabled. 

## Solution

The solution involves refactoring the `useEffect` to only execute when necessary, avoiding unintended side effects during the strict mode's double invocation. This ensures optimal performance without compromising functionality.

## How to reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the console output and component re-renders. 