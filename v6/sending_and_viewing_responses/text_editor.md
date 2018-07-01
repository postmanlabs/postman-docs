---

title: "JSON / XML Editor"
page_id: "text_editor"
tags: 
  - "app"
warning: false
---

Postman uses the wonderful [Ace Editor][0] to render JavaScript, JSON, and XML. Here's all the places where it's used:

* Pre-request scripts and test scripts
![](https://www.getpostman.com/img/v1/docs/aceeditor-prscript.png)

* Raw body input
![](https://www.getpostman.com/img/v1/docs/aceeditor-rawbody.png)

* JSON/XML/HTML "Pretty view"
![](https://www.getpostman.com/img/v1/docs/aceeditor-body.png)

### Shortcuts

Here's a list of keyboard shortcuts that you can use while editing:

#### Editing

| Windows/Linux | Mac | Action |
|:--------------|:----|:-------|
| Ctrl-D | Command-D | Remove line |
| Alt-Shift-Down | Command-Option-Down | Copy lines down |
| Alt-Shift-Up | Command-Option-Up | Copy lines up |
| Alt-Down | Option-Down | Move lines down |
| Alt-Up | Option-Up | Move lines up |
| Alt-Delete | Ctrl-K | Remove to line end |
| Alt-Backspace | Command-Backspace | Remove to linestart |
| Ctrl-Backspace | Option-Backspace, Ctrl-Option-Backspace | Remove word left |
| Ctrl-Delete | Option-Delete | Remove word right |
| --- | Ctrl-O | Split line |

#### Folding

| Windows/Linux | Mac | Action |
|:--------------|:----|:-------|
| Alt-L, Ctrl-F1 | Command-Option-L, Command-F1 | Fold selection |
| Alt-Shift-L, Ctrl-Shift-F1 | Command-Option-Shift-L, Command-Shift-F1 | Unfold |
| Alt-0 | Command-Option-0 | Fold all |
| Alt-Shift-0 | Command-Option-Shift-0 | Unfold all |

#### Selection

| Windows/Linux | Mac | Action |
|:--------------|:----|:-------|
| Ctrl-A | Command-A | Select all |
| Shift-Left | Shift-Left | Select left |
| Shift-Right | Shift-Right | Select right |
| Ctrl-Shift-Left | Option-Shift-Left | Select word left |
| Ctrl-Shift-Right | Option-Shift-Right | Select word right |
| Shift-Home | Shift-Home | Select line start |
| Shift-End | Shift-End | Select line end |
| Alt-Shift-Right | Command-Shift-Right | Select to line end |
| Alt-Shift-Left | Command-Shift-Left | Select to line start |
| Shift-Up | Shift-Up | Select up |
| Shift-Down | Shift-Down | Select down |
| Shift-PageUp | Shift-PageUp | Select page up |
| Shift-PageDown | Shift-PageDown | Select page down |
| Ctrl-Shift-Home | Command-Shift-Up | Select to start |
| Ctrl-Shift-End | Command-Shift-Down | Select to end |
| Ctrl-Shift-D | Command-Shift-D | Duplicate selection |
| Ctrl-Shift-P | --- | Select to matching bracket |

#### Multicursor

| Windows/Linux | Mac | Action |
|:--------------|:----|:-------|
| Ctrl-Alt-Up | Ctrl-Option-Up | Add multi-cursor above |
| Ctrl-Alt-Down | Ctrl-Option-Down | Add multi-cursor below |
| Ctrl-Alt-Right | Ctrl-Option-Right | Add next occurrence to multi-selection |
| Ctrl-Alt-Left | Ctrl-Option-Left | Add previous occurrence to multi-selection |
| Ctrl-Alt-Shift-Up | Ctrl-Option-Shift-Up | Move multicursor from current line to the line above |
| Ctrl-Alt-Shift-Down | Ctrl-Option-Shift-Down | Move multicursor from current line to the line below |
| Ctrl-Alt-Shift-Right | Ctrl-Option-Shift-Right | Remove current occurrence from multi-selection and move to next |
| Ctrl-Alt-Shift-Left | Ctrl-Option-Shift-Left | Remove current occurrence from multi-selection and move to previous |
| Ctrl-Shift-L | Ctrl-Shift-L | Select all from multi-selection |

#### Go to

| Windows/Linux | Mac | Action |
|:--------------|:----|:-------|
| Left | Left, Ctrl-B | Go to left |
| Right | Right, Ctrl-F | Go to right |
| Ctrl-Left | Option-Left | Go to word left |
| Ctrl-Right | Option-Right | Go to word right |
| Up | Up, Ctrl-P | Go line up |
| Down | Down, Ctrl-N | Go line down |
| Alt-Left, Home | Command-Left, Home, Ctrl-A | Go to line start |
| Alt-Right, End | Command-Right, End, Ctrl-E | Go to line end |
| PageUp | Option-PageUp | Go to page up |
| PageDown | Option-PageDown, Ctrl-V | Go to page down |
| Ctrl-Home | Command-Home, Command-Up | Go to start |
| Ctrl-End | Command-End, Command-Down | Go to end |
| Ctrl-L | Command-L | Go to line |
| Ctrl-Down | Command-Down | Scroll line down |
| Ctrl-Up | --- | Scroll line up |
| Ctrl-P | --- | Go to matching bracket |
| --- | Option-PageDown | Scroll page down |
| --- | Option-PageUp | Scroll page up |

#### Find/Replace

| Windows/Linux | Mac | Action |
|:--------------|:----|:-------|
| Ctrl-F | Command-F | Find |
| Ctrl-H | Command-Option-F | Replace |
| Ctrl-K | Command-G | Find next |
| Ctrl-Shift-K | Command-Shift-G | Find previous |

#### Other

| Windows/Linux | Mac | Action |
|:--------------|:----|:-------|
| Tab | Tab | Indent |
| Shift-Tab | Shift-Tab | Outdent |
| Ctrl-Z | Command-Z | undo |
| Ctrl-Shift-Z, Ctrl-Y | Command-Shift-Z, Command-Y | Redo |
| Ctrl-/ | Command-/ | Toggle comment |
| Ctrl-T | Ctrl-T | Transpose letters |
| Ctrl-Enter | Command-Enter | Enter full screen |
| Ctrl-Shift-U | Ctrl-Shift-U | Change to lower case |
| Ctrl-U | Ctrl-U | Change to upper case |
| Insert | Insert | Overwrite |
| Ctrl-Shift-E | Command-Shift-E | Macros replay |
| Ctrl-Alt-E | --- | Macros recording |
| Delete | --- | Delete |
| --- | Ctrl-L | Center selection |

[0]: https://ace.c9.io/
