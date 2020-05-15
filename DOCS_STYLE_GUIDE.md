# Documentation Style Guide

Thanks for your interest in contributing to the Postman docs! :rocket::book::trophy:

Check out the [contributing](CONTRIBUTING.md) guide for a step by step overview of making your contribution. Read on for tips on what types of language to use in your edits and additions.

* [Audience](#audience)
* [Language style](#language-style)
    * [Grammar and word choice](#grammar-and-word-choice)
    * [Tone](#tone)
    * [Readability](#readability)
* [Formatting and structure](#formatting-and-structure)
    * [Document sections](#document-sections)
* [Images](#images)
* [Links](#links)
* [Publish!](#publish)

_This style guide is a work in progress, and we'll be continuing to iterate on it—create an [issue](https://github.com/postmanlabs/postman-docs/issues) if you'd like to provide feedback! Please also note that the Postman team will be working to apply these guidelines across the learning center—initially focusing on the core documentation, then later on additional material such as tutorials._

## Audience

The Postman community is very varied, and we aim to create an empathetic, inclusive learning experience for all. Remember that __not everyone reading this documentation is a developer__, so try to make the information as accessible as possible to anyone who happens to visit, regardless of their technical background or skill level.

For more advanced topics, if someone doesn't have the required skills to carry out a particular task yet, we want to help them get there. Provide context by indicating prerequisites and setting clear expectations, ideally linking to support information so that people can equip themselves with the necessary understanding to carry on learning. Be aware of what you're assuming people already know, but if possible link to background info rather than including it to help keep each doc focused on its core topic.

Avoid unnecessary tech jargon, but don't simplify either—try to strike a balance between supporting people regardless of skill level and using accurate industry terms (since readers will need to know these in order to apply what they learn).

Postman learners speak lots of different languages—but right now our docs are only available in English. Try to use clear, concise sentences so that people reading in a second language can follow along. :earth_africa::earth_americas::earth_asia:

## Language style

The documentation in the [learning center](https://learning.postman.com/docs) is intended to help people learn how to use Postman, so use practical instructional language wherever possible. Be specific, and "__show, don't tell__."

---

:thumbsdown::no_entry_sign: Specify any request parameters you need to send.

:thumbsup::white_check_mark: To specify parameters to send with your request, enter values either in the URL or the __Params__ editor.

---

Don't make time-specific references like "now," "soon," and "new." These are appropriate in time-stamped resources like blog posts, but documentation info should not be relative to a particular point in time, and should remain equally valid for present and future readers—as well as people who have never used Postman before.

---

:thumbsdown::no_entry_sign: You can now use GraphQL in Postman in addition to the existing options.

:thumbsup::white_check_mark: You can use GraphQL queries in your Postman requests.

---

If your doc includes a term you think a significant number of readers may not understand, clarify it the first time you use it in the page, linking to supporting docs if appropriate. The same applies to abbreviations and acronyms.

Try to phrase content positively where possible:

---

:thumbsdown::no_entry_sign: You can't access private workspaces without a Postman Enterprise account.

:thumbsup::white_check_mark: To access private workspaces, upgrade to Postman Enterprise.

---

### Grammar and word choice

Use US English by default.

Preserve subject-verb agreement—if a verb is modifying a singular noun, the verb should also be singular (and if the noun being modified is plural, the verb should be plural too):

---

:thumbsdown::no_entry_sign: Postman Collections are a group...

:thumbsup::white_check_mark: Postman Collections are groups...

---

Exclamation marks are typically not appropriate for core documentation, but can be in tutorial material.

Try to minimize use of "etc" and "and so on," considering whether you can make the sentence more specific instead.

Use "for example" instead of "e.g."

For menu interaction, use "select" instead of "click."

Be extra careful with words that have a specific meaning in the context of Postman but that may refer to something else, including additional pointers to remove ambiguity. Consider the following terms in particular:

* Collection
* Request
* Header (_request header vs Postman UI header_)
* Parameter
* API
* Documentation (_user's API documentation vs Postman learning documentation_)
* Workspace
* Test
* Environment
* Variable

### Tone

Official Postman documentation language aims to be friendly and conversational in tone, but not colloquial—not too formal or too frivolous. Think friendly teacher. :school_satchel:

Try not to use language that readers might typically associate with marketing material, for example words that are subjective or opinion-based, such as "great" and "amazing." By focusing on effectively showing __how__ to use a feature, docs can demonstrate _what_ the feature is and _why_ someone would want to use it along the way.

---

:thumbsdown::no_entry_sign: With the Postman Visualizer, you can create eye-catching presentations that power your API data communication strategy.

:thumbsup::white_check_mark: You can create visualizations of responses in Postman to present your request data in graphical formats such as charts.

:thumbsup::white_check_mark: To visualize your response data, add JavaScript to the __Tests__ code for the request...

---

Avoid terms like "easy," "simply," and "just." Everyone's experience is different, and we don't want anyone to feel they aren't learning quickly enough. :slightly_smiling_face:

Avoid gendered words, including pronouns, but feel free to use "they" and "them," and to address the user as "you." Choose pronouns carefully, especially in cases where it may not be clear what you're referring to—relative pronouns (such as "that" and "they") can help reduce ambiguity. Be mindful of pronoun choice when referring to the Postman user's users, for example a consumer of an API that a Postman user is publishing:

---

:thumbsdown::no_entry_sign: If a user views the documentation he can copy and paste code snippets.

:thumbsup::white_check_mark: Your users can try out requests by copying and pasting the code snippets that are included in your API documentation.

---

Avoid using first person in core docs—"let's" and "we" are appropriate in tutorials and blog posts but typically not in the documentation.

Be careful when using metaphors or choosing examples—these don't always translate across different cultures and languages.

### Readability

In general, use active voice and try not to use passive structures:

---

:thumbsdown::no_entry_sign: The request can be run by clicking on the Send button.

:thumbsup::white_check_mark: To run the request, click __Send__.

---

Try to keep your sentences as short as possible. Use commas to break the content of a sentence into smaller, more digestible chunks—use serial commas in sentences containing three or more clauses. If a sentence has multiple clauses and you're having to use lots of commas, semicolons etc, it may benefit from being broken into more than one sentence, or perhaps presented in a different format such as a list. Be as concise as you can, while still being specific and conveying the relevant info. :eyeglasses:

Help users to scan content, by indicating the purpose of a page, section, or sentence at the beginning. Introducing a sentence or section with a conditional clause lets learners know straight away whether it's relevant to them or not:

---

:thumbsdown::no_entry_sign: Click __Tests__ and enter JavaScript code to carry out testing on your request response.

:thumbsup::white_check_mark: To carry out tests on your request response, select __Tests__ and enter JavaScript code.

---

Minimize repetition, and read your edits over after drafting them—reading a doc aloud can help to identify issues with it.

Use example code and images such as screenshots to aid comprehension of what you're writing.

## Formatting and structure

Use lists and other structures to break your content up and present it in a more readable format. The [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) provides an overview of the options.

When using a list, everything that appears before it (before the colon) should be a complete sentence:

---

:thumbsdown::no_entry_sign: Your parameters can include:

:thumbsup::white_check_mark: Your parameters can include any of the following options:

---

Use __bold__ to highlight names for parts of the software that the user interacts with. Say "click" not "click on." Include the visible name of the relevant user interface component wherever possible instead of describing it. When you refer to a feature of the user interface, capitalize names to reflect what you see in Postman:

---

:thumbsdown::no_entry_sign: Click on the send button

:thumbsup::white_check_mark: Click __Send__

---

> The only exception to this is where the UI element includes all upper case—only capitalize initial letters in the documentation.

The first time you mention a generic Postman feature in a page, capitalize it and use its full name—later in the doc you can refer to it in shortened forms and without capitalizing:

---

:thumbsup::white_check_mark: Postman Collections group requests together. You can use collections to...

---

Use backticks to indicate code—use \`single backticks\` for code presented inline (inside a text section) and three backticks for blocks of code, optionally indicating the code language to improve syntax highlighting:

---

For example the following markdown is indicated as JSON:

<pre lang="no-highlight">
```json
{
 "id": 1
}
```
</pre>

The output should render with JSON syntax highlighting:

```json
{
 "id": 1
}
```

---

Indent code blocks using spaces.

Use single backticks for inline references to the following API constructs:

* HTTP verbs (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`, etc)
* status codes (`200 OK` etc)
* parameter names
* variable names
* JSON object and field names
* file types

Use Markdown blockquotes for information you want to present as a note, for example info that isn't relevant to all readers of a page.

Use > to separate steps such as a sequence of clicks on user interface items:

---

:thumbsup::white_check_mark: Select __View__ > __Developer__ > __Show DevTools__

---

Periods and commas should appear inside quotation marks:

---

:thumbsup::white_check_mark: Enter a name for your collection, for example "Product Directory."

---

If you include placeholder values in a code excerpt, highlight the section users will need to change in order to use the code:

---

:thumbsup::white_check_mark:
To send a query parameter with the request, append it to the end of the URL as a key-value pair with the parameter name:
<pre>/posts?category=<strong><em>draft</em></strong></pre>

> Note that to do this in markdown you need to use `<pre>` tags with `<i>` or `<em>` around the highlighted section.

---

### Document sections

Many readers will scan docs rather than read every word from beginning to end. To make content "skimmable," break it into relevant sections, each indicated by a subheading. Include a TOC (Table of Contents) at the top of any page with multiple sections in it, linking to the sections so that learners can jump to the info they're looking for.

Each doc should begin with an introduction section. Subheadings should only appear after this intro section. In most cases, the rest of the page should show users how to carry out the relevant task in generic terms. If a page begins to look overloaded, consider splitting it into sub-pages.

In general, aim for the following structure:

* An intro section outlining the purpose of the page and indicating / linking to any required knowledge
    * This might include a video in some cases
* A main instructional section walking users through a series of generic steps showing how to carry out whatever task the page represents
    * Subheadings to indicate the steps
    * Images to illustrate key steps or configurations
* Any supplementary material, which will vary by topic but may include the following:
    * Any info about carrying out the task using the Postman API
    * Links to relevant collections / templates
    * Debugging info
* Links to relevant follow-up material in a Next Steps section

Add any relevant supplementary links to the sidebar using the frontmatter at the top of each docs page.

Use sentence case for headings and subheadings, only capitalizing the first word and any proper names:

---

:thumbsdown::no_entry_sign: Sending API Requests

:thumbsup::white_check_mark: Sending API requests

---

Use present participles (verbs ending in "-ing") for page headings throughout the documentation, for example "Running requests." In tutorial material (not included in the core docs), you can use present tense without the participle form for subheadings, for example "Run your request."

## Images

Images can help to provide context and give users a reference point for their learning. However images should only act as a backup for text information—don't include required information only in an image, make sure the necessary instructions are also in text form:

---

:thumbsdown::no_entry_sign: Select the options in the following image.

---

Try to keep your images focused on what's relevant, but still show enough of your screen to indicate how users can get there. For example, in a doc showing how to set parameters, you could show the top of the request tab along with the parameter input area, but cut out other parts of the window. Crop your images to remove parts of your screen that are not relevant to the documentation, for example docks and desktop areas.

Include alternative text for images.

Surround images with a 1px border dark grey, ideally `#4a4a4a`.

Use JPG format for images, and optimize them to minimize file size.

## Links

Use meaningful text for links, avoiding phrases such as "click here" when possible:

---

:thumbsdown::no_entry_sign: Click [here](https://learning.postman.com/docs/postman/scripts/intro_to_scripts/) for more details on scripts.

:thumbsup::white_check_mark: For more on scripting in Postman, see [Intro to Scripts](https://learning.postman.com/docs/postman/scripts/intro_to_scripts/).

---

An exception to this is the __Run in Postman__ button, which you can refer to directly, for example "Import the collection by clicking the __Run in Postman__ button below."

Include links to relevant supporting docs inline throughout your pages, but in general only link to the same location once per page—usually the first time you mention the term.

Use relative links between docs.

Don't display a raw URL in text, unless seeing the URL is essential to the learning objective:

---

:thumbsdown::no_entry_sign: Navigate to http://learning.postman.com

:thumbsup::white_check_mark: Send a request to `https://postman-echo.com/get`

---

## Publish!

Don't leave your writing work lying around in a file somewhere—once you think your edits are in reasonable shape, [open a pull request](CONTRIBUTING.md) and share your guidance with the Postman community! We'll be more than happy to talk you through any changes and your contribution will be greatly appreciated. :mega::mortar_board::tada:
