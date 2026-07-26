---
slug: perfectstar-2k
title: 'PerfectStar 2K: what a non-AI product proves about an AI software factory'
summary: A keyboard-first writing environment shows why AI-native production should be judged by the software, not by whether the product contains a model.
publishedAt: '2026-07-25'
type: Build
related:
  - perfectstar-2k
artifacts:
  - label: PerfectStar 2K source
    href: https://github.com/stevenjmiklovic/PerfectStar-2k
  - label: PerfectStar 2K package
    href: https://docs.rs/crate/perfectstar2k/latest
---

PerfectStar 2K is a terminal writing environment inspired by WordStar for DOS and WordPerfect 5.1.
It is built for people who write long documents and want their hands to remain on the keyboard.

The product includes home-row commands, persistent editing sessions, two-window editing, Reveal
Codes, spellcheck, a durable undo history, and manuscript-ready RTF export. It is written in Rust
and runs as a terminal application.

It is also useful evidence for the sXs factory precisely because AI is not the product proposition.

## What shipped

The current working build treats writing as a sustained activity rather than a sequence of isolated
text operations.

A writer can mark a block and act on it later, move between remembered positions, keep notes that do
not appear in export, work across two documents, reopen a file with its editing context intact, and
produce a standard-manuscript-format RTF without an external converter.

Those details matter more than the retro-computing reference. The product is not trying to imitate
an old interface cosmetically. It is recovering a specific model of focused, keyboard-driven work
and extending it with durable state and modern output.

## Why it mattered

An AI software factory should be able to build software whose value does not depend on an AI
feature. Otherwise, “AI-native” describes a product category rather than a production capability.

PerfectStar 2K tests whether the factory can hold a coherent product philosophy across many small,
interacting behaviors. Editors are unforgiving systems. Cursor movement, wrapping, undo, marked
blocks, file persistence, spellcheck, and export all affect the writer’s trust. A plausible-looking
screen is not enough.

The product therefore shifts attention from generation to accountability. Model-driven production
may accelerate exploration and implementation, but the editor succeeds only when its behavior is
consistent under repeated use.

## What was explicitly specified

The explicit side begins with the interaction model:

- common commands must remain reachable from the home row;
- writing and editing should remain one continuous mode;
- delayed prefix menus should teach without interrupting an experienced user;
- each window needs its own cursor, undo history, bookmarks, jump ring, and marked block;
- sessions must restore editing context without polluting the manuscript directory;
- manuscript export must produce a predictable document shape;
- writer notes must remain visible during work and absent from export.

These are product contracts, even when they are not network APIs. They determine how separate parts
of the editor may evolve without breaking the whole.

Rust’s type system and the project’s modular structure support those contracts, but they do not
replace the need to state the intended behavior. The specification remains the reference point for
both human and model-driven contributions.

## Where models contributed

Within the factory, models are useful for bounded exploration and production work: comparing
implementation approaches, tracing a behavior across modules, drafting a change, identifying cases
that deserve tests, and keeping documentation aligned with the current interface.

The important boundary is that a model does not decide what “a good writing environment” means.
Product judgment remains in the interaction principles and in direct use of the software.

This keeps the model in a productive role. It can help produce candidate changes rapidly without
turning every generated behavior into an accepted product decision.

## How the result was verified

The repository documents unit suites for buffer behavior, undo, wrapping, Markdown handling, and
RTF generation. A release build provides another objective gate. Direct use remains necessary for
the interactions that define the experience: command chords, menu timing, cursor motion, session
restoration, two-window work, and the readability of exported manuscripts.

These checks operate at different levels:

- unit tests protect deterministic transformations and state changes;
- build checks protect integration and type correctness;
- direct product inspection protects the writing experience;
- exported documents make output available for inspection outside the editor.

No single check proves the product. Together they create an evidence surface appropriate to the
system.

## What the factory retained

PerfectStar 2K has expanded the factory’s working knowledge in several areas:

- Rust terminal-interface structure;
- keyboard-first interaction design;
- persistent per-document state;
- long-lived undo and navigation history;
- deterministic document transformation and export;
- verification of software whose quality depends on sustained use.

Some of that knowledge will remain product-specific. The command language should not become a
generic component merely because it exists. The parts that deserve to compound are the production
patterns: how the factory specifies stateful behavior, tests document transformations, and keeps
generated work subordinate to a clear interaction philosophy.

That is the larger proof.

An AI software factory is not validated by putting a chat box into every product. It is validated
when model-driven production helps a small, accountable team ship software with a point of view—and
the finished product can stand on its own.
