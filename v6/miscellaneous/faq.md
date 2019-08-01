---

title: "Frequently Asked Questions"
page_id: "faq"
warning: false
---

### Postman

#### Is Postman free?

Yes, Postman (including the individual Sync service) is completely free! You get the advantages of using [environments][1], [collections][2], [Newman][3], and the [Interceptor][4].

#### I'm using the Chrome extension. Why should I migrate to the Packaged app?

The Chrome extension has a very limited feature set, mostly limited by the restrictions that Chrome extensions face. The Packaged app has access to more functionality, and can help you be a lot more productive.

Moreover, the [Sync feature][6] is only available on the Packaged app, and [migrating your data][7] from the extension is painless.

### Sync

#### What is Postman Sync?

Sync is a free service that we're slowly rolling out to Postman users. Users who have been invited to Sync will see a popup outlining the terms and conditions they must accept to begin using Sync.
Using the service is completely optional. Users who accept the terms will have all their data backed up to our servers. Collections, environments, history, and header presets will all be backed up to the Postman server, and will be available in any app that you sign in from.

Any changes to your data will also be synced in real time.

#### How do I disable Sync?

If you or your organization have a requirement to prevent your data from being synced to our Cloud, you have the option to disable Sync at any time. Just head to the Sync tab in Postman's Settings menu, then click 'Disable Sync'. Please note that you will need to manually back up your data if you have Sync disabled.

If you need your data to be removed from our servers, you can file a ticket via our [support center]({{https://support.getpostman.com/hc}}) - please include your username/email associated with your account.

### Newman

#### What is Newman?

Newman is a NodeJS-based command-line collection runner. Instead of using the collection runner in Postman, you can use Newman and integrate API tests into your Continuous Integration pipeline. You can also set up a cron job to run API tests at scheduled intervals. Check out the [Newman documentation][3] and the [NPM listing][12].

### If you face problems

#### I'm noticing unexpected behavior with Postman. What do I do?

One very powerful tool in your arsenal is Postman's Dev Tools window. Check out [this post][14] on our blog to enable and open the Dev Tools window in Postman.

Any errors in Postman will show up as error messages in the console here. You'll also be able to see requests that you make in the network tab. You can use this to make sure that requests are being sent as you expect.

#### Who do I contact for help?

For Postman - check out our [support page][16] for details.

For Newman - you can file an issue on the [Newman issue tracker.][17]

### Miscellaneous

#### How do I install Postman without an internet connection?

We offer native apps for Mac and Windows (available [here][18]). You can download the installer on a machine with an active internet connection, and transfer it to the target machine.


[1]: https://www.getpostman.com/docs/environments
[2]: https://www.getpostman.com/docs/collections
[3]: https://www.getpostman.com/docs/newman_intro
[4]: https://www.getpostman.com/docs/capture
[6]: https://www.getpostman.com/docs/sync_overview
[7]: https://www.getpostman.com/docs/migration
[12]: https://www.npmjs.com/package/newman
[14]: http://blog.getpostman.com/2014/01/27/enabling-chrome-developer-tools-inside-postman/
[16]: https://www.getpostman.com/support
[17]: https://github.com/postmanlabs/newman/issues
[18]: https://www.getpostman.com/downloads/
