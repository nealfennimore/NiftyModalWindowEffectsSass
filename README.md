This is the sass version of [Nifty Modal Window Effects](http://tympanus.net/codrops/2013/06/25/nifty-modal-window-effects/) by [Mary Lou](http://tympanus.net/codrops/author/crnacura/). 
You can add which modal effects you want to use, as well as customize the modals easily with sass variables.

The modal effects classes were renamed, but otherwise the code remains the same.

--------
### Install
You'll need to run `bower install nifty-modal-sass` and then `npm install` in the bower_components if you need to compile the css. You can compile the sass into css after installing gulp by running `gulp styles`.

Otherwise import the sass `scss/modal.scss` into your own project.

### Setup
Customize your modals in `scss/helpers/_settings.scss`. You can disable and enable which modal effects you want to use by adding a false or true value to the `$use-*` variables. Disabled modal effect styles won't be added to the stylesheet.
