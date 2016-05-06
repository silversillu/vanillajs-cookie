# vanillajs cookie

Super easy vanilla javascript plugin for reading, writing and deleting cookies.

## Installation

Include script *before* calling the function, no dependencies:

```html
<script src="/path/to/vanillajs-cookie.js"></script>
```

**Do not include the script directly from GitHub (http://raw.github.com/...).** The file is being served as text/plain and as such being blocked
in Internet Explorer on Windows 7 for instance (because of the wrong MIME type). Bottom line: GitHub is not a CDN.

## Usage

Create session cookie:

```javascript
vCookie.set('name', 'value');
```

Create expiring cookie, 7 days from then:
**Feature in progress!**
```javascript
vCookie.set('name', 'value', { expires: 7 });
```

Create expiring cookie, valid across entire site:
**Feature in progress!**
```javascript
vCookie.set('name', 'value', { expires: 7, path: '/' });
```

Read cookie:

```javascript
vCookie.get('name'); // => "value"
vCookie.get('nothing'); // => undefined
```

Read all available cookies:

```javascript
vCookie.get(); // => { "name": "value" }
```

Delete cookie:

```javascript
vCookie.remove('name');
```

## Authors

[Silver Ringvee](https://github.com/silversillu/)
