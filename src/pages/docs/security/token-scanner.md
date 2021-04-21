---
title: "Token Scanner"
order: 115
page_id: "token-scanner"
search_keyword: "password security, secret scanning, secret, API key security"
---
The Postman Token Scanner scans your public workspaces, collections, environments, and documentation to find accidentally exposed tokens. This protects your organization and prevents malicious users from exploiting the tokens.

> Token Scanner is available only on the [Enterprise plan](https://www.postman.com/pricing/) and is enabled by default.

## Contents

* [Use cases](#use-cases)
* [Supported tokens](#supported-tokens)
    * [Default alerts](#default-alerts)
    * [Custom alerts](#custom-alerts)

## Use cases

A scan is triggered whenever your team members do any of the following actions:

* Change the workspace visibility to Public.
* Share a collection or environment to a public workspace.
* Make changes to a collection or environment that is present in a public workspace.
* Author new documentation for a Postman Collection and make it public.
* Make any changes to a publicly available Postman documentation.

## Supported tokens

The Token Scanner will scan a variety of tokens by default. You can also add your team's proprietary third-party app tokens that are not supported yet using [custom alerts](#custom-alerts).

### Default alerts

By default, tokens issued by the following service providers are scanned:

* Basic Auth
* Bearer Token
* Google API Key
* Google OAuth Token
* PGP Private Key
* Postman API Key
* RSA Private Key
* Slack Access Token
* Slack Webhook URL
* SSH (DSA) Private Key
* SSH (EC) Private Key
* SSH (OpenSSH) Private Key
* Stripe Restricted Key
* Stripe Secret Key

### Custom alerts

Custom alerts can be used to scan your team's proprietary third-party app tokens that are not scanned by default.

> Your team can add up to five custom alerts.

To add custom alerts:

1. Go to **Team Settings** > **Token Scanner**.
2. In the **Custom alerts** section, click the **Add alerts** button .
3. In the **Add Alert** page, define the custom token.
