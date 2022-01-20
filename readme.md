# @cute-me-on-repos/tini-async-input
## A component using in The TIKI Tini App Platform
This is a High performace input component for Tiki Mini Applet (Tini App Platform) that supports keyboard autocomplete modes

[preview and comparing]('./preview-and-comparing.gif')

## Usage

### Install package
```bash
# Using yarn
yarn add @cute-me-on-repos/tini-async-input
# Or npm
npm install --save @cute-me-on-repos/tini-async-input
```
### In component/page json config file
```json
{
    // ...your settings
    "usingComponents":{
        // ...your orther custom components
        "async-input":"@cute-me-on-repos/tini-async-input"
    }
}
```
### In component/page txml file

```xml
<async-input value="{{value}}"/>
```
Other props can be found [here](https://developers.tiki.vn/docs/component/basic/form/input)

> #### NOTE: _`controlled` is not supported_
