var phantomcss = require('phantomcss');

casper.test.begin('Coffee machine visual tests', function (test) {

    phantomcss.init({
        rebase: casper.cli.get("rebase"),
        // SlimerJS needs explicit knowledge of this Casper, and lots of absolute paths
        casper: casper,
        libraryRoot: '',
        screenshotRoot: './test/screenshots/desktop',
        failedComparisonsRoot: './test/failures',
        addLabelToFailedImage: false
    });

    // casper.on('remote.message', function (msg) {
    //     this.echo(msg);
    // });
    //
    // casper.on('error', function (err) {
    //     this.die("PhantomJS has errored: " + err);
    // });
    //
    // casper.on('resource.error', function (err) {
    //     casper.log('Resource load error: ' + err, 'warning');
    // });

    /*
     The test scenario
     */
    casper.start('http://localhost:8000/production/');

    var pages = [
        'calendar.html',
        'chartjs.html',
        'chartjs2.html',
        'contacts.html',
        'e_commerce.html',
        'echarts.html',
        'fixed_footer.html',
        'fixed_sidebar.html',
        'form.html',
        'form_advanced.html',
        'form_buttons.html',
        'form_upload.html',
        'form_validation.html',
        'form_wizards.html',
        'general_elements.html',
        'glyphicons.html',
        'icons.html',
        'inbox.html',
        'index.html',
        'index2.html',
        'index3.html',
        'invoice.html',
        'level2.html',
        'login.html',
        'map.html',
        'media_gallery.html',
        'morisjs.html',
        'other_charts.html',
        'page_403.html',
        'page_404.html',
        'page_500.html',
        'plain_page.html',
        'pricing_tables.html',
        'profile.html',
        'project_detail.html',
        'projects.html',
        'tables.html',
        'tables_dynamic.html',
        'typography.html',
        'widgets.html',
        'xx.html'
    ];

    casper.viewport(1920, 1080);

    pages.forEach(function (page) {
        casper.thenOpen('http://localhost:8000/production/' + page, function () {
            phantomcss.screenshot('body', page);
        });
    });

    casper.then(function () {
        phantomcss.compareAll();
    });

    casper.run(function () {
        phantomcss.getExitStatus(); // pass or fail?
        casper.test.done();
    });
});
