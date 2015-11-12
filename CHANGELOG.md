## CHANGELOG

### 0.1.0

* [BREAKING CHANGE] React 0.13 => React 0.14
  * The dependency allows the lib to use parent-based context
* [FEATURE] `reverse` prop for flipping the side of the avatar

### 0.0.8

* [FIX] remove `.isRequired` from `Img` href PropType

### 0.0.7

* [BREAKING CHANGE] Remove default Media styles `margin: 0 1.5em`

### 0.0.6

* [FEATURE] add noDefaultStyle prop for clearing default styles
* [FEATURE] extract styleResolver into reusable function

### 0.0.5

* [BREAKING CHANGE] remove default classes
  + media
  + img
  + bd
* [BREAKING CHANGE] merge props.style into default style. no longer wipes out default style
* [FEATURE] add tests via `npm test` and `npm run test:watch`

### 0.0.4

* [BREAKING CHANGE] remove namspacing
  + MediaImg -> Img
  + MediaImgExt -> ImgExt
  + MediaBd -> Bd

### <0.0.4

* ...stuff happened...
