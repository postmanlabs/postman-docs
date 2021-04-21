---
title: "Commenting on collections"
order: 73.3
page_id: "commenting_on_collections"
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Inline Comments | Postman Level Up"
    url: "https://www.youtube.com/watch?v=fkYiyCj43uk&list=PLM-7VG-sgbtC5tNXxd28cmePSa9BYwqeU&index=6"
warning: false
---

You can leave comments on collections and requests to collaborate with your teammates. You can tag your collaborators in comments to let them know that you have questions or feedback.

## Contents

* [Commenting on a collection](#commenting-on-a-collection)
* [Commenting on a request](#commenting-on-a-request)
* [Commenting on a folder](#commenting-on-a-folder)
* [Reading comments](#reading-comments)
* [Editing comments](#editing-comments)
* [Resolving comments](#resolving-comments)
* [Deleting comments](#deleting-comments)
* [Tagging members in comments](#tagging-members-in-comments)
* [Next steps](#next-steps)

> Postman supports comments on requests and request parameters.

## Commenting on a collection

You can leave comments on collections from Postman.

> Team members must have access to the collection in question in order to post comments.

1. Sign in to [Postman](https://app.getpostman.com).
2. At the top, select a **Workspace** and then click the **Collections** tab.
3. Open the collection you want to leave your comment on and click **Comments** next to the name of the collection.

![Add comments on collection](https://assets.postman.com/postman-docs/commenting-on-a-collection-v8.gif)

## Commenting on a request

You can comment on requests in Postman. You can only post comments on saved requests.

You can add comments at the [request level](#adding-a-comment-on-a-request), on [request parameters](#adding-a-comment-on-request-parameters), and [within the request configuration](#adding-an-inline-comment) (request body, pre-request script, and test script).

### Adding a comment on a request

1. Navigate to the request you want to leave a comment on.
2. Switch to **Comment** mode at the top-right of the window.
3. Write your comment, then click **Add Comment**.

![Add comments on collection request](https://assets.postman.com/postman-docs/adding-a-comment-on-a-collection-request-v8.gif)

### Adding a comment on request parameters

You can leave comments on request parameters (query parameters, path parameters, headers, request bodies of type form-data, and x-www-form-urlencoded).

> You can only add comments on saved requests.

1. Open the request you would like to comment on.
2. Switch to **Comment** mode at the top-right of the window.
3. Click on the key, value, or description.
4. Enter your comment, then click **Add Comment**.

![Add comments on request params](https://assets.postman.com/postman-docs/adding-a-comment-on-a-request-parameter-v8.gif)

### Adding an inline comment

You can add a comment on a specific part of a raw body, a pre-request script, or a test script.

1. Open the request you would like to comment on.
2. Switch to **Comment** mode at the top-right of the window.
3. Open the tab where you want to leave a comment.
4. Highlight the text you want to comment on.
5. Enter your comment, then click **Add Comment**.

![Add inline comments for tests](https://assets.postman.com/postman-docs/adding-an-inline-comment-tests-v8.gif)

## Commenting on a folder

You can leave comments on folders in Postman.

1. Open the folder you would like to comment on.
2. Open the **Comments** icon <img alt="Mini comments icon" src="https://assets.postman.com/postman-docs/mini-comments-icon-v8.jpg" width="20px"/> at the top-right of the context bar.
3. Enter your comment, then click **Add Comment**.

![Adding comment on a folder](https://assets.postman.com/postman-docs/commenting-on-a-folder-v8.gif)

## Reading comments

You can see comments made by teammates on requests and request parameters in Postman.

You can read comments made on the request and on request parameters from the app.

1. In Postman, open the request that has the comments you want to review.
2. Switch to **Comment** mode at the top-right of the window.
   * You can filter inline comments by **Open Comments**, **Resolved Comments**, or both.

## Editing comments

You can make changes to comments you've already posted. Other team members cannot edit your comments.

1. In Postman, open the collection with the comment you want to edit.
2. Find the comment and click **Comment** > **Edit**.

<img src="https://assets.postman.com/postman-docs/editing-a-comment-v8.jpg" alt="Edit comment" width="50%">

## Resolving comments

You can resolve comments made on request parameters when you no longer want them to display.

1. Open the collection with the comment(s) you want to resolve.
2. Switch to **Comment** mode at the top-right of the window.
3. Click **Resolve** next to the comment(s) you would like to resolve.

![Resolve comments](https://assets.postman.com/postman-docs/resolving-a-comment-v8.gif)

## Deleting comments

1. In Postman, open the collection with the comment you want to delete.
2. Find the comment and click the trash can icon.

<img src="https://assets.postman.com/postman-docs/deleting-a-comment-v8.jpg" alt="Delete comment" width="50%">

> For moderation purposes, admins can delete comments made by anyone, but cannot modify comments.

## Tagging members in comments

When you leave feedback or a question for a specific teammate, you can let them know by tagging them in your comment.

1. In Postman, open the collection or request you want to leave your comment on.
2. Click **Comments** and write your message.
3. To tag your teammate, type "@" and choose their name from the list.
4. Click **Add comment**.

Your teammate will be notified in the app or with an email that they've been tagged in a comment. In-app notifications appear as a red dot above the bell icon at the top right.

> If your teammate has disabled notifications then they will not be notified. If they don't have access to the collection they've been tagged on, they'll need to request access before they can read the comment.

<img src="https://assets.postman.com/postman-docs/check-comment-notifications-v8.jpg" alt="Notification bell" width="50%">

## Next steps

Postman comments support Markdown. For more information on formatting using Markdown refer to [Markdown in API Documentation](https://documenter.getpostman.com/view/33232/markdown-in-api-documentation/JsGc?version=latest).
