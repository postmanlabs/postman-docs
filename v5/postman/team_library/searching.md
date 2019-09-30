---
title: "Searching"
page_id: "searching"
warning: false

---

 **NOTE**: **Team Library is only available for versions 5.0 and below.**



When you search in Postman, you can:
* [Determine search settings](#determine) 
* [Refine search expressions](#refine)
* [Indicate where to search](#indicate)
* [Filter search results](#filter)
* [Navigate search results](#navigate)
* [Filter by name and description](#filtername)
* [Select favorite collections](#select)
* [Sort collections](#sort)
* [Search with the Slack bot](#search)

To begin a search, locate the **Find** icon in the status bar to search collections, environments, and globals. 

1. Click the **Find** icon. 

[![findIcon](https://assets.postman.com/postman-docs/Find_icon2.png)](https://assets.postman.com/postman-docs/Find_icon2.png)

2. Enter the term you want to search and determine the search settings.
3. Click the **Find** button.

**Note**: You can use a keyboard shortcut to access Find. Windows and Linux users: **CTRL+SHIFT+f**. Mac users: **CMD+SHIFT+f**. 

<h3 id="determine">Determine search settings</h3>
You can set search settings to refine search expressions, indicate where to search, filter search results, and navigate search results.

<h4 id="refine">Refine search settings</h4>
You can refine your search expression by selecting a regular expression or ignore case. 

| **Setting**  | **Description** |
| --- | --- |
| Regex (regular expression) | Set the entity as a string of text to locate.  |
| Ignore Case| Indicate whether or not upper- and lowercase letters are considered the same. |

[![findRegex](https://assets.postman.com/postman-docs/Find_regex1.png)](https://assets.postman.com/postman-docs/Find_regex1.png)

<h4 id="indicate">Indicate where to search</h4>
You can search through all collections, environments, and globals.

| **Setting**  | **Description** |
| --- | --- |
| Everything| Search all collections, environments, and globals. "Everything" is the default setting.  |
| Choose entities to find:| Select whether to direct your search in collections, environments, or globals. |
| Collections | Select this setting to search in collections. You can specify the collection to search or click "Select all" to search all collections.<br> [![findCollection](https://assets.postman.com/postman-docs/Find_searchCollections.jpg)](https://assets.postman.com/postman-docs/Find_searchCollections.jpg) |
| Environments| Select this setting to search in environments. You can specify the environments to search or click "Select all" to search all environments.<br>   [![findEnvironment](https://assets.postman.com/postman-docs/Find_environments.jpeg)](https://assets.postman.com/postman-docs/Find_environments.jpeg)|
| Globals| Select this setting to search in globals. <br> [![findGlobals](https://assets.postman.com/postman-docs/Find_globals.jpeg)](https://assets.postman.com/postman-docs/Find_globals.jpeg) |


<h4 id="filter">Filter search results</h4>
To narrow results in specific fields, you can choose the fields to exclude from the "Include fields" drop down for each of the tabs in collections, environments and globals.

|**Tab**  | **Filter**  |
| --- | --- |
| Collections| [![filter_collections](https://assets.postman.com/postman-docs/Filter_collections.png)](https://assets.postman.com/postman-docs/Filter_collections.png) |
| Environments| [![filter_environment](https://assets.postman.com/postman-docs/Find_environments_filter_1.jpeg)](https://assets.postman.com/postman-docs/Find_environments_filter_1.jpeg) |
| Globals |  [![filter_globals](https://assets.postman.com/postman-docs/Find_globals_filter_2.jpeg)](https://assets.postman.com/postman-docs/Find_globals_filter_2.jpeg)   |

<h3 id="navigate">Navigate search results</h3>
As you browse search results, you can collapse the entities you don’t want to see.

|**Action** |**Example**  |
| --- | --- |
| To expand and collapse entities, click the entity name in the results area.| [![find_navigation](https://assets.postman.com/postman-docs/Find_navigatingResults4.jpeg)](https://assets.postman.com/postman-docs/Find_navigatingResults4.jpeg) |
| In Collections, click "Open in builder" to specify a request in the builder. | [![find_open_bldr](https://assets.postman.com/postman-docs/FIND_collection_openINBld3.jpeg)](https://assets.postman.com/postman-docs/FIND_collection_openINBld3.jpeg)|
| In Environments, click "Open" to specify a request in the **MANAGE ENVIRONMENTS** modal. |[![find_environ_bldr](https://assets.postman.com/postman-docs/FIND_environments_Open.jpeg)](https://assets.postman.com/postman-docs/FIND_environments_Open.jpeg)  |
| In Globals,  click "Open" to specify a request in the **MANAGE ENVIRONMENTS** modal. |[![find_openSearch](https://assets.postman.com/postman-docs/Find_openSearchResults_globals.jpeg)](https://assets.postman.com/postman-docs/Find_openSearchResults_globals.jpeg)  |
| Hover over a value or description to see a tooltip with information about the key. You can see the key name to which a value or a description belongs for data editor elements in the form of key, value, description, and so on.   |  [![find_toolTip](https://assets.postman.com/postman-docs/Find_toolTip2.jpeg)](https://assets.postman.com/postman-docs/Find_toolTip2.jpeg)  |

<h3 id="filtername">Filter by name and description</h3>

To quickly filter the list of collections in your library, begin typing the collection name or description in the search input field.

[![filter collections](https://assets.postman.com/postman-docs/filter_name_desc.png)](https://assets.postman.com/postman-docs/filter_name_desc.png)

<h3 id="select">Select favorite collections</h3>

You can favorite collections in the Team Library like you do in the **Collections** sidebar. Click on the star icon to bring the collection(s) to the top of the list. Favorited collections from both places will always be listed at the top.

<h3 id="sort">Sort collections</h3>

You can re-order collections in the Team Library by "Name", "Last Modified", "Owner", or by "Date Created". Remember that collections that you have favorited will be at the top but now sorted by the criteria you selected.

[![sort collections](https://assets.postman.com/postman-docs/filter_sort.png)](https://assets.postman.com/postman-docs/filter_sort.png)

<h3 id="search">Search with the Slack Bot</h3>

You can integrate the Postman Pro Search Slack bot and get more detailed search results too. This feature will be available in the Team Library soon. Read more about the [Slack Bot](http://blog.getpostman.com/2015/09/24/api-integrations-using-postman-building-a-slack-channel-bot/).
