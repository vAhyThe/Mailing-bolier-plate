# Mailing bolier plate

Reference to [wiki](http://kb.joinut.com/doku.php?id=coder:quoran#kodovani_mailu)

#### step 1 Project dependencies

* You must have installed node.js, if not [node.js](https://nodejs.org/en/).
* You must have installed gulp, if not [gulp](http://gulpjs.com/).
* If you want have live reload, [chrome extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei).

### step 2 Project

* run `npm install` in project root to install dependencies.
* run `gulp` to start watchers which will compile into `/build/` and start livereload.

### step 4 Rules

* All will be build as `table` layout. No !!`DIV`!!.
* All `table`, `tr`, `td` `img` must have `width` and `height`.
* All images must have filled `alt`, if this image have no information then at least `alt=""`.
* All used images via `external lines`.
* All elements must have defined `background-color`.
* All rules after build must be !!`inline`!!.

### step 3 Before coding

* In `gulpfile.js` set your `ctaLink` to right address etc. "http://your_domain.com with some utm parameters". In code will look like `href="@@ctaLink"`.

### step 5 Coding

* All you works will be in `index.html`.
* All complete works, which you will be delivered are in `/build/index.html`.
* All styles can be put into `style` tag in head. Use class to style element like normal html and `gulp` inline the styles.

### step 6 Before send to client/PM

* Test on [mail-tester](https://www.mail-tester.com/) if you have less then `10/10`, upgrade your code.
* Test on [emailonacid](emailonacid.com).
* Watch size of images. If there will be used `png` images try  [png quant](https://pngquant.org/) or `jpeg`/`jpg` [jpeg mini](http://www.jpegmini.com/) for smaller size.
