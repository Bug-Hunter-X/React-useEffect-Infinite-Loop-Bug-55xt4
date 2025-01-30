# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving an infinite loop in the `useEffect` hook.  The issue stems from directly modifying state within the `useEffect` callback without proper cleanup or dependency management, leading to continuous re-renders.

## Bug Description

The provided `MyComponent` attempts to increment the `count` state variable within the `useEffect` hook using the empty dependency array `[]`.  This causes the `useEffect` to run only once after the component mounts but it then immediately changes the state, triggering another render, and causing an infinite loop.

## Solution

The solution involves correctly managing state updates within the `useEffect` hook. This is best done by leveraging the functional update approach or adding dependencies to the effect to limit when the effect runs.